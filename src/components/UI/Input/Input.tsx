import React from 'react';
import {TextField} from '@mui/material';
import { InputAdornment } from '@mui/material';

import {Wrapper, DollarSymbol} from './StyledInput';

enum InputTypes {
    email = 'email',
    text = 'text',
    number = 'number',
    date = 'date',
    file = 'file',
    password = 'password'
}

enum InputVariant {
    outlined = 'outlined',
    standard = 'standard',
    filled = 'filled'
}

interface InputProps {
    type: InputTypes,
    variant: InputVariant
    label: string,
    value: string,
    name: string,
    fullWidth: boolean,
    helperText: string,
    error: boolean,
    required: boolean
    isCurrencySymbolVisible?:boolean,
    handleInputChange(event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void
}

const Input: React.FC <InputProps> = ({type, variant, label, value, name, required, fullWidth, handleInputChange, error, helperText, isCurrencySymbolVisible}) => {
    console.log(isCurrencySymbolVisible,"isCurrencySymbolVisible")
    return <Wrapper>
        {isCurrencySymbolVisible && <DollarSymbol>
            $
        </DollarSymbol>}
        <TextField 
    InputLabelProps={{ shrink: true }}
    autoComplete="off"
    required={required}
    type={type} 
    variant = {variant} 
    label={label} 
    value={value} 
    name={name}
    error={error}
    helperText ={helperText}
    fullWidth={fullWidth} 
    onChange={handleInputChange} /></Wrapper>
};

export default Input