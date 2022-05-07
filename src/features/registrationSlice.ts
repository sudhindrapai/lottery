import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import * as endpoints from '../networkUtilities/endpoints';
import {NotificationType} from '../Utility/InterFacesAndEnum';
import {toggleNotificationVisibility} from './notificationSlice';

interface RegisterState {
    isAccountCreated: boolean,
    isLoading: boolean,
}

const registerInitialState: RegisterState = {
    isAccountCreated:false,
    isLoading: false,
}

interface ToggleRegisterStatus {
    isRegistered: boolean
}
interface ToggleLoading {
    isLoading: boolean
}

interface CreateAccount {
    emailId: string,
    password: string,
    firstName:string,
    lastName:string,
}

export const createSignup = createAsyncThunk(
    'register',
    async (requestBody:CreateAccount, {dispatch}) => {
        console.log(requestBody)
        dispatch(toggleLoading({
            isLoading:true
        }))
        await fetch(endpoints.register,{
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dispatch(toggleRegister({
                isRegistered: true
            }));
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.success,
                message: data.errorMsg
            }))
        })
        .catch((error) => {
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.error,
                message: error.errorMsg
            }))
            dispatch(toggleRegister({
                isRegistered: false
            }));
        })
        .finally(() => {
            dispatch(toggleLoading({
                isLoading:false
            }));
        })
    }
)

const registration = createSlice({
    name: 'register',
    initialState: registerInitialState,
    reducers:{
        regsetRegiste: () => {
            return registerInitialState
        },
        toggleRegister: (state, action:PayloadAction<ToggleRegisterStatus>) => {
            return{
                ...state,
                isAccountCreated: action.payload.isRegistered
            }
        },
        toggleLoading: (state, action:PayloadAction<ToggleLoading>) => {
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        }
    }
});

export const {toggleRegister,regsetRegiste,toggleLoading} = registration.actions;
export default registration.reducer;