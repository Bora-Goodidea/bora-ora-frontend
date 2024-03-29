import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { colorDebug, saveRefreshToken, getRefreshToken, getAccessToken, removeLoginToken } from '@Helper';
import lodash from 'lodash';

export interface TokenResultInterface {
    access_token: string;
    refresh_token: string;
}

// FIXME: 2023-11-18 16:12  console 에 에러 메시지 안보이게 처리...
interface serviceInterface {
    method: 'get' | 'post' | 'delete' | 'put';
    url: string;
    payload: any;
}

const apiBaseURLL: string | undefined = lodash.isUndefined(process.env.REACT_APP_API_URL)
    ? 'http://localhost'
    : process.env.REACT_APP_API_URL;
export const axiosDefaultHeader: AxiosRequestConfig = {
    baseURL: apiBaseURLL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Client-Type': lodash.isUndefined(process.env.REACT_APP_CLIENT_TYPE) ? '' : process.env.REACT_APP_CLIENT_TYPE,
        Accept: 'application/json',
        Authorization: getAccessToken() ? `Bareer ${getAccessToken()}` : '',
    },
};

const setTokenData = ({ access_token, refresh_token }: { access_token: string; refresh_token: string }): void => {
    saveRefreshToken({
        accessToken: access_token,
        refreshToken: refresh_token,
    });
};

/**
 * refresh Token.
 * 토큰 리프레쉬
 */
const handleTokenRefresh = (): Promise<{
    access_token: string;
    refresh_token: string;
}> => {
    colorDebug('warning', ':: Try Token Refresh :: ');
    const refreshToken = getRefreshToken();
    return new Promise((resolve, reject) => {
        const _thisAxios_: AxiosInstance = axios.create(axiosDefaultHeader);
        _thisAxios_
            .post<TokenResultInterface>(`${apiBaseURLL}/api/auth/token-refresh`, {
                refresh_token: refreshToken,
            })
            .then(({ data }: { data: TokenResultInterface }) => {
                colorDebug('success', ':: Token Refresh Success :: ');
                resolve({
                    access_token: data.access_token,
                    refresh_token: data.refresh_token,
                });
            })
            .catch(() => {
                colorDebug('error', ':: Token Refresh Error :: ');
                reject({
                    access_token: '',
                    refresh_token: '',
                });
            });
    });
};

/**
 * axios Request 에 토큰 추가.
 * @param request
 * @param access_token
 */
const attachTokenToRequest = (request: AxiosRequestConfig, access_token: string): void => {
    request.headers!.Authorization = 'Bearer ' + access_token;
    return;
};

const shouldIntercept = (error: AxiosError) => {
    try {
        return error.response?.status === 401;
    } catch (e) {
        return false;
    }
};

const _axios_ = ({ method = 'post', url, payload }: serviceInterface): any => {
    let isRefreshing = false;
    let failedQueue: any = [];

    const options = {
        attachTokenToRequest,
        setTokenData,
        handleTokenRefresh,
        shouldIntercept,
    };

    const processQueue = (error: AxiosError | null, token: string | null = null) => {
        failedQueue.forEach((prom: any) => {
            if (error) {
                prom.reject(error);
            } else {
                prom.resolve(token);
            }
        });

        failedQueue = [];
    };

    /**
     * axios Error Interceptor
     * @param error
     */
    const errorInterceptor = (error: any) => {
        const {
            config: {
                headers: { Authorization },
            },
        } = error;
        const status = error.response?.status;

        if (status == 0) {
            return Promise.resolve({
                status: false,
                message: '서버에 연결 할수 없습니다.',
            });
        }

        // FIXME 서버 상태, 인증 외에 401 에러 처리 어떻게 할껀지?
        if (!options.shouldIntercept(error)) {
            const statusText = error.response?.statusText;
            const errorMessage = error.response?.data.message;

            if (status === 503) {
                // 서버 에러
                colorDebug(`error`, 'Server Error' + errorMessage);
            } else if (status === 412) {
                // 헤더 체크 에러.
                colorDebug(`error`, 'Client Error' + errorMessage);
            } else if (status === 429) {
                // 너무 많은 요청 일때.
                colorDebug(`error`, 'Client Error' + errorMessage);
            }

            return Promise.resolve({
                status: false,
                message: errorMessage ? errorMessage : statusText,
            });
        }

        if (error.config._retry || error.config._queued) {
            return Promise.reject(error);
        }

        const originalRequest = error.config;

        // FIXME  이거 뭐하는 소스 코드 인지?
        if (isRefreshing) {
            return new Promise(function (resolve, reject) {
                failedQueue.push({ resolve, reject });
            })
                .then(token => {
                    originalRequest._queued = true;
                    options.attachTokenToRequest(originalRequest, token as string);
                    return _Axios_.request(originalRequest);
                })
                .catch(() => {
                    return Promise.reject(error); // Ignore refresh token request's "err" and return actual "error" for the original request
                });
        }

        // 인증 에러시 토큰 리프레쉬 시도.
        if (originalRequest.url !== `/login-check` && status === 401 && Authorization.length > 0) {
            originalRequest._retry = true;
            isRefreshing = true;
            return new Promise(resolve => {
                options.handleTokenRefresh
                    .call(options.handleTokenRefresh)
                    .then((tokenData: any) => {
                        options.setTokenData(tokenData);
                        options.attachTokenToRequest(originalRequest, tokenData.access_token);
                        processQueue(null, tokenData.access_token);
                        resolve(_Axios_.request(originalRequest));
                    })
                    .catch(() => {
                        // 토큰 Refresh Error
                        colorDebug('warning', ':: Token Refresh Fail :: ');
                        removeLoginToken();
                        // processQueue(err, '');
                        // resolve(err);

                        //로그인 유지 시간이 만료
                        colorDebug(`warning`, `로그인 유지 시간이 만료되었습니다.`);
                        resolve({
                            status: false,
                            message: `로그인 유지 시간이 만료되었습니다.`,
                        });
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            });
        } else if (status === 401) {
            return Promise.resolve({
                status: false,
                message: error.message,
            });
        }
    };

    /**
     * 정상 리턴.
     * @param response
     */
    const successInterceptor = (response: AxiosResponse): Promise<any> => {
        if (response.status === 204) {
            return Promise.resolve({
                status: true,
                payload: null,
            });
        } else {
            return Promise.resolve({
                status: true,
                payload: response.data,
            });
        }
    };

    axiosDefaultHeader.headers!.Authorization = getAccessToken() ? `Bearer ${getAccessToken()}` : ``;

    if (url === '/api/media/image-create') axiosDefaultHeader.headers!['Content-Type'] = 'multipart/form-data';

    const _Axios_: AxiosInstance = axios.create(axiosDefaultHeader);

    _Axios_.interceptors.response.use(
        response => successInterceptor(response),
        error => errorInterceptor(error)
    );

    return _Axios_({
        url: url,
        method: method,
        data: payload,
    });
};

export default _axios_;
