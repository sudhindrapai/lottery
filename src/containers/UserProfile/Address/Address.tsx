import {FC, useState, useEffect} from 'react';
import {Container} from './StyledAddress';

import AddressForm from '../../Forms/AddressForm/AddressForm';

import * as localStorageActionTypes from '../../../localStorage/ActionTypes';
import {getLocalStorage} from '../../../localStorage/GetLocalStorage';
import {setLocalStorage} from '../../../localStorage/SetLocalStorage';

import {useDispatch} from 'react-redux';
import {updateAddress} from '../../../features/userProfileSlice';

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
        dispatch(updateAddress(addressObj));
    }

    return <Container>
        <AddressForm onUpdateAddress={addNewAddress} />
    </Container>
}
export default AddressComponent