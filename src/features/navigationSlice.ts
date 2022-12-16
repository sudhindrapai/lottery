import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// import {RouterPath} from '../routes'

export const AppRoutePath = {
    profile: "/account/profile",
    signUp: "/account/registration",
    signIn: "/account/signin",
    twoFA: "/account/2FA",
    updatePassword: "/account/password-update",
    resetPassword: "/auth/password-reset",
    resendResetLink: "/account/resend-pwd-reset-link",
    forgotPassword: "/account/forgot-password",
    lotteries: "/lottery",
    lotteryPaymentView: "/lottery/payment",
    lotteryPaymentSuccess: '/lottery/payment-success',
    userProfile:"/userProfile",
    auction:"/action",
    orders:"/orders",
    auctionList: "/auction",
    auctionDetail: "/auction/detail/:auctionId",
    createAuction: "/auction/create",
    auctionPaymentSuccess: "/auction/payment-success",
    paypalSuccess:"/payment/success",
    paypalFail: "/payment/fail",
    membershipSuccess:"/goldmembership/success",
    membershipFail:"/goldmembership/fail",
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