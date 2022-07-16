import * as endpoint from '../networkUtilities/endpoints';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NotificationType} from '../Utility/InterFacesAndEnum';
import {toggleNotificationVisibility} from './notificationSlice';

interface ForgotPasswordState {
    isLinkSent: boolean,
    isLoading: boolean,
    errorMessage: string
}

interface ToggleLinkSentState {
    isLinkSent: boolean
}

interface ToggleLoading{
    isLoading: boolean
}

interface UpdateErrorMessage {
    message: string
}

interface ForgotPassword {
    emailId: string
}

const forgotPasswordInitialState:ForgotPasswordState = {
    isLinkSent: false,
    isLoading: false,
    errorMessage: ""
}

export const forgotPasswordHandler = createAsyncThunk(
    'forgotPassword',
    async (payloadObj:ForgotPassword, {dispatch}) => {
        dispatch(toggleLoading({
            isLoading:true
        }));
        await fetch(
            endpoint.forgotPassword,
            {
                method: 'POST',
                body: JSON.stringify(payloadObj),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                if (response.statusCode === 200) {
                    dispatch(toggleLinkSentState({
                        isLinkSent: true
                    }));
                    dispatch(toggleNotificationVisibility({
                        isVisible: true,
                        status: NotificationType.success,
                        message: "Reset link sent to registered emailid"
                    }));
                } else {
                    dispatch(toggleNotificationVisibility({
                        isVisible: true,
                        status: NotificationType.error,
                        message: response.errorMsg
                    }));
                }
            })
            .catch((error) => {
                dispatch(updateMessage({
                    message:"some error"
                }))
            })
            .finally(() => {
                dispatch(toggleLoading({
                    isLoading:false
                }))
            })
    }
)

const forgotPassword = createSlice({
    name: 'forgotPassword',
    initialState: forgotPasswordInitialState,
    reducers:{
        resetState: () => {return forgotPasswordInitialState},
        toggleLinkSentState:(state, action: PayloadAction<ToggleLinkSentState>) => {
            return{
                ...state,
                isLinkSent: action.payload.isLinkSent
            }
        },
        toggleLoading: (state, action: PayloadAction<ToggleLoading>) => {
            return{
                ...state,
                isLoading: action.payload.isLoading
            }
        },
        updateMessage: (state, action:PayloadAction<UpdateErrorMessage>) => {
            return{
                ...state,
                errorMessage: action.payload.message
            }
        }
    }
});

export const {resetState, toggleLinkSentState, toggleLoading, updateMessage} = forgotPassword.actions;
export default forgotPassword.reducer