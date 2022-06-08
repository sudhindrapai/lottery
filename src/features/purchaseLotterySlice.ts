import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

import * as endpoint from '../networkUtilities/endpoints';
import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

const purchaseInitialState = {
    isPurchased: false,
    message:"",
    totalNoOfTickets: 0
}

interface PurchaseLottery {
    lotteryGameId: number,
    userId: number,
    paymentId: number,
    purchaseDate: Date,
    ticketType: "G" | "M",
    noOfTickets:number 
}

interface TogglePurchaseState {
    isPurchased: boolean,
    message: string,
    tickets: number
}

export const purchaseLottery = createAsyncThunk(
    'purchase ticket',
    async (payload:PurchaseLottery,{dispatch}) => {
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
            console.log(data,'purchaseLottery');
            if (data.statusCode === 200) {
                dispatch(togglePurchaseState({
                    isPurchased: true,
                    message: data.errorMsg,
                    tickets: data.result.length
                }));
            }
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
        }
    }
});

export default purchaseLotterySlice.reducer;
export const {togglePurchaseState} = purchaseLotterySlice.actions;