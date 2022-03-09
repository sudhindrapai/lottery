import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import * as endpoints from '../networkUtilities/endpoints';

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
            response.json()
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
            dispatch(toggleRegister({
                isRegistered: true
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