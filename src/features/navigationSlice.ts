import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RouterPath} from '../routes'

interface NavigationState {
    data: {
        label: string,
        key: string,
        navRoute: string
        isSelected: boolean
    }[]
}

interface ToggleSelectionStatus {
    key: string
}

let navigationState:NavigationState = {
    data:[ {
        label: "Home",
        key: "home",
        navRoute: RouterPath.root,
        isSelected: false
    },
    {
        label: "Lottery",
        key: "lottery",
        navRoute: RouterPath.lotteries,
        isSelected: true
    },
    {
        label: "Auction",
        key: "auction",
        navRoute:RouterPath.root,
        isSelected: false
    },
    {
        label: "purchase",
        key:"auction",
        navRoute:RouterPath.root,
        isSelected: false
    }]
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: navigationState,
    reducers:{
        toggleSelectionStatus: (state, action:PayloadAction<ToggleSelectionStatus>) => {
            let selectedState = action.payload.key
            return {
                ...state
            }
        }
    }
});

export const {toggleSelectionStatus} = navigationSlice.actions;
export default navigationSlice.reducer;