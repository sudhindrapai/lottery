import {FC, useState, useEffect} from 'react';
import {Container} from './StyledAddress';

import AddressForm from '../../Forms/AddressForm/AddressForm';

import * as localStorageActionTypes from '../../../localStorage/ActionTypes';
import {getLocalStorage} from '../../../localStorage/GetLocalStorage';
import {setLocalStorage} from '../../../localStorage/SetLocalStorage';

import {useDispatch} from 'react-redux';
import {updateAddress} from '../../../features/userProfileSlice';

import {validateAddres} from '../../../Utility/formValidation';
import {NotificationType} from '../../../Utility/InterFacesAndEnum';
import {toggleNotificationVisibility} from '../../../features/notificationSlice';

interface UpdateAddressForm {
    address:string,
    country:string,
    state:string,
    pinCode:string
}

const AddressComponent:FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        let userObj = getLocalStorage(localStorageActionTypes.GET_USER_DETAILS);
        if (userObj) {
            console.log(JSON.parse(userObj),"Userobj")
        }
    },[])

    const [isVisible, setModalVisibility] = useState(false);

    const addNewAddress = (addressObj:UpdateAddressForm) => {
        let validatedObj = validateAddres(addressObj);
        if (validatedObj.status === true) {
            dispatch(updateAddress(addressObj));
        } else {
            dispatch(toggleNotificationVisibility({
                isVisible: true,
                status: NotificationType.error,
                message: validatedObj.message
            }));
        }

    }

    return <Container>
        <AddressForm onUpdateAddress={addNewAddress} />
    </Container>
}
export default AddressComponent