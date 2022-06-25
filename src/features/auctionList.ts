import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import * as endpoints from '../networkUtilities/endpoints'
import {toggleNotificationVisibility} from './notificationSlice';
import {NotificationType} from '../Utility/InterFacesAndEnum';

import * as localStorageActionType from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage'; 

interface AuctionItem{
    auctionDesc: string
auctionEndDate: string
auctionId: number
auctionPrice: number
auctionStatus: string
auctionTitle: string
bronzeTicketPrice: number
imageUrls: string[] | null
noOfUsersJoined: null | number
productCategory: string
productType: string
userName: string
}

interface AuctionDetailObj {
    auctionId: number,
    auctionTitle: string,
    auctionDesc: string,
    auctionType: string,
    productType: string,
    productCategory: string,
    auctionPrice: number,
    auctionProposedPrice: number,
    auctionImageUrls: string[] | null,
    auctionStartDate: string,
    auctionEndDate: string,
    isActive: boolean,
    isMemberAuction: boolean,
    userName: string,
    userMobile: string,
    userEmailId: string,
    address: string,
    city: string,
    state: string,
    country: string,
    pincode: number,
    auctionStatus: string,
    winnerTicketNo: null | number | string,
    winnerUserId: null | number | string
}

interface CreateAuctionRequest {
        auctionTitle: string,
        auctionDesc: string,
        auctionProposedPrice: string,
        auctionStartDate: string,
        auctionEndDate: string,
        productType: string,
        productCategory: string,
        userName: string,
        userMobile: string,
        userEmailId: string,
        address: string,
        city: string,
        state: string,
        country: string,
        pinCode: string,
        publicUserId: string
}

interface AuctionState{
    auctionList: [] | AuctionItem[],
    isAuctionCreated: boolean,
    auctionDetail: any
}

interface ToggleCreateAuctionProps {
    isCreated: boolean
}

interface SetAuctionDetailProps {
    data: AuctionItem
}

const auctionInitialState:AuctionState = {
    auctionList:[],
    isAuctionCreated: false,
    auctionDetail:{auctionImageUrls:""}
}

interface SetAuctionList {
    data: AuctionItem[]
}

export const createAuctionRequest = createAsyncThunk(
    'create user auction request',
    async (payload:CreateAuctionRequest,{dispatch}) => {
        let publicUserId = getLocalStorage(localStorageActionType.GET_PUBLIC_USER_ID);
        payload["publicUserId"] = publicUserId;
        await fetch(endpoints.createAuctionRequest,{
            method: "POST",
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(payload)
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            let data = response;
            if (data.statusCode === 200) {
                dispatch(toggleCreateAuctionState({
                    isCreated: true
                }));
            }
        });
    }
);

export const getAuctionList = createAsyncThunk(
    'get auction list',
    async (payload:string, {dispatch}) => {
        await fetch(`${endpoints.getAuctionList}?${payload}`,{
            method: 'GET',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
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

                dispatch(setAuctionList({
                    data:response.result
                }))
            }
        })
    }
);

export const getAuctionDetail = createAsyncThunk(
    'get single auction detail',
    async (payload:string, {dispatch}) => {
        await fetch (`${endpoints.getAuctionDetailById}${payload}`, {
            method: 'GET',
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN)}`,
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            if (response.statusCode === 200) {
                dispatch(toggleNotificationVisibility({
                    isVisible: true,
                    status: NotificationType.success,
                    message: response.errorMsg
                }));
                dispatch(setAuctionDetail({
                    data:response.result
                }))
            }
        })
    }
);

const auctionSlice = createSlice({
    name: 'auction slice',
    initialState: auctionInitialState,
    reducers:{
        setAuctionList: (state, action:PayloadAction<SetAuctionList>) => {
            return {
                ...state,
                auctionList: action.payload.data
            }
        },
        toggleCreateAuctionState: (state, action:PayloadAction<ToggleCreateAuctionProps>) => {
            return{
                ...state,
                isAuctionCreated: action.payload.isCreated
            }
        },
        setAuctionDetail: (state, action:PayloadAction<SetAuctionDetailProps>) => {
            return{
                ...state,
                auctionDetail: action.payload.data
            }
        }
    }
});

export const {setAuctionList, toggleCreateAuctionState, setAuctionDetail} = auctionSlice.actions;
export default auctionSlice.reducer;