import * as endpoint from '../networkUtilities/endpoints';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import * as localStorageActiontype from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

import {NotificationType} from '../Utility/InterFacesAndEnum';
import {toggleNotificationVisibility} from './notificationSlice';

interface ResetSliceState {
    isPasswordUpdated:boolean,
    isLoading: boolean,
    errorMessage: string
}

interface TogglePasswordUpdate{
    isPasswordUpdated: boolean
}

interface ToggleLoading {
    isLoading: boolean
}

interface UpdateErrorMessage {
    message: string
}

interface ResetPassword {
    newPassword: string,
    confirmPassword: string
}

const resetStateInitialState: ResetSliceState = {
    isPasswordUpdated: false,
    isLoading: false,
    errorMessage: ""
}

export const resetPasswordHandler = createAsyncThunk(
    'resetPassword',
    async (payloadObj:any, {dispatch}) => {

        dispatch(toggleLoading({
            isLoading: false
        }));

        // Authorization: `Bearer ${payloadObj.token}`,
        await fetch(`${endpoint.resetPassword}/${payloadObj.userId}`, {
            method: 'PUT',
            body: JSON.stringify(payloadObj.requestBody),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            
            if (response.statusCode === 200) {
                dispatch(toggleNotificationVisibility({
                    isVisible: true,
                    status: NotificationType.success,
                    message: response.errorMsg
                }));
            } else {
                dispatch(toggleNotificationVisibility({
                    isVisible: true,
                    status: NotificationType.error,
                    message: response.errorMsg
                }));
            }

            dispatch(togglePasswordUpdateState(
                {
                    isPasswordUpdated: true
                }
            ));
        })
        .catch((error) => {
            dispatch(updateErrorMessage({
                message: "Some error message"
            }));
        })
        .finally(() => {
            dispatch(toggleLoading({
                isLoading: false
            }));
        })
    }
);

const resetPassword = createSlice({
    name: 'resetPassword',
    initialState: resetStateInitialState,
    reducers: {
        resetState: () => {return resetStateInitialState},
        togglePasswordUpdateState: (state, action: PayloadAction<TogglePasswordUpdate>) => {
            return {
                ...state,
                isPasswordUpdated: action.payload.isPasswordUpdated
            }
        },
        toggleLoading: (state, action: PayloadAction<ToggleLoading>) => {
            return {
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

export const {resetState, toggleLoading, togglePasswordUpdateState, updateErrorMessage} = resetPassword.actions;
export default resetPassword.reducer