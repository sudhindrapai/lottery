import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import * as endpoints from '../networkUtilities/endpoints'
import {toggleNotificationVisibility} from './notificationSlice';
import {NotificationType} from '../Utility/InterFacesAndEnum';

import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';

interface LotteryObj {
    lotteryGameId: number,
      lotteryGameNo: number,
      lotteryType: "G" | "M",
      rewardType: string,
      rewardAmount: number,
      rewardGiftName: string,
      rewardGiftDesc: string|null,
      rewardImages: null | string[],
      lotteryGameStartDate: string,
      lotteryGameEndDate: string,
      isActive: boolean,
      isMemberLottery: boolean,
      bronzeTicketPrice: number,
      silverTicketPrice: number,
      goldTicketPrice: number,
      platinumTicketPrice: number,
      bronzeSubTickets: number,
      silverSubTickets: number,
      goldSubTickets: number,
      platinumSubTickets: number,
      lotteryGameStatus: string,
      noOfUsersJoined: number
}

interface lotteryState {
    lotteries: LotteryObj[],
    upcomingLotteries: LotteryObj[]
}

const initalState:lotteryState = {
    lotteries:[],
    upcomingLotteries: []
}

interface getLottery {
    lotteriesList: LotteryObj[]
}

interface UpcomingLotteries {
    upcomingLottery:LotteryObj[]
}

export const getLotteries = createAsyncThunk(
    'get lotteries',
    async (reques, {dispatch}) => {
        await fetch (endpoints.getLotteryList,{
            method: 'GET',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if (data.statusCode === 504) {
                dispatch(setLotteryResponse({
                    lotteriesList: []
                }));
            } else if (data.statusCode === 200) {
                dispatch(setLotteryResponse({
                    lotteriesList: data.result
                }));
                dispatch(toggleNotificationVisibility({
                    isVisible: true,
                    status: NotificationType.success,
                    message: data.errorMsg
                }));
            }
        })
        .catch((error) => {
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.error,
                message: error.errorMsg
            }));
        })
    }
);

export const getUpcomingLotteries = createAsyncThunk(
    'get upcoming lotteries',
    async (payload, {dispatch}) => {
        await fetch(endpoints.getUpcomingLottery,{
            method: 'GET',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.statusCode === 504) {
                dispatch(setUpcomingLottery({
                    upcomingLottery:[]
                }));
            } else if (data.statusCode === 200) {
                dispatch(setUpcomingLottery({
                    upcomingLottery: data.result
                }));
                dispatch(toggleNotificationVisibility({
                    isVisible: true,
                    status: NotificationType.success,
                    message: data.errorMsg
                }));
            }
        })
    }
);

const LotterySlice = createSlice({
    name: 'lottery Slice',
    initialState: initalState,
    reducers:{
        setLotteryResponse: (state, action:PayloadAction<getLottery>) => {
            return {
                ...state,
                lotteries: action.payload.lotteriesList
            }
        },
        setUpcomingLottery: (state, action:PayloadAction<UpcomingLotteries>) => {
            return {
                ...state,
                upcomingLotteries: action.payload.upcomingLottery
            }
        }
    }
});

export const {setLotteryResponse, setUpcomingLottery} = LotterySlice.actions;
export default LotterySlice.reducer