import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

interface AuctionItem{
    images:string[],
    title: string,
    type: string,
    totalUsers: number,
    engagedUsers: number,
    entryTicket: number,
    drawDate: Date | string,
    id: number,
    ownerName: string,
    imgUrl: string,
    streat: string,
    city: string,
    state: string,
    country: string,
}

interface AuctionState{
    auctionList: [] | AuctionItem[]
}

const auctionInitialState:AuctionState = {
    auctionList:[{
        images:["https://picsum.photos/450/420", "https://picsum.photos/450/420"],
    title: "Maserati Levante GT Hybrid",
    type: "Car",
    totalUsers: 2000,
    engagedUsers: 1290,
    entryTicket: 10,
    drawDate: new Date(),
    id: 12,
    ownerName: "Sudhindra",
    imgUrl: "https://picsum.photos/450/420",
    streat: "Strat Name",
    city: "Kundapura",
    state: "Kerala",
    country: "India",
    }, 
    {
        images:["https://picsum.photos/450/420", "https://picsum.photos/450/420"],
    title: "Duke Bike 2020 Model",
    type: "Bike",
    totalUsers: 2000,
    engagedUsers: 1290,
    entryTicket: 10,
    drawDate: new Date(),
    id: 12,
    ownerName: "Sudhindra",
    imgUrl: "https://picsum.photos/450/420",
    streat: "Strat Name",
    city: "Kundapura",
    state: "Kerala",
    country: "India",
    },
    {
        images:["https://picsum.photos/450/420", "https://picsum.photos/450/420"],
    title: "Duke Bike 2020 Model",
    type: "Bike",
    totalUsers: 2000,
    engagedUsers: 1290,
    entryTicket: 10,
    drawDate: new Date(),
    id: 12,
    ownerName: "Sudhindra",
    imgUrl: "https://picsum.photos/450/420",
    streat: "Strat Name",
    city: "Kundapura",
    state: "Kerala",
    country: "India",
    },
    {
        images:["https://picsum.photos/450/420", "https://picsum.photos/450/420"],
    title: "Duke Bike 2020 Model",
    type: "Bike",
    totalUsers: 2000,
    engagedUsers: 1290,
    entryTicket: 10,
    drawDate: new Date(),
    id: 12,
    ownerName: "Sudhindra",
    imgUrl: "https://picsum.photos/450/420",
    streat: "Strat Name",
    city: "Kundapura",
    state: "Kerala",
    country: "India",
    }, {
        images:["https://picsum.photos/450/420", "https://picsum.photos/450/420"],
    title: "Duke Bike 2020 Model",
    type: "Bike",
    totalUsers: 2000,
    engagedUsers: 1290,
    entryTicket: 10,
    drawDate: new Date(),
    id: 12,
    ownerName: "Sudhindra",
    imgUrl: "https://picsum.photos/450/420",
    streat: "Strat Name",
    city: "Kundapura",
    state: "Kerala",
    country: "India",
    }]
}

interface SetAuctionList {
    data: AuctionItem[]
}

const auctionSlice = createSlice({
    name: 'auction slice',
    initialState: auctionInitialState,
    reducers:{
        setAuctionList: (state, action:PayloadAction<SetAuctionList>) => {
            return {
                ...state,
                auctionList: action.payload.data
            }
        }
    }
});

export const {setAuctionList} = auctionSlice.actions;
export default auctionSlice.reducer;