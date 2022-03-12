import UpdatePasswordForm from '../../Forms/UpdatePassword/UpdatePassword';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../../app/store';
import {updatePasswordHandler} from '../../../features/updatePasswordSlicd';
import Loader from '../../../components/Loader/Loader'

import {StyledFormContainer,StyledWrapper} from './StyledUpdatePassword';

interface updatePassword {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
}


const PasswordUpdate:React.FC = () => {

    const dispatch = useDispatch();
    const loading = useSelector((state:RootState) => state.passwordUpdate.isLoading)

    const updatePassword = (obj:updatePassword):void => {
        dispatch(updatePasswordHandler(obj))
    };

    return <StyledWrapper>
        <StyledFormContainer>
        <Loader isLoading={loading} />
        <h1>Password Update</h1>
        <UpdatePasswordForm onUpdatePassword={updatePassword} />
        </StyledFormContainer>
    </StyledWrapper>
}

export default PasswordUpdate