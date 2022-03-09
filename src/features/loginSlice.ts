import * as endPoint from '../networkUtilities/endpoints';
import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

interface LoginState {
    isLoading: boolean,
    isLoggedin: boolean
}

interface Loading {
    isLoading: boolean
}

interface Login {
    isLoggedin: boolean
}

const loginInitialState:LoginState = {
    isLoading: false,
    isLoggedin: false
}

interface SigninAccount {
    email: string,
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
            response.json()
            dispatch(toggleLogin({
                isLoggedin:true
            }));
        }).catch((error) => {
            console.log(error);
        })
        .finally(() => {
            dispatch(toggleLoading({
                isLoading: false
            }))
        })
    }
)

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
                isLoggedin: action.payload.isLoggedin
            }
        }
    }
});

export const {resetLoginState, toggleLoading, toggleLogin} = loginSlice.actions;
export default loginSlice.reducer;