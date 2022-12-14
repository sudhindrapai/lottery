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

interface ActivateAndSuspendPayload {
    reason: string
}

const subScriptionInitialState:SubscriptionInterface = {
    subscription:[],
    isSubscribed:false
};

// function to get subscription details
export const getSubscriptionDetailData = createAsyncThunk(
    'get subscription detail',
    async(payload:void,{dispatch}) => {
        await fetch(endpoint.getSubscriptionDetail,{
            method: 'GET',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8"
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

// function to buy goldmembership
export const buyGoldMembership = createAsyncThunk(
    'buy goldmembership',
    async (payload:void,{dispatch}) => {
        fetch(endpoint.buyGoldMembership,{
            method: 'POST',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
        })
    }
);

export const suspendGoldmembership = createAsyncThunk(
    'suspend goldmembership of user',
    async(payload:ActivateAndSuspendPayload,{dispatch}) => {
        fetch (endpoint.suspendGoldMembership,{
            method: 'PUT',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(payload)
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
        })
    }
);

export const reActivateMembership = createAsyncThunk(
    'reactivate user gold membership',
    async (payload: ActivateAndSuspendPayload, {dispatch}) => {
        fetch(endpoint.reActivateGoldMembership,{
            method:'PUT',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(payload)
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
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
