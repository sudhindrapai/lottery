import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

import * as endpoint from '../networkUtilities/endpoints';
import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

interface PurchaseLotteryInitialState {
    isPurchased: boolean,
    isPaymentInitiated:boolean,
    message:string,
    totalNoOfTickets: number,
    paypalResponse:any
}

const purchaseInitialState:PurchaseLotteryInitialState = {
    isPurchased: false,
    isPaymentInitiated:false,
    message:"",
    totalNoOfTickets: 0,
    paypalResponse:{}
}

interface PurchaseLottery {
    lotteryGameId: number,
    userId: number,
    paymentId: number,
    purchaseDate: Date,
    ticketType: "G" | "M" | "B",
    noOfTickets:number 
}

interface TogglePurchaseState {
    isPurchased: boolean,
    message: string,
    tickets: number,

}

export const purchaseLottery = createAsyncThunk(
    'purchase ticket',
    async (payload:PurchaseLottery,{dispatch}) => {
        payload["ticketType"] = "B";
        await fetch(endpoint.purchaseLottery, {
            method: 'POST',
            body:JSON.stringify(payload),
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data,"data from pyament")
                dispatch(storePaymentResponse({
                    data:data
                }));
        })
    }
);
// ?token=6VN41912HE320334F&PayerID=Z25MADH6SXGWE
export const paymentComplete = createAsyncThunk(
    'payment complete',
    async (payload:any,{dispatch}) => {
        await fetch (`${endpoint.createPaymentComplete}${payload.payerId}`,{
            method: 'POST',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
           dispatch(togglePurchaseState({
               isPurchased: true,
               message:"Perchased successfully",
               tickets: response.length
           }))
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("finaly")
        })
    }
);

const purchaseLotterySlice = createSlice({
    name:"Purchase Lottery",
    initialState: purchaseInitialState,
    reducers: {
        togglePurchaseState: (state, action:PayloadAction<TogglePurchaseState>) => {
            return {
                ...state,
                isPurchased: action.payload.isPurchased,
                message: action.payload.message,
                totalNoOfTickets: action.payload.tickets
            }
        },
        storePaymentResponse: (state, action:PayloadAction<any>) => {
            return {
                ...state,
                paypalResponse:action.payload.data,
                isPaymentInitiated:true
            }
        },
        resetLotteryPurchaseState:(state,action:PayloadAction<void>) => {
            return{
                ...state,
                isPurchased: false,
                isPaymentInitiated:false,
                message:"",
                totalNoOfTickets: 0,
                paypalResponse:{}
            }
        }
    }
});

export default purchaseLotterySlice.reducer;
export const {togglePurchaseState,storePaymentResponse,resetLotteryPurchaseState} = purchaseLotterySlice.actions;