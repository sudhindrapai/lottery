import React, {Fragment} from 'react';
import {StyledFormElement} from './StyledFormBuilder';

import Input from '../../components/UI/Input/Input';
import Textarea from '../../components/UI/TextArea/TextArea'
import RadioGroup from '../../components/UI/RadioGroup/RadioGroup';
import PasswordIput from '../../components/UI/Password/Password';
import Select from '../../components/UI/Select/Select'
import DatePicker from '../../components/UI/DatePicker/DatePicker'

import {FormElementType, FormElement, InputVariant} from '../../Utility/InterFacesAndEnum';

interface FormbuilderProps {
    formElements:FormElement[],
    onInputChange(event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void,
    onDateSelect?(date: Date, name:string):any,
    onChangeDate(date: Date|null, name:string):void,
    onSelectValueChange(value: string, id: string):void,
}

const FormBuilder:React.FC<FormbuilderProps> = (props) => {
    const {formElements, onInputChange, onChangeDate, onSelectValueChange} = props;

    let FormElement = formElements.map((formElement, index) => {
        let element = null;
        switch(formElement.elementType){
            case FormElementType.input:
                    element =  <StyledFormElement key={`${formElement.id}_${index}`} >
                        <Input 
                    key={`${formElement.id}_${index}`} 
                    required = {formElement.isRequired}
                    type={formElement.inputType} 
                    variant={formElement.inputVariant} 
                    label={formElement.label} 
                    value={formElement.value} 
                    name={formElement.id} 
                    fullWidth={formElement.fullWidth} 
                    helperText={formElement.errorMessage} 
                    error={formElement.isTouched && formElement.errorMessage.length > 0} 
                    handleInputChange={onInputChange} /> 
                    </StyledFormElement>;
                break;
                case FormElementType.password:
                    element = <StyledFormElement key={`${formElement.id}_${index}`} >
                         <PasswordIput
                    key={`${formElement.id}_${index}`} 
                    required={formElement.isRequired}
                    label={formElement.label} 
                    fullWidth={formElement.fullWidth} 
                    variant={formElement.inputVariant} 
                    id={formElement.id} 
                    value={formElement.value} 
                    error = {formElement.isTouched && formElement.errorMessage.length > 0}
                    errorMessage ={formElement.errorMessage}
                    onPasswordChange={onInputChange} /> 
                    </StyledFormElement>;
                    break;
                case FormElementType.radioGroup:
                    element = <StyledFormElement key={`${formElement.id}_${index}`} > 
                    <RadioGroup 
                    label={formElement.label} 
                    row={true} 
                    name={formElement.id} 
                    value={formElement.value} 
                    handleInputChange={onInputChange} 
                    radioItems={formElement.radioGroupValues} /> 
                    </StyledFormElement>
                    break;
                    case FormElementType.textArea:
                        element = <StyledFormElement key={`${formElement.id}_${index}`} > 
                        <Textarea variant={formElement.inputVariant} 
                        label={formElement.label} 
                        value={formElement.value} 
                        name={formElement.id} 
                        fullWidth={formElement.fullWidth} 
                        helperText={formElement.errorMessage} 
                        error={formElement.isValidInput} 
                        required={formElement.isRequired} 
                        row={4} 
                        handleInputChange={onInputChange} /> 
                        </StyledFormElement>
                        break;
                        case FormElementType.select:
                        element = <StyledFormElement key={`${formElement.id}_${index}`} >
                            <Select 
                            fullWidth={formElement.fullWidth} 
                            required={formElement.isRequired} 
                            value={formElement.value} 
                            label={formElement.label} 
                            id={formElement.id} 
                            name={formElement.id} 
                            error={formElement.isValidInput} 
                            dropdownValues={formElement.dropdownValues} 
                            handleInputChange={onSelectValueChange} />
                        </StyledFormElement>
                        break;
                    case FormElementType.datePicker:
                        case FormElementType.datePicker:
                            element = <StyledFormElement key={`${formElement.id}_${index}`} >
                                <DatePicker 
                                label={formElement.label} 
                                name={formElement.id} 
                                value={formElement.slectedDate? formElement.slectedDate : null} 
                                onChangeDate={onChangeDate}
                                 />
                            </StyledFormElement>
                        break;
                    break;
                default:
                    element = null;
        }
        return element
    });

    return <Fragment>
        {FormElement}
    </Fragment>
};

export default FormBuilder