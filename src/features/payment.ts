import {createSlice,PayloadAction,createAsyncThunk} from '@reduxjs/toolkit';
import * as endpoints from '../networkUtilities/endpoints';
import {toggleNotificationVisibility} from './notificationSlice';
import {NotificationType} from '../Utility/InterFacesAndEnum';

import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

const userName = 'Adbmd0nXqL7vOuPbc-KHdj8tp0_RDpbyv5lo-3aMQYrPoJlCXgFsB55dLjVc7gM-EOQiHPtY2HjVB2EW';
const password = 'EATRHKpCRCEGJc6-DH-rRWkojAOdgMY7A2SdxaUnOUR2Q8Sk6MFPkAsWRLFdoDOdH7qhmmoLI_o55Po0';

export const createPaypalToken = createAsyncThunk(
    'create paypal token',
    async (payload:void,{dispatch}) => {
        await fetch(endpoints.generatePaypalToken,{
            method:'POST',
            headers: {'Authorization': 'Basic ' + window.btoa(`${userName}:${password}`)}
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("finaly")
        })
    }
);

export const createCheckoutNew = createAsyncThunk(
    'create new checkout',
    async(payload:void,{dispatch}) => {
        await fetch(endpoints.createCheckoutNew,{
            method: 'POST'
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("createCheckoutNew")
        })
    }
);

export const createNewCapture = createAsyncThunk(
    'Capture new payment',
    async(payload:void,{}) => {
        await fetch(endpoints.createNewCapture,{
            method: 'POST'
        })
        .then((response)=> {
            return response.json();
        })
        .then((response) => {
            console.log(response,"response");
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("createCheckoutNew");
        })
    }
)