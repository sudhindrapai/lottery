import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import * as endpoint from '../networkUtilities/endpoints';
import {toggleNotificationVisibility} from './notificationSlice';
import {NotificationType} from '../Utility/InterFacesAndEnum';

import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

interface SubscriptionInterface{
    subscription: any,
    isSubscribed:boolean
}

const subScriptionInitialState:SubscriptionInterface = {
    subscription:[],
    isSubscribed:false
};

export const getSubscriptionDetailData = createAsyncThunk(
    'get subscription detail',
    async(payload:void,{dispatch}) => {
        await fetch(endpoint.getSubscriptionDetail,{
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
            if (response.statusCode === 500) {
                dispatch(setSubscriptionStatus({
                    status: false
                }))
            }
        })
    }
);

const subscriptionSlice = createSlice({
    name: 'subscription slice',
    initialState: subScriptionInitialState,
    reducers:{
        setSubscriptionDetail:(state,action:PayloadAction<any>) => {
            return{
                ...state
            }
        },
        setSubscriptionStatus:(state,action:PayloadAction<any>) => {
            return{
                ...state,
                isSubscribed:action.payload.status
            }
        }
    }
});

export default subscriptionSlice.reducer;
export const {setSubscriptionDetail,setSubscriptionStatus} = subscriptionSlice.actions;
