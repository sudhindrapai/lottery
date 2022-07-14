import {FC, useState, useEffect} from 'react';

import FormBuilder from '../FormBuilder/FormBuilder';
import Button from '../../components/UI/Buttons/Button';
import ImageUploader from '../../components/FormImageUploader/ImageUploader';
import {updateFormInputState, validateForm, updateFormSelectState, updateFormDate} from '../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
    ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../Utility/InterFacesAndEnum'

import {Wrapper, Container, FormSection, TwoSectionForm, Title, FormBody, CardWrapper, Content,Amount,
     BreadCrumb, BreadCrumbItem, AuctionSection} from './StyledCreateAuction';

import {RouterPath} from '../../routes';
import {useNavigate} from 'react-router-dom';

import {createAuctionRequest,toggleCreateAuctionState} from '../../features/auctionList';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../app/store';

import {countryNames} from '../../assets/DropdownValues/DropdownValues';

interface CreateAuction {
    form: FormElement[],
    isValidForm: boolean
}

const AuctonDetails: CreateAuction = {
    form:[
        {
            elementType: FormElementType.input,
            value:"",
            id:"auctionTitle",
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
            id:"auctionDesc",
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
            id:"auctionProposedPrice",
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
            isCurrencySymbolVisible:true,
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
            id:"auctionStartDate",
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
            id:"auctionEndDate",
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
            id:"address",
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
            id:"city",
            isRequired:false,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.text,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"City",
            radioGroupValues:[],
            dropdownValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.multiSelection,
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
            dropdownValues:[...countryNames],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.input,
            value:"",
            id:"pincode",
            isRequired:true,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.number,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Pin/zip code",
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
            id:"userName",
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
            id:"userMobile",
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
            id:"userEmailId",
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
            id:"productType",
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
            dropdownValues:["select","Vehicle"],
            radioGroupValues:[],
            slectedDate:null,
            isPasswordHidden:true
        },
        {
            elementType: FormElementType.select,
            value:"select",
            id:"productCategory",
            isRequired:false,
            fullWidth: true,
            isCustomValidationRequred: false,
            inputVariant: InputVariant.outlined,
            inputType: InputTypes.number,
            customValidationType: customValidationType.null,
            isValidInput:false,
            isTouched:false,
            errorMessage:"",
            label:"Category",
            radioGroupValues:[],
            dropdownValues:["select","Car"],
            slectedDate:null,
            isPasswordHidden:true
        }
    ],
    isValidForm: true
}


const CreateAuction:FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [auctionDetail, setAuctionDetail] = useState<CreateAuction>(AuctonDetails);
    const [scheduleDays, setScheduleDaysDetail] = useState<CreateAuction>(ScheduleDays);
    const [address, setAddressDetail] = useState<CreateAuction>(AddressForm);
    const [userDetail, setUserDetail] = useState<CreateAuction>(UserDetail);
    const [productDetails, setProductDetail] = useState<CreateAuction>(ProductDetail);

    let isRequested = useSelector((state:RootState) => state.auction.isAuctionCreated)

    const redirectToView = (path:string) => {
        navigate(path);
    };

    useEffect(() => {
        if (isRequested === true) {
            redirectToView(RouterPath.auctionList);
        }

        return () => {
            dispatch(toggleCreateAuctionState({
                isCreated: false
            }));
        }

    },[isRequested])

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
    };

    const scheduleDaysView = <FormBuilder formElements={scheduleDays.form} 
    onChangeDate={handleScheduleDaysFormTimeInput}
    onInputChange = {handleScheduleDaysInputChange} onSelectValueChange={()=>{}} />;

    // ------------- End schedule days ----------------


    //  ----------- address ----------------------
    const handleAddressInputChange = (event:React.ChangeEvent <HTMLTextAreaElement | HTMLInputElement>):void => {
        let updatedStateArray = updateFormInputState(event, address.form);
        setAddressDetail({
            ...address,
            form: updatedStateArray
        });
    }

    const handleCountryDropdownValueChange = (value:string, name:string) => {
        let updatedArray = updateFormSelectState(value, name, address.form);
        setAddressDetail({
            ...address,
            form:updatedArray
        });
    };

    const addressView = <FormBuilder formElements={address.form} 
    onChangeDate={() => {}}
    onInputChange = {handleAddressInputChange} onSelectValueChange={handleCountryDropdownValueChange} />;
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

    const createRequest = () => {

    let formElementsArray = [
        ...auctionDetail.form,
        ...scheduleDays.form,
        ...address.form,
        ...userDetail.form,
        ...productDetails.form
    ]

    let requestObj:any = {};

    for (let formElement of formElementsArray){
        let value = formElement.value;
        requestObj[formElement.id] = value
    }
dispatch(createAuctionRequest(requestObj));
    };

    return <Wrapper>
        <BreadCrumb>
        <BreadCrumbItem onClick={() => {redirectToView(RouterPath.root)}}>Home</BreadCrumbItem> / 
        <BreadCrumbItem onClick={() => {redirectToView(RouterPath.auctionList)}} >Auction</BreadCrumbItem> / 
        <BreadCrumbItem onClick={() => {redirectToView(RouterPath.createAuction)}} >List your product in auction</BreadCrumbItem>
        </BreadCrumb>
        <Container>
        <TwoSectionForm>
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
            </TwoSectionForm>
            <TwoSectionForm>
            <FormSection>
                <Title>
                Address
                </Title>
                <FormBody>
                    {addressView}
                </FormBody>
            </FormSection>
            <FormSection>
            <FormSection>
                <Title>
                User Details
                </Title>
                <FormBody>
                    {userView}
                </FormBody>
            </FormSection>
            </FormSection>
            </TwoSectionForm>
            <TwoSectionForm>
            <FormSection>
            <ImageUploader />
            </FormSection>
            <FormSection>
                <Title>
                Product Details
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
            <AuctionSection>
            <Button 
    appBtnType={AppButtonType.primaryBtn}
        disabled={false} 
        fullWidth={false} 
        size={ButtonSizeVariant.large} 
        variant={ButtonVariant.contained} 
        type={ButtonType.submit} 
        clicked={createRequest} >
            Create Request
    </Button>
            </AuctionSection>
        </Container>
    </Wrapper>
};

export default CreateAuction