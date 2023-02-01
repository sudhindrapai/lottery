import {FC, useState, useEffect} from 'react';
import Navigation from '../../components/Navigation/DesktopNavigation';
import CoinImgSrc from '../../assets/lotteryCoin.png'
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement,
     ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../Utility/InterFacesAndEnum';
import {updateFormInputState, validateForm} from '../../Utility/Utility';
import Button from '../../components/UI/Buttons/Button';
import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../routes';

import CountDownTimer from '../../components/CountdownTimer/CountdownTimer';
import * as localStorageActionType from '../../localStorage/ActionTypes';
import {getLocalStorage} from '../../localStorage/GetLocalStorage';
import {useSelector, useDispatch} from 'react-redux';
import {purchaseLottery} from '../../features/purchaseLotterySlice';

import {ViewHeader, ContentSection, Content,
    SectionTitle, SectionContainer,PurchaseSectionDetails,
    PurchaseSectionImg, PurchaseDetails,LotteryDetail,Label,Value, GoldTicketView, GoldMemberDetail, 
    GoldMemberCheckbox, GoldMemberDetails, GoldMemberAmount, GoldMemberTitle, GoldMemberFeatureList, Icon, Feature, 
    PaymentDetailSection, PaymentListItem, PaymentLabel, Amount, Line, TotalAmount, Wrapper} from './StyledLotteryPayment';
