import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import {ButtonSizeVariant, ButtonVariant, ButtonType,AppButtonType} from '../../../Utility/InterFacesAndEnum';

interface ButtonState {
    disabled: boolean,
    fullWidth: boolean,
    href?: string,
    size: ButtonSizeVariant,
    variant: ButtonVariant,
    type: ButtonType,
    appBtnType:AppButtonType
    clicked(event:React.MouseEvent<HTMLButtonElement, MouseEvent>):void
}

const PrimaryBtn = styled(Button)<ButtonProps>(() => ({
    color: '#ffffff',
    background: 'linear-gradient(76.64deg, #3A57E8 5.43%, #647CF5 27.36%, #8395EF 46.41%, #4564FF 68.72%, #001994 90.4%)',
    padding: "16px",
    '&:hover': {
      backgroundColor: '#3A57E8',
    },
  }));

  const SecondaryBtn = styled(Button)<ButtonProps>(() => ({
    color: '#ffffff',
    fontweight: '500',
    backgroundColor: '#FFB332',
    background: 'linear-gradient(76.64deg, #EFDFA3 5.43%, #CE8631 29.33%, #C1A053 47.47%, #F4C045 68.72%, #C88221 90.4%)',
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

const ButtonComponent:React.FC<ButtonState> = ({disabled, fullWidth, href, size, variant, type, clicked, children, appBtnType}) => {

  let Button = PrimaryBtn;

  switch(appBtnType){
    case AppButtonType.primaryBtn:
      Button = PrimaryBtn
      break;
    case AppButtonType.secondary:
      Button =  SecondaryBtn;
      break;
    case AppButtonType.primaryBordered:
      Button = PrimaryBorder;
      break;
    case AppButtonType.secondaryBordered:
      Button = SecondaryBorder;
      break;
      default:
        Button = PrimaryBtn
  }

    return <Button disabled={disabled} 
    fullWidth={fullWidth} 
    type={type} 
    variant = {variant}
    onClick={clicked}
    size={size}>{children}</Button>
};

export default ButtonComponent