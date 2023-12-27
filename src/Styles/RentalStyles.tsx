import tw from 'twin.macro';

export default {
    RentalLayoutStyle: {
        RentalSection: tw.div`flex w-full flex-col space-y-2 cursor-pointer`,
        RentalFigure: tw.figure`relative transition-all duration-300 cursor-pointer z-10`,
        RentalImg: tw.img`w-24 rounded-lg`,
        RentalFigcaption: tw.figcaption`flex absolute bottom-1 right-1`,
        RentalContainer: tw.div`flex flex-nowrap w-full justify-center gap-1`,
        CheckTimeBlue: tw.div`border border-blue-400 w-1/2`,
        CheckTimeGray: tw.div`border border-gray-200 w-1/2`,
        RentalTimeSection: tw.div`flex flex-nowrap w-full pt-1`,
        RentalPt3: tw.div`flex w-full pt-3`,
        RentalBorder: tw.div`flex w-full border-b`,
        RentalSpinner: tw.div`flex w-full flex-col space-y-2 py-4 items-center justify-center`,
        RentalMoreSection: tw.div`flex w-full flex-col space-y-2 py-4`,
        RentalModalSection: tw.div`flex pl-5 py-3 border-b justify-between`,
        RentalModalDiv: tw.div`flex pl-5 py-3 border-b`,
        RentalImgSection: tw.div`flex flex-col w-full pt-3 overflow-auto h-80`,
        RentalImgContainer: tw.div`flex flex-col w-full gap-1 divide-y scroll-m-0`,
        RentalImgWrapper: tw.figure`relative transition-all duration-300 cursor-pointer`,
        RentalModalContainer: tw.div`flex flex-col w-2/6`,
        RentalBtnGray: tw.div`flex pl-5 py-3 bg-gray-100 cursor-pointer`,
        RentalBtnWhite: tw.div`flex pl-5 py-3 bg-white cursor-pointer`,
        EditSection: tw.div`flex w-4/6`,
        EditContainer: tw.div`flex flex-col w-full px-2 space-y-1`,
        EditWrapper: tw.div`flex flex-nowrap border-b items-center py-3`,
        EditList: tw.div`flex pr-2`,
        ItemIcon: tw.svg`w-4 h-4 cursor-pointer`,
        ItemCount: tw.span`text-xs text-red-600 pl-2`,
        BoxItem: tw.div`grid grid-cols-4 w-full gap-1`,
        CheckContainer: tw.div`flex flex-col w-full gap-1`,
    },
    Detail: {
        MainSection: tw.div`flex-1 w-full space-y-3`,
        DetailImg: tw.img`rounded-2xl h-96 w-full`,
        Figcaption: tw.figcaption`flex absolute bottom-10 left-1/2 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer`,
        TitleSection: tw.div`flex gap-2`,
        TitleDescSection: tw.div`flex gap-2 pt-3`,
        DetailSubTitle: tw.div`flex flex-nowrap w-full gap-3`,
        UnderlineText: tw.span`text-xs cursor-pointer underline`,
        TextGray: tw.span`text-sm text-gray-400 underline cursor-pointer`,
        BgBlueText: tw.div`flex bg-blue-300 rounded-md px-2 py-1`,
        BgBlueSection: tw.div`flex flex-col w-full pt-2 space-y-2`,
        BgBlue: tw.div`flex w-full rounded-lg bg-blue-100 py-2 px-4`,
        BlueLine: tw.div`flex w-full bg-blue-50 py-1`,
        DetailSection: tw.section`flex w-full justify-center p-5 bg-white`,
        DetailSectionSticky: tw.section`flex w-full justify-center p-5 bg-white sticky top-0`,
        DetailWrapper4: tw.div`flex flex-col w-full md:max-w-screen-lg space-y-4`,
        DetailWrapper6: tw.div`flex flex-col w-full md:max-w-screen-lg space-y-6`,
        DetailTextSmGray: tw.div`flex w-1/4 text-xs text-gray-400`,
        RuleSection: tw.div`grid grid-cols-2 w-full gap-4`,
        RuleItemSection: tw.div`flex flex-nowrap items-center gap-2`,
        RuleIconGray: tw.div`flex items-center object-center justify-center w-8 opacity-40`,
        RuleIconBlack: tw.div`flex items-center object-center justify-center w-8`,
        TextGrayLine: tw.span`text-xs text-gray-400 line-through`,
        RuleSubInfoSection: tw.div`flex flex-col w-full rounded-lg space-y-4 bg-gray-50 py-2 px-2`,
        RuleSubIconSection: tw.div`flex flex-col w-full gap-2`,
        RuleSubIconWrapper: tw.div`flex flex-nowrap w-full gap-2`,
        RuleExtraInfoSection: tw.div`flex flex-col w-full space-y-4`,
        RuleExtraInfoWrapper: tw.div`w-full space-y-2 py-1`,
        RuleExtraTitle: tw.div`mb-2 text-sm font-semibold`,
        RuleExtraInfoList: tw.ul`space-y-1 text-sm text-gray-500 list-disc list-inside`,
        RuleTextSmall: tw.div`flex text-xs px-2 py-2`,
        DashText: tw.p`px-5`,
    },
};
