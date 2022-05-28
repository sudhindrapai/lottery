import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
        navRoute:"/temp",
        isSelected: false
    },
    {
        label: "Lottery",
        key: "lottery",
        navRoute:"/temp/lottery",
        isSelected: true
    },
    {
        label: "Auction",
        key: "auction",
        navRoute:"/temp/auction",
        isSelected: false
    },
    {
        label: "purchase",
        key:"auction",
        navRoute:"/temp/purchase",
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