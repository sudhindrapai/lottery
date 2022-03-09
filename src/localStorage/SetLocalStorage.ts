import * as localStorageActionTypes from './ActionTypes';

interface LoginResponse {
    accessToken: string,
    refreshToken: string
}

const setAccessToken = (obj: LoginResponse) => {
    if (typeof Storage !== "undefined"){
        localStorage.setItem("ACCESS_TOKEN",obj.accessToken);
        localStorage.setItem("REFRESH_TOKEN", obj.refreshToken);
    }
};

const setPublicUserId = (id: string) => {
    if (typeof Storage !== undefined) {
        localStorage.setItem("PUBLIC_USER_ID",id);
    }
}

export const setLocalStorage = (type:string, value:any) => {
    switch(type){
        case localStorageActionTypes.SET_ACCESS_REFRESH_TOKEN:
            setAccessToken(value);
            break;
        case localStorageActionTypes.SET_PUBLIC_USER_ID:
            setPublicUserId(value);
            break;
        default: 
        return null;
    }
}