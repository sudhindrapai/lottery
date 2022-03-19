import React from 'react';
import {Wrapper} from './StyledAppWrapper';
import Notification from '../../components/Notification/Notification';

const AppWrapper:React.FC = ({children}) => {
    return <Wrapper>
        <Notification />
        {children}
    </Wrapper>
};

export default AppWrapper