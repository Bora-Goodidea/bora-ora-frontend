import tw from 'twin.macro';

export default {
    DefalutLayoutStyle: {
        DefalutMainContainer: tw.div`min-h-screen flex flex-col`,
        SectionContainer: tw.section`flex w-full justify-center`,
        SectionWrapper: tw.div`w-full md:max-w-screen-lg`,
        SectionDiv: tw.div`flex w-full flex-col space-y-5`,
        PrepareButton: tw.button`bg-white text-sm text-blue-600 py-1 p-3 rounded-full border border-blue-600 inline-flex items-center`,
        ItemCenter: tw.div`flex flex-col w-full items-center justify-center`,
        TextXs: tw.span`text-xs`,
        ContentsSection: tw.div`flex flex-col w-full space-y-2`,
        ContentsTitle: tw.span`text-sm font-semibold`,
        ContentsXsTitle: tw.span`text-xs font-semibold`,
        ContentsWrapper: tw.div`flex w-full`,
        Li: tw.li``,
        BoldLargeText: tw.span`text-lg font-semibold`,
        Grid: tw.div`grid grid-cols-2 w-full border rounded-lg border-gray-400`,
        SmallText: tw.div`flex text-xs border-b border-r border-gray-400 px-2 py-2`,
        SmallBorderText: tw.div`flex text-xs border-b border-gray-400 px-2 py-2`,
        SmallBorderRText: tw.div`flex text-xs border-r border-gray-400 px-2 py-2`,
        RuleTextSmall: tw.div`flex text-xs px-2 py-2`,
        SubInfoSection: tw.div`flex flex-col w-full space-y-1`,
        MainContainer: tw.main`flex-1 w-full`,
        MainEmptyDiv: tw.div``,
        MainWrapper: tw.div`w-full`,
        HalfDivide: tw.div`flex w-1/2`,
        ThirdDivide: tw.div`flex w-1/3`,
        Height6Div: tw.div`h-6`,
        ExtraInfoWrapper: tw.div`flex w-full items-center justify-center`,
        BackgroundWhite: tw.nav`bg-white`,
        Flex: tw.div`flex`,
        FlexItemCenter: tw.div`flex items-center justify-center`,
        FlexItemCenterBorder: tw.div`flex items-center justify-center border`,
        TextGrayXs: tw.span`text-xs text-gray-500`,
        FlexItem: tw.div`flex flex-col w-full space-y-4`,
        ItemWrapper: tw.div`flex flex-nowrap items-center gap-2`,
        ItemCenterSection: tw.div`flex items-center justify-between`,
        HalfSection: tw.div`flex flex-col w-1/2`,
    },
    HeaderLayoutStyle: {
        HeaderTabSection: tw.div`flex flex-nowrap items-center h-20 justify-stretch gap-3`,
        HeaderTab: tw.div`flex flex-nowrap items-center`,
        HeaderTitle: tw.div`flex text-lg font-bold`,
        HeaderClickTitle: tw.div`flex text-lg text-gray-500`,
        HeaderIconContainer: tw.div`flex w-full justify-between pt-2`,
        HeaderIcon: tw.div`flex`,
    },
    MainLayoutStyle: {
        MainSectionContainer: tw.section`flex w-full justify-center bg-gray-100 p-5 border-b-2`,
        MainContainer: tw.main`flex-1 w-full space-y-4`,
        MainSlideFigure: tw.figure`relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`,
        MainImg: tw.img`rounded-2xl`,
        Img: tw.img``,
        MainFigcaption: tw.figcaption`flex absolute bottom-8 right-10 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer`,
        MainP: tw.p`text-white text-lg`,
        ReserContainer: tw.section`flex w-full justify-center sticky top-0 z-20`,
        ReserWrapper: tw.div`flex flex-nowrap w-full justify-end gap-2 border-b py-3 bg-white`,
        ReserSection: tw.div`flex flex-nowrap items-center justify-center gap-2`,
        BtnBlue: tw.div`flex h-2/3 w-5 bg-blue-500 rounded-sm`,
        TextGray: tw.span`text-xs text-gray-400`,
        BtnGray: tw.div`flex h-2/3 w-5 bg-gray-500 rounded-sm`,
        InfoSection: tw.div`flex flex-nowrap w-full items-center justify-between`,
        InfoWrapper: tw.div`flex flex-col`,
        SubTitle: tw.div`flex items-center`,
        InfoTitle: tw.span`text-sm font-bold`,
        SubInfo: tw.div`flex w-full items-center gap-1`,
        TextSmBlack: tw.span`text-sm text-black`,
        TextSmGray: tw.span`text-sm text-gray-400`,
        SubContent: tw.div`flex w-full items-center`,
        ItemSection: tw.div`flex flex-nowrap w-full items-center`,
        ItemContainer: tw.div`flex flex-col w-full`,
    },
    FilteringLayoutStyle: {
        FilteringButton: tw.button`bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center`,
    },
    SplashComponentStyle: {
        Wapper: tw.div`flex h-full w-full items-center justify-center`,
        Text: tw.span`sr-only`,
    },
};
