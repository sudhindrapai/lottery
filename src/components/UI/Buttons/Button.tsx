import React, { Children } from 'react';
import { Button } from '@mui/material';

import {ButtonSizeVariant, ButtonVariant, ButtonType} from '../../../Utility/InterFacesAndEnum';

interface ButtonState {
    disabled: boolean,
    fullWidth: boolean,
    href?: string,
    size: ButtonSizeVariant,
    variant: ButtonVariant,
    type: ButtonType,
    clicked(event:React.MouseEvent<HTMLButtonElement, MouseEvent>):void
}
const ButtonComponent:React.FC<ButtonState> = ({disabled, fullWidth, href, size, variant, type, clicked, children}) => {
    return <Button disabled={disabled} 
    fullWidth={fullWidth} 
    type={type} 
    variant = {variant}
    onClick={clicked}
    size={size}>{children}</Button>
};

export default ButtonComponent