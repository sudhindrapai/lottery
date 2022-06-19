import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// import {RouterPath} from '../routes'

export const AppRoutePath = {
    profile: "/temp/account/profile",
    signUp: "/temp/account/registration",
    signIn: "/temp/account/signin",
    twoFA: "/temp/account/2FA",
    updatePassword: "/temp/account/password-update",
    resetPassword: "/temp/account/reset-password",
    resendResetLink: "/temp/account/resend-pwd-reset-link",
    forgotPassword: "/temp/account/forgot-password",
    lotteries: "/temp/lottery",
    lotteryPaymentView: "/temp/lottery/payment",
    lotteryPaymentSuccess: '/temp/lottery/payment-success',
    userProfile:"/temp/userProfile",
    auction:"/temp/action",
    orders:"/temp/orders",
    auctionList: "/temp/auction",
    auctionDetail: "/temp/auction/detail/:auctionId",
    createAuction: "/temp/auction/create",
    tempRoot: "/",
    root: "/",
    notFound: "*"
  };

interface NavigationState {
    data: {
        label: string,
        key: string,
        navRoute: string
        isSelected: boolean,
        activeRoutes:string[],
    }[]
}

interface ToggleSelectionStatus {
    key: string
}


let navigationState:NavigationState = {
    data:[ {
        label: "Home",
        key: "home",
        activeRoutes: [AppRoutePath?.root, AppRoutePath?.userProfile],
        navRoute: AppRoutePath?.root,
        isSelected: false
    },
    {
        label: "Lottery",
        key: "lottery",
        activeRoutes:[AppRoutePath?.lotteries,AppRoutePath?.lotteryPaymentView, AppRoutePath?.lotteryPaymentSuccess],
        navRoute: AppRoutePath?.lotteries,
        isSelected: true
    },
    {
        label: "Auction",
        key: "auction",
        activeRoutes:[AppRoutePath?.auctionList, AppRoutePath.auctionDetail],
        navRoute:AppRoutePath?.auctionList,
        isSelected: false
    },
    {
        label: "purchase",
        key:"auction",
        activeRoutes:[AppRoutePath?.orders],
        navRoute:AppRoutePath?.orders,
        isSelected: false
    }]
}

interface SetNavDate {
    data:{
        label: string,
        key: string,
        navRoute: string
        isSelected: boolean,
        activeRoutes:string[],
    }[]
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: navigationState,
    reducers:{
        toggleSelectionStatus: (state, action:PayloadAction<ToggleSelectionStatus>) => {
            let selectedState = action.payload.key
            return {
                ...state
            }
        },
        setNavResponse: (state, action:PayloadAction<NavigationState>) => {
            return{
                ...state,
                data: action.payload.data
            }
        }
    }
});

export const {toggleSelectionStatus, setNavResponse} = navigationSlice.actions;
export default navigationSlice.reducer;