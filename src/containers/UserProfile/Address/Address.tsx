import {FC, useState} from 'react';
import {Container} from './StyledAddress';

import AddressForm from '../../Forms/AddressForm/AddressForm';

import {useDispatch} from 'react-redux';
import {updateAddress} from '../../../features/userProfileSlice';

interface UpdateAddressForm {
    address:string,
    country:string,
    state:string,
    pinCode:string
}

const AddressComponent:FC = () => {

    const dispatch = useDispatch()

    const [isVisible, setModalVisibility] = useState(false);

    const addNewAddress = (addressObj:UpdateAddressForm) => {
        dispatch(updateAddress(addressObj));
    }

    return <Container>
        <AddressForm onUpdateAddress={addNewAddress} />
    </Container>
}
export default AddressComponent