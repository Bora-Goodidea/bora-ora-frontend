import Header from './Header';
import Footer from './Footer';

const MyPagePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 w-full bg-blue-50">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="min-h-screen flex items-top justify-center">
                            <div className="flex flex-col md:flex-row w-full gap-4">
                                <div className="flex flex-col md:w-2/5 bg-white">
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-row flex-nowrap justify-between p-5">
                                            <div className="flex flex-col">
                                                <div className="flex flex-nowrap">
                                                    <span className="text-xl font-semibold">하영 바보</span>
                                                </div>
                                                <div className="flex flex-nowrap gap-2">
                                                    <span className="text-xs text-gray-400">3204504691</span>
                                                    <span className="text-xs bg-yellow-400 px-2 rounded-md">KAKAO</span>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="flex flex-nowrap gap-2">
                                                    <div className="flex">
                                                        <span className="flex text-sm bg-gray-100 h-full items-center rounded-md p-2">
                                                            프로필 보기
                                                        </span>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="flex bg-gray-100 items-center rounded-md p-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-6 h-6">
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                                                                />
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-row flex-nowrap justify-between p-5 gap-2">
                                            <div className="flex flex-col bg-gray-50 gap-3 p-3 w-1/2 rounded-lg">
                                                <div className="flex">
                                                    <span className="text-sm font-base">매너</span>
                                                </div>
                                                <div className="flex flex-nowrap gap-3">
                                                    <div className="flex">
                                                        <img
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_manner_card.svg"
                                                            alt="..."
                                                        />
                                                    </div>
                                                    <div className="flex">
                                                        <span>좋아요</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col bg-gray-50 gap-3 p-3 w-1/2 rounded-lg">
                                                <div className="flex justify-between">
                                                    <span className="text-sm font-base">레벨</span>
                                                    <div>
                                                        <img
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_level_show.svg"
                                                            alt="..."></img>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap gap-3">
                                                    <div className="flex">
                                                        <span className="text-blue-600 font-semibold rounded-sm bg-gray-300 px-2">R</span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="font-semibold rounded-sm bg-gray-300 px-2">루키</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-row flex-nowrap justify-between p-5">
                                            <div className="flex w-full py-5 px-5 bg-blue-600 rounded-xl justify-between">
                                                <div className="flex flex-col">
                                                    <div className="flex">
                                                        <span className="text-sm text-white">나의 캐시</span>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-xl font-bold text-white">0원</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="py-2 px-2 text-black text-sm rounded-md items-center bg-yellow-500">
                                                        충전하기
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:w-3/5 bg-blue-50 space-y-3">
                                    <div className="flex flex-col bg-white p-2">
                                        <div className="flex w-full bg-white">
                                            <span className="text-sm font-semibold text-black">나의 오라</span>
                                        </div>
                                        <div className="flex w-full bg-white">
                                            <div className="flex flex-col w-full py-3 space-y-5 px-2">
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="flex">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_myplab_color.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-md font-semibold text-black">신청 내역</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="flex">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_point_color.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">충전 내역</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_coupon_color.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">쿠폰</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_fire.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">챌린지</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_friend.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">친구</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_friend_match.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">친구가 신청한 매치</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_email.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">친구초대</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_profile.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">프로필 수정</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_setting_color.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">설정</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col bg-white p-2">
                                        <div className="flex w-full bg-white">
                                            <span className="text-sm font-semibold text-black">고객 센터</span>
                                        </div>
                                        <div className="flex w-full bg-white">
                                            <div className="flex flex-col w-full py-3 space-y-5 px-2">
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="flex">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_faq_color.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-md font-semibold text-black">자주 묻는 질문</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="flex">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_notice_color.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">공지사항</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col bg-white p-2">
                                        <div className="flex w-full bg-white">
                                            <span className="text-sm font-semibold text-black">더보기</span>
                                        </div>
                                        <div className="flex w-full bg-white">
                                            <div className="flex flex-col w-full py-3 space-y-5 px-2">
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="flex">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_about_color.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="text-md font-semibold text-black">보라오라 소개</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="flex">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_magazine_color.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">매거진</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="flex">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_manager_color.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">매니저 지원</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap w-full items-center object-center justify-start gap-2">
                                                    <div className="flex">
                                                        <img
                                                            className="h-6 w-6"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_bk.svg"
                                                            alt="..."></img>
                                                    </div>
                                                    <div className="">
                                                        <span className="text-md font-semibold text-black">구장 제휴</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MyPagePage;
