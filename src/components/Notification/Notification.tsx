import React from 'react';
import {RootState} from '../../app/store';
import {useSelector} from 'react-redux';
const Notification:React.FC = () => {
    let isVisible = useSelector((state:RootState) => state.notifcation.isVisible);
    let notificationStatus = useSelector((state:RootState) => state.notifcation.status);
    let message = useSelector((state:RootState) => state.notifcation.message);
    return <div>
        {message}
    </div>
};

export default Notification;