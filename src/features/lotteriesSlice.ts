import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import * as endpoints from '../networkUtilities/endpoints'
import {toggleNotificationVisibility} from './notificationSlice';
import {NotificationType} from '../Utility/InterFacesAndEnum';

import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

interface LotteryObj {
    lotteryId: number,
    lotteryName: string,
    lotteryDesc: string|null,
    lotteryTypeId: number,
    lotteryImage: null,
    isRepeat: boolean,
    lotteryStartDate: Date,
    lotteryEndDate: null|Date,
    lotteryStartDay: null|string,
    lotteryEndDay: null|string,
    isActive: boolean
}

interface lotteryState {
    lotteries: LotteryObj[]
}

const initalState:lotteryState = {
    lotteries:[]
}

interface getLottery {
    lotteriesList: LotteryObj[]
}

export const getLotteries = createAsyncThunk(
    'get lotteries',
    async (reques, {dispatch}) => {
        await fetch (endpoints.getLotteryList,{
            method: 'GET',
            headers: {
                Authentication: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            dispatch(setLotteryResponse({
                lotteriesList: data.result
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
            }));
        })
    }
)

const LotterySlice = createSlice({
    name: 'lottery Slice',
    initialState: initalState,
    reducers:{
        setLotteryResponse: (state, action:PayloadAction<getLottery>) => {
            return {
                ...state,
                lotteries: action.payload.lotteriesList
            }
        }
    }
});

export const {setLotteryResponse} = LotterySlice.actions;
export default LotterySlice.reducer