import tw from 'twin.macro';

export default {
    LoginLayoutStyle: {
        LoginImgSection: tw.div`flex flex-nowrap h-screen w-full`,
        LoginImgWrapper: tw.div`hidden md:block md:w-[460px]`,
        LoginImgContainer: tw.div`w-full h-screen border`,
        LoginMainImg: tw.figure`relative h-screen transition-all duration-300 cursor-pointer filter`,
        LoginImg: tw.img`h-screen w-screen object-cover`,
        LoginFigcaption: tw.figcaption`absolute px-4 text-lg text-white bottom-6 flex flex-col items-center w-full`,
        FigTitle: tw.p`text-xl`,
        FigName: tw.p`text-sm`,
        LoginSection: tw.div`flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0`,
        AuthWrapper: tw.div`w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0`,
        AuthContainer: tw.div`p-6 space-y-4 md:space-y-6 sm:p-8`,
        AuthText: tw.h1`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl`,
        AuthBlueText: tw.h1`text-xl font-bold leading-tight tracking-tight text-blue-700 md:text-2xl`,
        LoginInputSection: tw.div`space-y-4 md:space-y-6`,
        LoginInput: tw.input`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5`,
        LoginCheckSection: tw.div`flex items-center justify-between`,
        LoginCheckWrapper: tw.div`flex items-start`,
        LoginCheckContainer: tw.div`flex items-center h-5`,
        IdCheckBox: tw.input`w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-2 focus:ring-pink-300`,
        IdCheckSection: tw.div`ml-3 text-sm`,
        IdLabel: tw.label`text-gray-500`,
        SubmitBlueButton: tw.button`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`,
        FindSection: tw.div`flex flex-nowrap w-full gap-3 items-center justify-center`,
        FindText: tw.p`cursor-pointer text-sm`,
        KaKaoLoginSection: tw.div`w-full sm:max-w-md pt-1 md:pt-40`,
        KaKaoLoginButton: tw.button`w-full text-white bg-amber-300 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2`,
        KaKaoIcon: tw.svg`w-5 h-5 fill-black`,
        KaKaoJoinButton: tw.button`w-full text-white bg-amber-300 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2`,
        EmailJoinButton: tw.button`w-full text-black focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2`,
        JoinModalSection: tw.div`flex flex-col space-y-4 w-full`,
        JoinText: tw.p`text-xl font-extrabold`,
    },
    EmailLayoutStyle: {
        EmailSection: tw.div`flex flex-col w-full items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0`,
        AuthInput: tw.input`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5`,
        AuthInputSection: tw.div`flex flex-nowrap w-full gap-1`,
        AuthGuideSection: tw.div`flex flex-col w-full pt-2`,
        AuthGuideText: tw.p`text-xs text-green-400`,
        AuthRadioButton: tw.input`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500`,
        AuthLabel: tw.label`ms-2 text-sm font-medium text-gray-900`,
        EmailJoinButton: tw.button`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2`,
        JoinExtraInfo: tw.div`w-full bg-white md:mt-5 sm:max-w-md xl:p-0`,
        JoinExtraText: tw.span`text-xs cursor-pointer`,
    },
    RegisterCompleteLayoutStyle: {
        BackgroundSection: tw.div`bg-gray-200 w-full md:max-w-screen-lg`,
        BackgroundWrapper: tw.div`flex flex-nowrap items-center justify-between py-1`,
        HeaderText: tw.span`self-center text-2xl font-semibold whitespace-nowrap`,
        CompleteImgSection: tw.div`flex flex-col w-full space-y-20`,
        CompleteImg: tw.img`w-80`,
        Text2Xl: tw.span`text-2xl`,
        TextBase: tw.span`text-base`,
        CompleteInfoSection: tw.div`flex flex-nowrap w-full h-24 bg-blue-600 rounded-full justify-between`,
        CompleteInfoContainer: tw.div`flex flex-col items-start justify-center px-10`,
        WhiteTextBold: tw.span`text-sm text-white font-bold`,
        WhiteText: tw.span`text-xs text-white font-medium`,
        NextButtonIcon: tw.svg`w-8 h-8 text-white`,
        NextButton: tw.div`flex items-center justify-center px-10`,
        SubItemSection: tw.div`flex flex-nowrap w-full h-44 bg-blue-100 rounded-xl justify-center`,
        SubItemContainer: tw.div`flex flex-col w-3/6 items-center justify-center space-y-4`,
        SubItemTextBold: tw.span`text-lg text-blue-700 font-semibold`,
        SubItemTextSmall: tw.div`flex flex-col text-sm w-full items-center justify-center`,
        SubTextSmall: tw.span`text-sm`,
        SubItemWrapper: tw.div`flex flex-col w-2/4`,
        InputWrapper: tw.div`relative w-full`,
        CodeSubmitButton: tw.button`absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
        CompleteModalSection: tw.div`w-full overflow-auto h-96`,
        CompleteModalContainer: tw.div`flex flex-col w-full space-y-4`,
        CompleteModalItem: tw.div`flex flex-col w-full justify-start`,
        Tex3Xl: tw.span`text-3xl`,
        TextPt3: tw.span`text-sm pt-3`,
        Divide2: tw.div`flex w-full divide-y-2`,
        SelectSection: tw.div`flex flex-col w-full space-y-3`,
        SelectButton: tw.button`w-full bg-white hover:bg-gray-100 text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded shadow`,
        SelectButtonContainer: tw.div`grid grid-cols-4 w-full gap-2`,
        SelectButtonWrapper: tw.div`flex flex-col object-center justify-center items-center`,
        SelectButtonIcon: tw.img`h-3 w-3`,
    },
};
