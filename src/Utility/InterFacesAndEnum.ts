// list of all enums
export enum InputTypes {
    email = 'email',
    text = 'text',
    number = 'number',
    date = 'date',
    file = 'file',
    password = 'password'
}

export enum InputVariant {
    outlined = 'outlined',
    standard = 'standard',
    filled = 'filled'
}

export enum ButtonSizeVariant {
    small = 'small',
    medium = 'medium',
    large = 'large'
};

export enum ButtonVariant {
    contained = 'contained',
    outlined = 'outlined',
    text = 'text'
}

export enum ButtonType {
    submit = 'submit',
    reset = 'reset',
    default = 'button'
}

export enum FormElementType {
    input = 'input',
    password = 'password',
    radioGroup = 'radioGroup',
    datePicker = 'datePicker',
    select = 'select',
    checkbox = 'checkbox',
    textArea = 'textarea'
}

export enum customValidationType {
    emailValidation = 'emailValidation',
    mobileValidation = 'mobileValidation',
    characterValidation = 'characterValidation',
    numberValidation = 'numberValidation',
    null = ""
}


// ----------------- interfaces ---------------

export interface RadioItem {
    value: string,
    title: string
}

export interface FormElement {
    elementType: FormElementType,
    value: string,
    id: string,
    isRequired: boolean,
    fullWidth: boolean,
    isCustomValidationRequred: boolean,
    inputVariant: InputVariant,
    inputType: InputTypes,
    customValidationType: customValidationType,
    isValidInput: boolean,
    isTouched: boolean,
    errorMessage: string,
    label: string,
    radioGroupValues:RadioItem[],
    isPasswordHidden: boolean,
    dobDate?: Date,
    row?:number
}

export enum NotificationType {
    success = "success",
    error = "error",
    warning = 'warning'
}