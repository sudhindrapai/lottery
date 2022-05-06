import React from 'react';
import {RootState} from '../../app/store';
import {useSelector} from 'react-redux';

import {NotificatoinWrapper} from './StyledNotification';

const Notification:React.FC = () => {
    let isVisible = useSelector((state:RootState) => state.notifcation.isVisible);
    let notificationStatus = useSelector((state:RootState) => state.notifcation.status);
    let message = useSelector((state:RootState) => state.notifcation.message);
    return (<NotificatoinWrapper 
        visibility = {isVisible}
    status={notificationStatus === "success" || "error" ? "#FFFFFF" : "#000000"}  
    bgColor ={notificationStatus === "success" ? "green" : notificationStatus === "error" ? "red":"yellow"} >
        {message}
    </NotificatoinWrapper>)
};

export default Notification;