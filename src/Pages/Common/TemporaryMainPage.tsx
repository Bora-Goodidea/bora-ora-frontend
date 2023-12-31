import React from 'react';
import { ConstRouters } from '@Commons';
import lodash from 'lodash';

const TemporaryMainPage = () => {
    const handleClickPathName = (pathName: string) => {
        window.open(pathName, '_blank', 'noreferrer');
    };

    return (
        <div>
            <header className="sticky top-0 bg-white shadow p-4">
                <code className="bg-gray-100">라우터 리스트</code>
            </header>
            <main className="p-4">
                <div className="flex h-screen w-full items-baseline justify-center">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-2/3">
                        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 min-w-full">
                            <thead className="text-xs text-white bg-blue-600 border-b border-blue-400 dark:text-white w-full">
                                <tr>
                                    <th scope="col" className="text-center px-6 py-2">
                                        구분
                                    </th>
                                    <th scope="col" className="text-center px-6 py-2">
                                        페이지 명
                                    </th>
                                    <th scope="col" className="text-center px-6 py-2">
                                        라우터명
                                    </th>
                                    <th scope="col" className="text-center px-6 py-2">
                                        pathName
                                    </th>
                                    <th scope="col" className="text-center px-6 py-2">
                                        이동
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {lodash.map(ConstRouters, (ca, catrgory) => {
                                    return lodash.map(ca, (router, rIndex) => {
                                        const category = rIndex === 0 ? catrgory : ``;
                                        return (
                                            <tr
                                                className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500 text-left"
                                                key={`temporary-main-page-table-row-item-${catrgory}-${rIndex}`}>
                                                <td
                                                    scope="row"
                                                    className="px-6 py-1 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 text-center">
                                                    {`${category}`}
                                                </td>
                                                <td className="px-6 py-1 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 text-center">{`${router.name}`}</td>
                                                <td className="px-6 py-1 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 text-center">{`${router.page}`}</td>
                                                <td className="px-6 py-1 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 text-center">{`/${catrgory.toLowerCase()}${
                                                    router.pathName
                                                }`}</td>
                                                <td className="px-6 py-1 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 text-center">
                                                    <div
                                                        className="flex px-6 py-1 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 text-center cursor-pointer justify-center"
                                                        onClick={() => {
                                                            handleClickPathName(`/${catrgory.toLowerCase()}${router.pathName}`);
                                                        }}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    });
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TemporaryMainPage;
