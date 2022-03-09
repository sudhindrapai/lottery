import * as endpoint from '../networkUtilities/endpoints';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

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
                body: JSON.stringify(payloadObj)
            })
            .then((response) => {
                response.json();
                dispatch(toggleLinkSentState({
                    isLinkSent: true
                }))
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