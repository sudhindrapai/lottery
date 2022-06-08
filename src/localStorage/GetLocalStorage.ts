import * as localStorageActionTypes from "./ActionTypes";

const getAccessToken = () => {
    if (typeof Storage !== "undefined"){
        return localStorage.getItem("ACCESS_TOKEN");
    }
}

const getRefreshToken = () => {
    if (typeof Storage !== "undefined"){
        return localStorage.getItem("REFRESH_TOKEN");
    }
};

const getPublicUserId = () => {
    if (typeof Storage !== "undefined") {
        return localStorage.getItem("PUBLIC_USER_ID");
    }
}

const getUserDetail = () => {
    if (typeof Storage !== "undefined") {
        let userDetailObj = localStorage.getItem("USER_DETAIL");
        return JSON.parse(userDetailObj?userDetailObj:"{}");
    }
};

const getTwoFaStatus = () => {
    if (typeof Storage !== "undefined") {
        return localStorage.getItem("IS_TWO_FA_ENABLED");
    }
};

const getSelectedLotteryObj = () => {
    if (typeof Storage !== "undefined") {
        return localStorage.getItem("SELECTED_LOTTERY_OBJ");
    }
};

const getTicketDtail = () => {
    if (typeof Storage !== "undefined") {
        return localStorage.getItem("TICKET_DETAIL_OBJ");
    }
}

export const getLocalStorage = (type: string) => {
    switch(type){
        case localStorageActionTypes.GET_ACCESS_TOKEN:
            return getAccessToken();
        case localStorageActionTypes.GET_REFRESH_TOKEN:
            return getRefreshToken();
        case localStorageActionTypes.GET_PUBLIC_USER_ID:
            return getPublicUserId();
        case localStorageActionTypes.GET_USER_DETAILS:
            return getUserDetail(); 
        case localStorageActionTypes.GET_TWO_FA_STATUS:
            return getTwoFaStatus();
        case localStorageActionTypes.GET_SELECTED_LOTTERY_OBJ:
            return getSelectedLotteryObj();
        case localStorageActionTypes.GET_TICKET_DETAIL_OBJ:
            return getTicketDtail();
        default: 
        return null;
    }
}