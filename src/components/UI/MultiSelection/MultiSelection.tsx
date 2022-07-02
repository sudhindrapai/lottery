import React, {FC} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Multiselection{
    fullWidth: boolean,
    required: boolean,
    value: string,
    label:string,
    id: string,
    name: string,
    error: boolean,
    dropdownValues:string[],
    handleInputChange(value: string, id: string):void
}


const MultipleSelectCheckmarks:FC<Multiselection> = (props) => {
    const {fullWidth, required, value, label,id, name, error, dropdownValues,handleInputChange} = props;
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    let updatedValue =  typeof value === 'string' ? value.split(',') : value
    setPersonName(updatedValue);
    handleInputChange(updatedValue.join(","), name)
  };

  return (
      <FormControl fullWidth={fullWidth} error={error} >
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          required={required}
          labelId={id}
          id={id}
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {dropdownValues.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

export default MultipleSelectCheckmarks