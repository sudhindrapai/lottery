import React from 'react';
import {Wrapper} from './StyledAppWrapper';

const AppWrapper:React.FC = ({children}) => {
    return <Wrapper>
        {children}
    </Wrapper>
};

export default AppWrapper