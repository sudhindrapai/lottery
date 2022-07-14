import {FC, Fragment, useEffect, useState} from 'react';
import DesktopNavigation from '../../components/Navigation/DesktopNavigation';
import {ButtonSizeVariant, ButtonType, ButtonVariant,AppButtonType} from '../../Utility/InterFacesAndEnum';
import Button from '../../components/UI/Buttons/Button';
import AuctionItem from '../../components/AuctionCards/AuctionCards';
import {getAuctionList,purchaseAuction, toggleAuctionPurchase} from '../../features/auctionList';
import {useSelector, useDispatch} from 'react-redux';
import AuctionBuyBtn from '../../components/AuctionBuyButton/AuctionBuyButton';

import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../routes'
import {Wrapper, BannerSection,BannerContainer, CardContainer,
     CardFooter, CardDescription, CardTitle, CardProduct, CardAction, AuctionList,
      AuctionListItem, ListTitle, ActionSection, FilterViewSection, FormView} from './StyledAuctionList'
import { RootState } from '../../app/store';


import FormBuilder from '../FormBuilder/FormBuilder';
import {updateFormInputState, updateFormSelectState} from '../../Utility/Utility';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement} from '../../Utility/InterFacesAndEnum';
import {countryNames} from '../../assets/DropdownValues/DropdownValues';


interface FormState {
    form: FormElement[],
    isValidForm: boolean
}

const FileterForm: FormState = {
    form:[
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
        }
    ],
    isValidForm: true
}

const Auction:FC = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [fileterState, setFilterState] = useState(FileterForm)
    
    const auctionList = useSelector((state:RootState) => state.auction.auctionList);
    const isAuctionPurchased = useSelector((state:RootState) => state.auction.isAuctionPurchased );


    const handleCountryDropdownValueChange = (value:string, name:string) => {
        let updatedArray = updateFormSelectState(value, name, fileterState.form);
        setFilterState({
            ...fileterState,
            form:updatedArray
        });
    };

    const filterView = <FormBuilder formElements={fileterState.form} 
    onChangeDate={() => {}}
    onInputChange = {() => {}} onSelectValueChange={handleCountryDropdownValueChange} />;


    const buyTickets = (id: number) => {
        dispatch(purchaseAuction({
            auctionId: id
        }));
    };

    const redirectToView = (path: string) => {
        navigate(path);
    }

    useEffect(() => {
        dispatch(getAuctionList("auctionStatus=U"));
        return () => {
            dispatch(toggleAuctionPurchase({
                isPurchased:false
            }))
        }
    },[]);

    useEffect(() => {
        if (isAuctionPurchased === true) {
            navigate(RouterPath.lotteryPaymentSuccess);
        }

        return () => {
            dispatch(toggleAuctionPurchase({
                isPurchased:false
            }))
        }

    },[isAuctionPurchased]); 

    return <Fragment>
        <Wrapper>
            <BannerSection>
                <BannerContainer>
                    <img src={"https://picsum.photos/450/520"} />
                </BannerContainer>
                <BannerContainer>
                    <CardContainer>
                    <img src={"https://picsum.photos/450/420"} />
                    <CardFooter>
                        <CardDescription>
                            <CardTitle>
                            Modern dream house with pool by the sea
                            </CardTitle>
                            <CardProduct>
                            House
                            </CardProduct>
                        </CardDescription>
                        <CardAction>
                        <AuctionBuyBtn auctionObj={{}} />
                        </CardAction>
                    </CardFooter>
                    </CardContainer>
                </BannerContainer>
                <BannerContainer>
                <img src={"https://picsum.photos/450/520"} />
                </BannerContainer>
            </BannerSection>
            <ListTitle>
                showing {auctionList.length} auctions
            </ListTitle>
            <ActionSection>
                <FilterViewSection>
                    <FormView>
                        {filterView}
                    </FormView>
            <Button disabled={false} 
                        appBtnType={AppButtonType.primaryBtn}
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} 
        clicked={() => {redirectToView(RouterPath.createAuction)}} >
            + List your product in auction
        </Button>
        </FilterViewSection>
            </ActionSection>
            <AuctionList>
                {auctionList.map((auctionItem) => {
                    let auctionUrl = auctionItem.imageUrls? auctionItem.imageUrls[0] : "https://picsum.photos/450/420";
                    let engagedUsersCount = auctionItem.noOfUsersJoined ? auctionItem.noOfUsersJoined : 0
                    return <AuctionListItem>
                        <AuctionItem 
                        auctionObj={auctionItem}
                    auctionId={auctionItem.auctionId} 
                    imgUrl={auctionUrl} 
                    title={auctionItem.auctionTitle} 
                    totalUsers={100} 
                    engagedUsers={engagedUsersCount} 
                    auctionProduct={auctionItem.productType} 
                    entryTicket={auctionItem.auctionPrice} 
                    drawDate={auctionItem.auctionEndDate} 
                    onSelectBuy={buyTickets} />
                    </AuctionListItem>
                })}
            </AuctionList>
    </Wrapper></Fragment>
};

export default Auction