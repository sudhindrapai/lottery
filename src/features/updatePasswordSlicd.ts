import * as endpoints from '../networkUtilities/endpoints';
import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import { toggleIsProfileUpdate } from './profileSlice';

import * as localStorageActionTypes from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

import {toggleNotificationVisibility} from './notificationSlice';
import {NotificationType} from '../Utility/InterFacesAndEnum';

interface UpdatePasswordState{
    isPasswordUpdated:boolean,
    isLoading:boolean,
    errorMessage:string
}

interface TogglePasswordUpdateState{
    isUpdated: boolean
}

interface ToggleLoading{
    isLoading:boolean
}

interface UpdateErrorMessage {
    message: string
}

const updatePasswordInitialState: UpdatePasswordState = {
    isPasswordUpdated: false,
    isLoading: false,
    errorMessage: ""
}

interface updatePassword {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
}

export const updatePasswordHandler = createAsyncThunk(
    'passwordUpdate',
    async (payloadObj:updatePassword,{dispatch}) => {

        dispatch(toggleLoading({
            isLoading: true
        }));

        let publicUserId = getLocalStorage(localStorageActionTypes.GET_PUBLIC_USER_ID)

        await fetch (`${endpoints.updatePassword}/${publicUserId}`, {
            method: 'POST',
            body: JSON.stringify(payloadObj),
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionTypes.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.statusCode === 200) {
                dispatch(toggleIsProfileUpdate({
                    isUpdated: true
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
        .catch(() => {
            dispatch(updateErrorMessage({
                message: "Some error. message"
            }))
        })
        .finally(() => {
            dispatch(toggleLoading({
                isLoading: false
            }))
        })
    }
);

const updatePassword = createSlice({
    name: 'updatePassword',
    initialState: updatePasswordInitialState,
    reducers:{
        resetState: () => {return updatePasswordInitialState},
        toggleUpdatePasswordState: (state, action:PayloadAction<TogglePasswordUpdateState> ) => {
            return {
                ...state,
                isPasswordUpdated: action.payload.isUpdated
            }
        },
        toggleLoading: (state, action:PayloadAction<ToggleLoading>) => {
            return{
                ...state,
                isLoading: action.payload.isLoading
            }
        },
        updateErrorMessage: (state, action:PayloadAction<UpdateErrorMessage>) => {
            return{
                ...state,
                errorMessage: action.payload.message
            }
        }
    }
});

export const {resetState, toggleLoading,toggleUpdatePasswordState,updateErrorMessage} = updatePassword.actions;
export default updatePassword.reducer