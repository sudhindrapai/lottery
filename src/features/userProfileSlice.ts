import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import * as endpoints from '../networkUtilities/endpoints'
import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';
import {setLocalStorage} from '../localStorage/SetLocalStorage';

interface userProfile {
    userDetail:[]
}

const profileState:userProfile = {
    userDetail:[]
}

interface UpdateAddressForm {
    address:string,
    country:string,
    state:string,
    pinCode:string
}

export const uploadProfileImage = createAsyncThunk(
    'update profile image',
    async (payload:any, {dispatch}) => {
        await fetch(endpoints.updateProfileImgae, {
            method: 'POST',
            body: payload,
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
    }
);

export const getUserProfileDetail = createAsyncThunk(
    'get user detail',
    async (payload,{dispatch}) =>{
        console.log("I am here")
        await fetch(`${endpoints.viewProfile}${getLocalStorage(localStorageActionType.GET_PUBLIC_USER_ID)}`,{
            method: 'GET',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let userObj = data?.result;
            console.log(userObj,"user detail");
            let localStorageObj = {
                "firstName": userObj.firstName,
                "lastName": userObj.lastName,
                "emailId": userObj.emailId,
                "mobileNo": userObj.mobileNo,
                "address": userObj.address,
                "city": userObj.city,
                "state": userObj.state,
                "country": userObj.country,
                "pincCde": userObj.pinCode,
                "using2FA": userObj.using2FA
            };
            setLocalStorage(localStorageActionType.SET_USER_DETAILS, JSON.stringify(localStorageObj))
        })
    }
);

interface updateProfile {
    firstName: string
    lastName: string,
    mobileNo: string
}

export const updatePersonalDetails = createAsyncThunk(
    'update personal info',
    async (payloadObj:updateProfile, {dispatch}) => {
        let publicUrserId = getLocalStorage(localStorageActionType.GET_PUBLIC_USER_ID);
        await fetch (`${endpoints.updateProfile}${publicUrserId}`,{
            method: 'PUT',
            body: JSON.stringify(payloadObj),
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let userObj = data?.result;
            let localStorageObj = {
                "firstName": userObj.firstName,
                "lastName": userObj.lastName,
                "emailId": userObj.emailId,
                "mobileNo": userObj.mobileNo,
                "address": userObj.address,
                "city": userObj.city,
                "state": userObj.state,
                "country": userObj.country,
                "pincCde": userObj.pinCode,
                "using2FA": userObj.using2FA
            };
            setLocalStorage(localStorageActionType.SET_USER_DETAILS, JSON.stringify(localStorageObj));
        })
    }
);

export const updateAddress = createAsyncThunk(
    'update user address/add new address',
    async (payload:UpdateAddressForm, {dispatch}) => {
        let publicUrserId = getLocalStorage(localStorageActionType.GET_PUBLIC_USER_ID);
        await fetch (`${endpoints.updateAddress}${publicUrserId}`,{
            method: 'PUT',
            body: JSON.stringify(payload),
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let userObj = data?.result;
            let localStorageObj = {
                "firstName": userObj.firstName,
                "lastName": userObj.lastName,
                "emailId": userObj.emailId,
                "mobileNo": userObj.mobileNo,
                "address": userObj.address,
                "city": userObj.city,
                "state": userObj.state,
                "country": userObj.country,
                "pincCde": userObj.pinCode,
                "using2FA": userObj.using2FA
            };
            setLocalStorage(localStorageActionType.SET_USER_DETAILS, JSON.stringify(localStorageObj));
        })
    }
);

export const toggleTwoFA = createAsyncThunk(
    'enable/disable 2FA',
    async(payload, {dispatch}) => {
        let publicUrserId = getLocalStorage(localStorageActionType.GET_PUBLIC_USER_ID)
        await fetch (`${endpoints.toggleTwoFA}${publicUrserId}`,{
            method: 'POST',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
        })
    }
);

export const verify2FAVerificationCode = createAsyncThunk (
    'resend 2FA verification code',
    async (payload: string, {dispatch}) => {
        await fetch (endpoints.verifyTwoFACode, {
            method: 'POST',
            body: payload,
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
    }
);

const profileSlice = createSlice({
    name: 'userProfile',
    initialState: profileState,
    reducers: {
        setUserDetail: (state) => {
            return{
                ...state
            }
        }
    }
});

export const {} = profileSlice.actions;
export default profileSlice.reducer