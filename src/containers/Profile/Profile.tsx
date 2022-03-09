import React from 'react';
import ProfileForm from '../Forms/Profile/Profile';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfile} from '../../features/profileSlice'

interface UpdateProfileObj{
    email: string,
    firstName:string,
    lastName: string,
    gendar:string,
    address: string,
    mobileNumber: string
}

const Profile: React.FC = () => {
    const dispatch = useDispatch();

    const onProfileUpdate = (obj:UpdateProfileObj):void => {
        dispatch(updateProfile(obj));
    }

    return <div>
        <h1>Profile</h1>
        <ProfileForm onUpdateProfile={onProfileUpdate} />
        </div>
};

export default Profile