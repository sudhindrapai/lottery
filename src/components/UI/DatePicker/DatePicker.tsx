import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import React from 'react';

interface DatepickerProps {
    label:string,
    name:string,
    value: Date | null,
    onChangeDate(date: Date|null, name: string):void
}

const DatePickerComponent:React.FC<DatepickerProps> = ({label, name, value, onChangeDate}) => {

  const handleChange = (newValue: Date | null) => {
    onChangeDate(newValue, name);
  };

    return<LocalizationProvider dateAdapter={AdapterMoment}>
    <DateTimePicker
          label={label}
          inputFormat="DD/mm/yy hh:mm"
          value={value}
          onChange={handleChange}
          renderInput={(params:any) => <TextField {...params} fullWidth={true} />}
        />
  </LocalizationProvider>
};

export default DatePickerComponent