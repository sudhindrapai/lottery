import {FC, useState} from 'react';

import Navigation from '../../components/Navigation/DesktopNavigation'
import FormBuilder from '../FormBuilder/FormBuilder';
import Button from '../../components/UI/Buttons/Button';
import {updateFormInputState, validateForm, updateFormSelectState, updateFormDate} from '../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
    ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../Utility/InterFacesAndEnum'

import {Wrapper, Container, FormSection, TwoSectionForm, Title, FormBody, CardWrapper, Content,Amount} from './StyledCreateAuction';

interface CreateAuction {
    form: FormElement[],
    isValidForm: boolean
}

const AuctonDetails: CreateAuction = {
    form:[
        {
            elementType: FormElementType.input,
            value:"",
            id:"title",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Title",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"description",
            isRequired:false,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Descriptin (Optional)",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"Amount",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.number,
            customValidationType: customValidationType.numberValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Receivable Amount",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        }
    ],
    isValidForm: true
}

const ScheduleDays:CreateAuction ={
    form:[
        {
            elementType: FormElementType.datePicker,
            value:"",
            id:"startDate",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.date,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Start Date",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.datePicker,
            value:"",
            id:"endDate",
            isRequired:false,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"End Date",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        }
    ],
    isValidForm: true
}

const AddressForm: CreateAuction = {
    form:[
        {
            elementType: FormElementType.input,
            value:"",
            id:"location",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"location",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"state",
            isRequired:false,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"State",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"country",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Country",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        }
    ],
    isValidForm: true
}

const UserDetail: CreateAuction = {
    form:[
        {
            elementType: FormElementType.input,
            value:"",
            id:"name",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Name",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"mobile",
            isRequired:false,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.number,
            customValidationType: customValidationType.mobileValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Mobile Number",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"email",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.email,
            customValidationType: customValidationType.emailValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Email Address",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        }
    ],
    isValidForm: true
}

const ProductDetail: CreateAuction = {
    form:[
        {
            elementType: FormElementType.select,
            value:"select",
            id:"type",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Type",
            dropdownValues:["select","type one"],
            radioGroupValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.select,
            value:"select",
            id:"category",
            isRequired:false,
            fullWidth: true,
            isCustomValidationRequred: true,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.number,
            customValidationType: customValidationType.mobileValidation,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Categoryr",
            radioGroupValues:[],
            dropdownValues:["select","category one"],
            slectedDate:null,
            isPasswordHidden:true
        }
    ],
    isValidForm: true
}


const CreateAuction:FC = () => {

    const [auctionDetail, setAuctionDetail] = useState<CreateAuction>(AuctonDetails);
    const [scheduleDays, setScheduleDaysDetail] = useState<CreateAuction>(ScheduleDays);
    const [address, setAddressDetail] = useState<CreateAuction>(AddressForm);
    const [userDetail, setUserDetail] = useState<CreateAuction>(UserDetail);
    const [productDetails, setProductDetail] = useState<CreateAuction>(ProductDetail);

    //  --------- Auction detail ----------
    const handleAuctionDetailInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, auctionDetail.form)
        setAuctionDetail({
            ...auctionDetail,
            form: updatedStateArray
        });
    }

    const auctionDetailView =  <FormBuilder formElements={auctionDetail.form} 
    onChangeDate={() => {}}
    onInputChange = {handleAuctionDetailInputChange} onSelectValueChange={() => {}}  />
//  --------------- End auction details ----------

//  --------------- Schedule Days --------------
    const handleScheduleDaysInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, scheduleDays.form)
        setScheduleDaysDetail({
            ...scheduleDays,
            form: updatedStateArray
        });
    }

    const handleScheduleDaysFormTimeInput = (date: Date, name: string) => {
        let updatedArray = updateFormDate(date, name, scheduleDays.form);
        setScheduleDaysDetail({
            ...scheduleDays,
            form:updatedArray
        });
        let selectedDate = new Date(date)
        
    };

    const scheduleDaysView = <FormBuilder formElements={scheduleDays.form} 
    onChangeDate={handleScheduleDaysFormTimeInput}
    onInputChange = {handleScheduleDaysInputChange} onSelectValueChange={()=>{}} />;

    // ------------- End schedule days ----------------


    //  ----------- address ----------------------
    const handleAddressInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, address.form)
        setAddressDetail({
            ...address,
            form: updatedStateArray
        });
    }

    const addressView = <FormBuilder formElements={address.form} 
    onChangeDate={() => {}}
    onInputChange = {handleAddressInputChange} onSelectValueChange={() => {}} />;
    //  ----------- end address ------------------


    // ------------ user detail -----------------
    const handleUserDetailInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, userDetail.form)
        setUserDetail({
            ...userDetail,
            form: updatedStateArray
        });
    }
    const userView = <FormBuilder formElements={userDetail.form} 
    onChangeDate={() => {}}
    onInputChange = {handleUserDetailInputChange} onSelectValueChange={() => {}} />;
    // ----------- end user detail -------------

    // ---------- product details ---------------

    const updateSettingsFormState = (value:string, name:string) => {
        let updatedArray = updateFormSelectState(value, name, productDetails.form);
        setProductDetail({
            ...productDetails,
            form:updatedArray
        });
    };

    const productDetailView = <FormBuilder formElements={productDetails.form} 
    onChangeDate={() => {}}
    onInputChange = {handleUserDetailInputChange} onSelectValueChange={updateSettingsFormState} />;

    // ---------- end product detail ------------

    return <Wrapper>
        <Navigation />
        <Container>
            <FormSection>
                <Title>
                Auction Details
                </Title>
                <FormBody>
                    {auctionDetailView}
                </FormBody>
            </FormSection>
            <FormSection>
                <Title>
                Scheduled days
                </Title>
                <FormBody>
                    {scheduleDaysView}
                </FormBody>
            </FormSection>
            <FormSection>
                <Title>
                Address
                </Title>
                <FormBody>
                    {addressView}
                </FormBody>
            </FormSection>
            <TwoSectionForm>
            <FormSection>
                <Title>
                Address
                </Title>
                <FormBody>
                    {userView}
                </FormBody>
            </FormSection>
            <FormSection>
                <Title>
                Address
                </Title>
                <FormBody>
                    {productDetailView}
                </FormBody>
            </FormSection>
            </TwoSectionForm>
            <FormSection>
                <Title>
                Payment Detais
                </Title>
                <FormBody>
                <CardWrapper>
                    <Content>
                    Amount of $200 to be paid as a refundable deposit to list the item
                    </Content>
                    <Amount>
                    $ 200
                    </Amount>
                </CardWrapper>
                </FormBody>
            </FormSection>
        </Container>
    </Wrapper>
};

export default CreateAuction