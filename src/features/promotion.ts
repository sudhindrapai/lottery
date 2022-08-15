import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import * as endpoints from '../networkUtilities/endpoints'
import {toggleNotificationVisibility} from './notificationSlice';
import {NotificationType} from '../Utility/InterFacesAndEnum';

import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

interface PromotionState {
    home:any,
    lottery:any,
    auction:any,
    isLoading:boolean
}

interface SetPromotionData {
    pageName:string,
    data:any
}

const initialState:PromotionState ={
    home:[],
    lottery:[],
    auction:[],
    isLoading:true
}


export const getPromotionData = createAsyncThunk(
    'get promotion data',
    async(payload:string, {dispatch}) => {
        dispatch(toggleLoadingState({
            isLoading:true
        }))
        await fetch(`${endpoints.getPromotions}?promotionPage=${payload}`,{
            method:'GET',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((respose) => {
            return respose.json();
        })
        .then((response) => {
            if (response.statusCode === 200) {
                dispatch(setPromotionResponse({
                    pageName:payload,
                    data: response.result
                }));
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
        })
        .catch((error) => {
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.error,
                message: "Something went wrong!"
            }));
        })
        .finally(() => {
            dispatch(toggleLoadingState({
                isLoading:false
            }))
        })
    }
)

const promotionSlice = createSlice({
    name:'Promotions',
    initialState:initialState,
    reducers:{
        setPromotionResponse: (state, action:PayloadAction<SetPromotionData>) => {
            return{
                ...state,
                home: action.payload.pageName === "HOME" ? action.payload.data: state.home,
                lottery: action.payload.pageName === "LOTTERY" ? action.payload.data: state.lottery,
                auction: action.payload.pageName === "AUCTION" ? action.payload.data: state.auction
            }
        },
        toggleLoadingState: (state, action:PayloadAction<{isLoading:boolean}>) => {
            return{
                ...state,
                isLoading:action.payload.isLoading
            }
        }
    }
});

export const {setPromotionResponse, toggleLoadingState} = promotionSlice.actions;
export default promotionSlice.reducer