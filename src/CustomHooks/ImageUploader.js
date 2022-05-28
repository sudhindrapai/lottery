// hook can be used only in functional components

// this custom hook is to send the network calls
// required parameters are: header_type, URL, method, and body
// hook will response loading state, error message,and data

// ============
// step-1
// before send request loader state to true and other fields are null

// step-2
//during send send request loader is true,
// after response comes loader state to false and sends response

// ERROR state
// if error comes sends the error message and loading state to false

// step-3
// finally loading state to false
// ============

import { useReducer, useCallback } from "react";
import { useLocation } from "react-router";

import * as endPoint from "../NetworkCalls/endpoints";
import axiosV1 from "../NetworkCalls/axiosV1";

import { errorLogger } from "../ErrorLoggers/NetworkErrorLogger/NetworkErrorLogger";

import * as localStorageActionType from "../LocalStorage/LocalStorageActionTypes";
import { getLocalStorageValues } from "../LocalStorage/GetLocalStorageValues";


const initialState = {
  loading: false,
  error: null,
  data: null,
};

// http reducer for function
const httpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case "RESPONSE":
      return {
        ...state,
        loading: false,
        data: action.responseData,
      };
    case "ERROR":
      return {
        loading: false,
        error: action.errorMessage,
      };
    case "CLEAR":
      return {
        ...state,
        error: null,
      };
    case "FINALLY":
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error("Should not be reached!");
  }
};

// hook logic function
const useGenericImageUploader = () => {
  let {pathname} = useLocation();

  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  let isDoctorSignedIn = getLocalStorageValues(
    localStorageActionType.GET_IS_DOCTOR_SIGN_IN_STATUS
  );

  let patientId = getLocalStorageValues(
    localStorageActionType.GET_PATIENT_ID
  );

  let clientType = null;

  if (isDoctorSignedIn === "true" || pathname === "/doctor-registration") {
    clientType = "DOCTOR";
  } else if(isDoctorSignedIn === "false" || pathname === "/patient-registration") {
    clientType = "PATIENT";
  } 

  const sendRequest = useCallback((fileObj, flag, fileCategory, clientId) => {
    dispatchHttp({ type: "SEND" });

    let queryParams = "";

    let clientTypeQueryParam = "";
    let clientIdQueryParam = "";

    if(fileCategory === "EMR"){
      if(patientId != null && patientId != undefined){
        clientIdQueryParam = `&clientId=${patientId}`;
      }else if(clientId != null && clientId != undefined){
        clientIdQueryParam = `&clientId=${clientId}`;
      }
    }

    if(clientType != null){
      clientTypeQueryParam = `&clientType=${clientType}`;
    }

    if (fileObj !== undefined) {
      let fileObjType = fileObj[0].type;
      queryParams = `?fileType=${fileObjType.slice(
        fileObjType.indexOf("/") + 1
      )}&fileCategory=${fileCategory}${clientTypeQueryParam}${clientIdQueryParam}`;
    }

    const formData = new FormData();

    let updatedName = fileObj[0].name.split(" ").join("_");
    formData.append(updatedName, fileObj[0]);

    axiosV1
      .post(`${endPoint.genericImageUploader}${queryParams}`, formData)
      .then((response) => {
        dispatchHttp({
          type: "RESPONSE",
          responseData: {
            response: response.data,
            flag: flag,
          },
        });
      })
      .catch((error) => {
        let message = errorLogger(error);

        if (message === undefined || message === null || message.length > 0) {
          message = "Something went wrong!";
        }
        dispatchHttp({
          type: "ERROR",
          flag: flag,
          errorMessage: "",
        });
      })
      .finally(() => {
        dispatchHttp({
          type: "FINALLY",
          flag: flag,
        });
      });
  }, []);

  // return logic
  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
  };
};

export default useGenericImageUploader;
