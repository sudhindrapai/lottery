import * as endPoint from '../networkUtilities/endpoints';
import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {NotificationType} from '../Utility/InterFacesAndEnum';
import {toggleNotificationVisibility} from './notificationSlice';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

import * as localStorageActionType from '../localStorage/ActionTypes';
import {setLocalStorage} from '../localStorage/SetLocalStorage';

interface LoginState {
    isLoading: boolean,
    isLoggedin: boolean,
    isAuthenticated: boolean,
}

interface Loading {
    isLoading: boolean
}

interface Login {
    isLoggedin: boolean,
    isAuthenticated: boolean
}

const loginInitialState:LoginState = {
    isLoading: false,
    isLoggedin: false,
    isAuthenticated: false
}

interface SigninAccount {
    emailId: string,
    password: string
}

export const createLogin = createAsyncThunk(
    'auth/login',
    async (loginObj:SigninAccount, {dispatch}) => {
        dispatch(toggleLoading({
            isLoading: true
        }))
        const response = await fetch(endPoint.login,
        {
            method: 'post',
            body: JSON.stringify(loginObj),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json()
            
        })
        .then((data) => {
            if (data.statusCode === 200) {

            let responseObj = data.result;
            let publicUserId = responseObj.publicUserId;
            let tokenObj = {
                accessToken: responseObj.accessToken,
                refreshToken: responseObj.refreshToken
            }
            
             setLocalStorage(localStorageActionType.SET_ACCESS_REFRESH_TOKEN, tokenObj);
             setLocalStorage(localStorageActionType.SET_PUBLIC_USER_ID, publicUserId);
            
            dispatch(toggleLogin({
                isLoggedin:true,
                isAuthenticated: responseObj.authenticated
            }));
            
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.success,
                message: data.errorMsg
            }));
        } else {
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.error,
                message: data.errorMsg
            }));
        }
        })
        .catch((error) => {
            console.log(error,"error");
        })
        .finally(() => {
            dispatch(toggleLoading({
                isLoading: false
            }));
        })
    }
);

export const verify2FACode = createAsyncThunk(
    'verify 2FA code',
    async (payload: string, {dispatch}) => {
        console.log(payload,'payload')
        
        await fetch(endPoint.verifySignin2FA, {
            method: 'POST',
            body: payload,
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if (data.statusCode === 200) {

                let responseObj = data.result;
            let publicUserId = responseObj.publicUserId;

            let refreshToken = getLocalStorage(localStorageActionType.GET_REFRESH_TOKEN);

            let tokenObj = {
                accessToken: responseObj.accessToken,
                refreshToken: refreshToken
            }

            setLocalStorage(localStorageActionType.SET_ACCESS_REFRESH_TOKEN, tokenObj);
             setLocalStorage(localStorageActionType.SET_PUBLIC_USER_ID, publicUserId);

            dispatch(toggleLogin({
                isAuthenticated: true,
                isLoggedin: true
            }));
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.success,
                message: data.errorMsg
            }));
            } else {
                dispatch(toggleNotificationVisibility({
                    isVisible: true,
                    status: NotificationType.error,
                    message: data.errorMsg
                }));
            }
        })
        .catch((error) => {
            console.log(error,"error")
        })
    }
);

const loginSlice = createSlice({
    name: 'login',
    initialState: loginInitialState,
    reducers:{
        resetLoginState : () => {
            return loginInitialState
        },
        toggleLoading : (state, action:PayloadAction<Loading>) => {
            return{
                ...state,
                isLoading: action.payload.isLoading
            }
        },
        toggleLogin : (state, action: PayloadAction<Login>) => {
            return {
                ...state,
                isLoggedin: action.payload.isLoggedin,
                isAuthenticated: action.payload.isAuthenticated
            }
        }
    }
});

export const {resetLoginState, toggleLoading, toggleLogin} = loginSlice.actions;
export default loginSlice.reducer;