import { RootState } from '../../app/store';


    interface PurchaseLotteryBody {
        lotteryGameId: number,
        userId: number,
        paymentId: number,
        purchaseDate: Date,
        ticketType: string,
        noOfTickets:number 
    }

    const LotteryPayment:FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ticketDetailObj, setTicketDetail] = useState<any>(null);

    let isPurchased = useSelector((state:RootState) => state.purchaseLottery.isPurchased);
    let isPaymentInitiated = useSelector((state:RootState) => state.purchaseLottery.isPaymentInitiated);
    let paymentDetails = useSelector((state:RootState) => state.purchaseLottery.paypalResponse);

    useEffect(() => {
        if (ticketDetailObj === null) {
            let selectedLottery = JSON.parse(getLocalStorage(localStorageActionType.GET_SELECTED_LOTTERY_OBJ));
            let selectedTicketDetailObj = JSON.parse(getLocalStorage(localStorageActionType.GET_TICKET_DETAIL_OBJ));
            let userDetailObj = JSON.parse(getLocalStorage(localStorageActionType.GET_USER_DETAILS));

            let updatedTicketDetailObj = {
                ...selectedLottery,
                ...selectedTicketDetailObj,
                ...userDetailObj
            }
            setTicketDetail(updatedTicketDetailObj);
        }
    },[]);

    useEffect(() => {
        if (isPaymentInitiated === true) {
            // navigate(RouterPath.lotteryPaymentSuccess);
            let linksArray = paymentDetails?.links;
            let payerActionObj = linksArray.filter((obj:any) => {
                return obj.rel === "payer-action"
            })[0];
            let link = payerActionObj.href;
            window.open(link,'_self');
        }
    },[isPaymentInitiated])

    const redirectToPaymentSuccess = () => {

        let ticketType = ticketDetailObj.label === "Silver Ticket" ? "S" :
        ticketDetailObj.label === "Gold Ticket" ? "G" :
        ticketDetailObj.label === "Platinum Ticket" ? "P" : "B"

        let purchaseLotteryObj:PurchaseLotteryBody = {
            "lotteryGameId": ticketDetailObj?.lotteryGameId,
            "userId": ticketDetailObj.userId,
            "paymentId": 2,
            "purchaseDate": new Date(),
            "ticketType": ticketType,
            "noOfTickets": ticketDetailObj?.noOfTickets
        };

        // console.log(purchaseLotteryObj,ticketDetailObj,"purchaseLotteryObj")

        dispatch(purchaseLottery(purchaseLotteryObj));
    };

    let endDate = new Date();
    if (ticketDetailObj !== null && Object.keys(ticketDetailObj).length > 0) {
        endDate = new Date(parseInt(ticketDetailObj.lotteryGameEndDate));
    }

    return <Wrapper>
        <ViewHeader />
        <ContentSection>
            <Content>
                <SectionContainer>
                    <SectionTitle>
                    Purchase details
                    </SectionTitle>
                    <PurchaseSectionDetails>
                        <PurchaseSectionImg >
                            <img src={CoinImgSrc} />
                        </PurchaseSectionImg>
                        <PurchaseDetails>
                            <LotteryDetail>
                                <Label>
                                    Lottery Id
                                </Label>
                                <Value>
                                    {ticketDetailObj?.lotteryGameId}
                                </Value>
                                </LotteryDetail>
                                <LotteryDetail>
                                <Label>
                                    Lottery Price
                                </Label>
                                <Value>
                                &#x24; {ticketDetailObj?.totalAmount}
                                </Value>
                            </LotteryDetail>
                            <LotteryDetail>
                            <Label>
                                    Lottery Ends on
                                </Label>
                                <Value>
                                    <CountDownTimer timestamp={endDate}  />
                                </Value>
                            </LotteryDetail>
                            <LotteryDetail>
                            <Label>
                                    Total Tickets
                                </Label>
                                <Value>
                                    {ticketDetailObj?.noOfTickets}
                                </Value>
                            </LotteryDetail>
                            <LotteryDetail>
                                <GoldTicketView type={ticketDetailObj?.label}>
                                {ticketDetailObj?.label}
                                </GoldTicketView>
                            </LotteryDetail>
                        </PurchaseDetails>
                    </PurchaseSectionDetails>
                </SectionContainer>
                <SectionContainer>
                    <GoldMemberDetail>
                        <GoldMemberCheckbox>

                        </GoldMemberCheckbox>
                        <GoldMemberDetails>
                            <GoldMemberTitle>
                            Gold Membership
                            </GoldMemberTitle>
                            <GoldMemberFeatureList>
                                <Icon>
                                &#10003;
                                </Icon>
                                <Feature>
                                Automatically participate in all lottery games with 5 entries in each Lottery game
                                </Feature>
                            </GoldMemberFeatureList>
                            <GoldMemberFeatureList>
                                <Icon>
                                &#10003;
                                </Icon>
                                <Feature>
                                Unlimited lottery games pariticipation
                                </Feature>
                            </GoldMemberFeatureList>
                            <GoldMemberFeatureList>
                                <Icon>
                                &#10003;
                                </Icon>
                                <Feature>
                                Unlocked gold members lottery list
                                </Feature>
                            </GoldMemberFeatureList>
                            <GoldMemberFeatureList>
                                <Icon>
                                &#10003;
                                </Icon>
                                <Feature>
                                Monthly Pass
                                </Feature>
                            </GoldMemberFeatureList>
                        </GoldMemberDetails>
                        <GoldMemberAmount>
                        &#x24; 1000
                        </GoldMemberAmount>
                    </GoldMemberDetail>
                </SectionContainer>
            </Content>
            <Content>
            <SectionContainer>
                    <SectionTitle>
                    Payment details
                    </SectionTitle>
                    <PaymentDetailSection>
                        <PaymentListItem>
                            <PaymentLabel>
                            Ticket price
                            </PaymentLabel>
                            <Amount>
                            &#x24; {ticketDetailObj?.amount}
                            </Amount>
                        </PaymentListItem>
                        <PaymentListItem>
                            <PaymentLabel>
                            Discount
                            </PaymentLabel>
                            <Amount>
                            &#x24; 0.00
                            </Amount>
                        </PaymentListItem>
                        <Line />
                        <TotalAmount>
                        <PaymentLabel>
                        Total amount
                            </PaymentLabel>
                            <Amount>
                            &#x24; {ticketDetailObj?.totalAmount}
                            </Amount>
                        </TotalAmount>
                        <Line />
                        <Button 
                        appBtnType={AppButtonType.primaryBtn}
                    disabled={false} 
                    fullWidth={true} 
                    size={ButtonSizeVariant.medium} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={redirectToPaymentSuccess} >
                       Proceed to Payment
                </Button>
                    </PaymentDetailSection>
                </SectionContainer>
            </Content>
        </ContentSection>
    </Wrapper>
};

export default LotteryPayment