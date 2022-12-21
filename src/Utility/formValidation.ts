/** file contains functions to validate the form in the project
 * on submit function will receive the post object depend on function it will return object with status: true/false 
 * if object has invalid form values it will call global error objec
 */
 import * as errorMessages from './errorMessages';
import {validateEmail} from './Utility';

// const dispatch = useDispatch()

interface Status {
    status:boolean,
    message:string,
    requestObj:any
}

// function to validate signin form
export const validateLogin = (obj:any) => {
    let email = (obj.emailId).trim();
    let password = (obj.password).trim();

    let statusObj:Status = {
        status:true,
        message:"",
        requestObj:obj
    }

    if (email.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyEmailId;
        statusObj["requestObj"] = obj;
    } else if (email.length > 0) {
        let isValidEmail = validateEmail(email);
        if (isValidEmail === false) {
            statusObj["status"] = false;
            statusObj["message"] = errorMessages.invalidEmailId;
            statusObj["requestObj"] = obj;
        }
    }

    if (password.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyPassword;
        statusObj["requestObj"] = obj;
    }



    return statusObj;
}

// function to validate signup form
export const validateSignup = (obj:any) => {
    
    let emailId = obj.emailId;
    let firstName = obj.firstName;
    let lastName = obj.lastName;
    let mobileNumber = obj.mobileNo;
    let password = obj.password;
    let isAgreedToTc = obj.agreeTC;

    let statusObj:Status = {
        status:true,
        message:"",
        requestObj:obj
    }

    if (statusObj.status && emailId.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyEmailId;
        statusObj["requestObj"] = obj;
    } else if ( statusObj.status && emailId.length > 0) {
        let isValidEmail = validateEmail(emailId);
        statusObj["status"] = isValidEmail;
        statusObj["message"] = !(isValidEmail) ? errorMessages.invalidEmailId : "";
        statusObj["requestObj"] = obj;
    } 
    if (statusObj.status && firstName.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyFirstName;
        statusObj["requestObj"] = obj;
    } 
    if (statusObj.status && lastName.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyLastName;
        statusObj["requestObj"] = obj;
    } 
    if (statusObj.status && mobileNumber.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyMobileNumber;
        statusObj["requestObj"] = obj;
    } 
    if (statusObj.status && mobileNumber.length > 0 && mobileNumber.length < 10) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.invalidMobileNumber;
        statusObj["requestObj"] = obj;
    } 
    if (statusObj.status && password.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyPassword;
        statusObj["requestObj"] = obj;
    } 
    if (statusObj.status && !isAgreedToTc) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.tcDisagree;
        statusObj["requestObj"] = obj;
    }
    return statusObj
};

//  function to validate forgot password
export const validateForgotPassword = (obj:any) => {
    console.log(obj,"validateForgotPassword");
    let email = (obj.emailId).trim();

    let statusObj:Status = {
        status:true,
        message:"",
        requestObj:obj
    }

    if (email.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyEmailId;
        statusObj["requestObj"] = obj;
    } else if (email.length > 0) {
        let isValidEmail = validateEmail(email);
        if (isValidEmail === false) {
            statusObj["status"] = false;
            statusObj["message"] = errorMessages.invalidEmailId;
            statusObj["requestObj"] = obj;
        }
    }

    return statusObj
}

// function to validate personal info in the profile section
export const validateUpdatePersonalInfo = (obj:any) => {
    let firstName = obj.firstName;
    let lastName = obj.lastName;
    let mobileNumber = obj.mobileNo;

    let statusObj:Status = {
        status:true,
        message:"",
        requestObj:obj
    }

    if (statusObj.status && firstName.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyFirstName;
        statusObj["requestObj"] = obj;
    } 
    if (statusObj.status && lastName.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyLastName;
        statusObj["requestObj"] = obj;
    } 
    if (statusObj.status && mobileNumber.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyMobileNumber;
        statusObj["requestObj"] = obj;
    } 
    if (statusObj.status && mobileNumber.length > 0 && mobileNumber.length < 10) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.invalidMobileNumber;
        statusObj["requestObj"] = obj;
    } 

    return statusObj;
}

// function to validate address
export const validateAddres = (obj:any) => {
    let address = obj.address;
    let country = obj.country;
    let pincode = obj.pinCode;
    let state = obj.state;

    let statusObj:Status = {
        status:true,
        message:"",
        requestObj:obj
    }

    if (statusObj.status && address.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyAddress;
        statusObj["requestObj"] = obj;
    }

    if (statusObj.status && state.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyState;
        statusObj["requestObj"] = obj;
    }

    if (statusObj.status && country.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyCountry;
        statusObj["requestObj"] = obj;
    }

    if (statusObj.status && pincode.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = errorMessages.emptyPincode;
        statusObj["requestObj"] = obj;
    }

    return statusObj;
};

export const validateChangePassword = (obj:any) => {
    console.log(obj);
    let statusObj:Status = {
        status:true,
        message:"",
        requestObj:obj
    }

    let oldPassword = obj.oldPassword;
    let newPassword = obj.newPassword;
    let confirmPassword = obj.confirmPassword;

    if (statusObj.status && oldPassword.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = "old password should not be empty";
        statusObj["requestObj"] = obj;
    }

    if (statusObj.status && newPassword.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = "new password should not be empty";
        statusObj["requestObj"] = obj;
    }

    if (statusObj.status && confirmPassword.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = "confirm password should not be empty";
        statusObj["requestObj"] = obj;
    }

    if (statusObj.status && newPassword !== confirmPassword) {
        statusObj["status"] = false;
        statusObj["message"] = "confirm password and new password should be same";
        statusObj["requestObj"] = obj;
    }

    return statusObj;
}


export const validateResetPassword = (obj:any) => {
    let newPassword = obj.newPassword;
    let confirmPassword = obj.confirmPassword;
    let otp = obj.otp;

    let statusObj:Status = {
        status:true,
        message:"",
        requestObj:obj
    }

    if (statusObj.status && newPassword.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = "new password should not be empty";
        statusObj["requestObj"] = obj;
    }

    if (statusObj.status && confirmPassword.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = "confirm password should not be empty";
        statusObj["requestObj"] = obj;
    }

    if (statusObj.status && newPassword !== confirmPassword) {
        statusObj["status"] = false;
        statusObj["message"] = "new and confirm password should be same";
        statusObj["requestObj"] = obj;
    }

    if (statusObj.status && otp.length === 0) {
        statusObj["status"] = false;
        statusObj["message"] = "OTP should not be empty";
        statusObj["requestObj"] = obj;
    }

    if (statusObj.status && otp.length > 0 && otp.length < 6) {
        statusObj["status"] = false;
        statusObj["message"] = "Please enter complete OTP";
        statusObj["requestObj"] = obj;
    }

    return statusObj;
};