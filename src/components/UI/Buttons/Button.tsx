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

  const SecondaryBtn = styled(Button)<ButtonProps>(() => ({
    color: '#000000',
    backgroundColor: '#FFB332',
    padding: "16px",
    '&:hover': {
      backgroundColor: '#FFB332',
    },
  }));

  const PrimaryBorder = styled(Button)<ButtonProps>(() => ({
    color: '#3A57E8',
    backgroundColor: '#ffffff',
    padding: "16px",
    border: '1px solid #3A57E8',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
  }));

  const SecondaryBorder = styled(Button)<ButtonProps>(() => ({
    color: '#FFB332',
    backgroundColor: '#ffffff',
    padding: "16px",
    border: '1px solid #FFB332',
    '&:hover': {
      backgroundColor: '#ffffff',
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