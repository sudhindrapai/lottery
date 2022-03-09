import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

interface ProfileSlice {
    isUpdated: boolean,
    isLoading: boolean,
    errorMessage: string
}

interface IsProfileUpdated {
    isUpdated:boolean
}

interface IsLoading{
    isLoading: boolean
}

interface UpdateErrorMessage {
    errorMessage: string
}

interface UpdateProfileObj{
    email: string,
    firstName:string,
    lastName: string,
    gendar:string,
    address: string,
    mobileNumber: string
}

const profileInitialState:ProfileSlice = {
    isUpdated: false,
    isLoading: false,
    errorMessage:""
};

export const updateProfile = createAsyncThunk(
    'profile',
    async (requestBody:UpdateProfileObj, {dispatch}) => {
        dispatch(toggleLoading({
            isLoading: false
        }));
        await fetch('someUrlForProfileUpdate', {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            response.json();
            dispatch(toggleIsProfileUpdate({
                isUpdated: true
            }));
        })
        .catch((error) => {
            dispatch(updateErrorMessage({
                errorMessage: "Something went wrong"
            }));
        })
        .finally(() => {
            dispatch(toggleLoading({
                isLoading: false
            }));
        })
    }
)

const profile = createSlice({
    name:'profile',
    initialState: profileInitialState,
    reducers:{
        resetProfileState: () => {return profileInitialState},
        toggleIsProfileUpdate: (state,action:PayloadAction<IsProfileUpdated>) => {
            return{
                ...state,
                isUpdated: action.payload.isUpdated
            }
        },
        toggleLoading: (state, action:PayloadAction<IsLoading>) => {
            return{
                ...state,
                isLoading: action.payload.isLoading
            }
        },
        updateErrorMessage: (state, action:PayloadAction<UpdateErrorMessage>) => {
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        }
    }
});

export const {resetProfileState, toggleIsProfileUpdate,toggleLoading,updateErrorMessage} = profile.actions;
export default profile.reducer