import { TextFieldProps, TextField } from '@mui/material';
import React from 'react';

import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


interface DatepickerProps {
    label:string,
    name:string,
    value: Date | undefined,
    onDateChange(date: Date, name: string):void| undefined
}

const DatePickerComponent:React.FC<DatepickerProps> = ({label, name, value, onDateChange}) => {

    const testFunction = (a: any):void => {
      onDateChange(new Date(a._d), name)
        console.log(new Date(a._d),"dfdfadfadsfdf")
    }

    return<LocalizationProvider dateAdapter={DateAdapter}>
    <DatePicker
      label={label}
      inputFormat={"MM/dd/yyyy"}
      value={value}
      onChange={(newValue: any) => testFunction(newValue)}
      renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
    />
  </LocalizationProvider>
};

export default DatePickerComponent