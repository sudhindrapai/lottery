import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import * as endpoints from '../networkUtilities/endpoints';

import * as localStorageActiontype from '../localStorage/ActionTypes';
import {getLocalStorage} from '../localStorage/GetLocalStorage';


interface UploaderState{
    images: any
}

interface ImageObj {
    documentName: string
fileDownloadUri: string
fileId: string
fileName: string
fileSize: number
fileType: string
}

interface SetImages {
    data: string[]
}

const imageUploaderInitialState: UploaderState = {
    images:[]
}

export const uploadImage = createAsyncThunk(
    'upload image',
    async (payload:any, {dispatch}) => {
        await fetch(endpoints.uploadImage,{
            method: "POST",
            headers:{
                Authorization: `Bearer ${getLocalStorage(localStorageActiontype.GET_ACCESS_TOKEN)}`,
            },
            body:payload
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            let image:ImageObj = response
            // if (response.statusCode === 200) {
                let responseArray:string[] = [];
                
                    let imageString = image.fileDownloadUri
                    responseArray.push(imageString)
                
                dispatch(setImages({
                    data:responseArray
                }))
            // }
        })
    }
)

const ImageUploaderSlice = createSlice({
    name: 'Image uploader',
    initialState: imageUploaderInitialState,
    reducers:{
        setImages:(state, action:PayloadAction<SetImages>) => {
            return {
                ...state,
                images: state.images.concat(action.payload.data)
            }
        }
    }
});

export const {setImages} = ImageUploaderSlice.actions;
export default ImageUploaderSlice.reducer;