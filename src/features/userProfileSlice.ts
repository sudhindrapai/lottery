import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import * as endpoints from '../networkUtilities/endpoints'
import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';
import {setLocalStorage} from '../localStorage/SetLocalStorage';
import {toggleNotificationVisibility} from './notificationSlice';
import {NotificationType} from '../Utility/InterFacesAndEnum';

interface userProfile {
    userDetail:[],
    isTwoCodeVerified: boolean
}

const profileState:userProfile = {
    userDetail:[],
    isTwoCodeVerified: false
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
            console.log(userObj,"user detail 1111");
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
                "using2FA": userObj.using2FA,
                "userId":userObj.userId,
                "imageUrl":userObj.imageUrl
            };

            setLocalStorage(localStorageActionType.SET_TWO_FA_STATUS, userObj.using2FA.toString());

            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.success,
                message: data.errorMsg
            }));

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
                "using2FA": userObj.using2FA,
                "userId":userObj.userId,
                "imageUrl":userObj.imageUrl
            };
            setLocalStorage(localStorageActionType.SET_USER_DETAILS, JSON.stringify(localStorageObj));
            setLocalStorage(localStorageActionType.SET_TWO_FA_STATUS, userObj.using2FA);
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.success,
                message: data.errorMsg
            }));

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
                "using2FA": userObj.using2FA,
                "userId":userObj.userId,
                "imageUrl":userObj.imageUrl
            };
            setLocalStorage(localStorageActionType.SET_USER_DETAILS, JSON.stringify(localStorageObj));
            setLocalStorage(localStorageActionType.SET_TWO_FA_STATUS, userObj.using2FA);
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.success,
                message: data.errorMsg
            }));
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
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.success,
                message: data.errorMsg
            }));
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
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.statusCode === 200) {
                dispatch(toggleNotificationVisibility({
                    isVisible: true,
                    status: NotificationType.success,
                    message: "Code verified successfully"
                }));
                dispatch(toggleTwoFAVerified({
                    isVerified: true
                }));
                let userObj = JSON.parse(getLocalStorage(localStorageActionType.GET_USER_DETAILS));
                setLocalStorage(localStorageActionType.GET_TWO_FA_STATUS, true);
                
            } else {
                dispatch(toggleNotificationVisibility({
                    isVisible: true,
                    status: NotificationType.error,
                    message: data.errorMsg
                }));
            }
            
        })
    }
);

interface TwoFAVerified {
    isVerified: boolean
}

const profileSlice = createSlice({
    name: 'userProfile',
    initialState: profileState,
    reducers: {
        setUserDetail: (state) => {
            return{
                ...state
            }
        },
        toggleTwoFAVerified: (state, action:PayloadAction<TwoFAVerified>) => {
            return{
                ...state,
                isTwoCodeVerified: action.payload.isVerified
            }
        }
    }
});

export const {toggleTwoFAVerified} = profileSlice.actions;
export default profileSlice.reducer