import React from 'react';
import {StyledBackdrop} from './StyledBackdrop';

interface BackdropProps {
    isVisible: boolean
}

const Backdrop:React.FC<BackdropProps> = ({isVisible}) =>  isVisible ? <StyledBackdrop /> : null ;

export default Backdrop