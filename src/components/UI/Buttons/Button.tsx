import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
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

const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: '#ffffff',
    backgroundColor: '#3A57E8',
    padding: "16px",
    '&:hover': {
      backgroundColor: '#3A57E8',
    },
  }));

const ButtonComponent:React.FC<ButtonState> = ({disabled, fullWidth, href, size, variant, type, clicked, children}) => {
    return <ColorButton disabled={disabled} 
    fullWidth={fullWidth} 
    type={type} 
    variant = {variant}
    onClick={clicked}
    size={size}>{children}</ColorButton>
};

export default ButtonComponent