import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import * as endpoint from '../networkUtilities/endpoints';

import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

const ordersInitialState = {
    lotteryOrders:[],
    page:1
}

export const getLotteryOrders = createAsyncThunk(
    'get users order list',
    async (payload:void, {dispatch}) => {
        let userObj = JSON.parse(getLocalStorage(localStorageActionType.GET_USER_DETAILS));

        await fetch(`${endpoint.getOrdersList}?userId=${userObj.userId}`,{
            method: 'GET',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            let dataList = response.result;
            dispatch(setOrders({
                lotteryOrders:dataList
            }))
        })
    }
)

const ordersSlice = createSlice({
    name: 'Orders Slice',
    initialState: ordersInitialState,
    reducers: {
        setOrders: (state, action:PayloadAction<any>) => {
            return {
                ...state,
                lotteryOrders:action.payload.lotteryOrders
            }
        }
    }
});

export const {setOrders} = ordersSlice.actions;
export default ordersSlice.reducer;