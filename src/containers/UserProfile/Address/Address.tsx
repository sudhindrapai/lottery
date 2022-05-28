import {FC, useState} from 'react';
import {Container,ToggleModalBtn, AddCircleIconIcon} from './StyledAddress';

import AddAddressModal from '../../../components/Modals/AddAddressModal/AddAddressModal';

import {useSelector, useDispatch} from 'react-redux';
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

    const ToggleModalVisibility = () => {
        setModalVisibility(!isVisible)
    };

    const addNewAddress = (addressObj:UpdateAddressForm) => {
        dispatch(updateAddress(addressObj));
    }

    return <Container>
        <AddAddressModal isVisible={isVisible} label={"Add Address"} 
        toggleModal={ToggleModalVisibility} onUpdateAddress={addNewAddress} />
        <ToggleModalBtn onClick={ToggleModalVisibility}>
            <AddCircleIconIcon />
        </ToggleModalBtn>
    </Container>
}
export default AddressComponent