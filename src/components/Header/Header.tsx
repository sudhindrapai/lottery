import React from 'react';
import {StyledHeaderwrapper, HeaderImg} from './StyledHeader';

import HeaderImage from '../../assets/headerLogo.svg'

interface HeaderProps {
    isHeaderVisible: boolean
}

const Header:React.FC<HeaderProps> = ({isHeaderVisible}) => {
    return <StyledHeaderwrapper>
        <HeaderImg src={HeaderImage} />
    </StyledHeaderwrapper>
}

export default Header