import UpdatePasswordForm from '../../Forms/UpdatePassword/UpdatePassword';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../../app/store';
import {updatePasswordHandler} from '../../../features/updatePasswordSlicd';

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

    return <div>
        {loading && <div>...Loading</div>}
        <h1>Password Update</h1>
        <UpdatePasswordForm onUpdatePassword={updatePassword} />
    </div>
}

export default PasswordUpdate