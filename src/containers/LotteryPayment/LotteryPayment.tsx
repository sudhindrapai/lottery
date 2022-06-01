import {FC, Fragment} from 'react';
import Navigation from '../../components/Navigation/DesktopNavigation';
import CoinImgSrc from '../../assets/lotteryCoin.png'
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement, ButtonSizeVariant, ButtonVariant, ButtonType} from '../../Utility/InterFacesAndEnum';
import {updateFormInputState, validateForm} from '../../Utility/Utility';
import Button from '../../components/UI/Buttons/Button';
import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../routes';

import {ViewHeader, ContentSection, Content, 
    SectionTitle, SectionContainer,PurchaseSectionDetails,
    PurchaseSectionImg, PurchaseDetails,LotteryDetail,Label,Value, GoldTicketView, GoldMemberDetail, 
    GoldMemberCheckbox, GoldMemberDetails, GoldMemberAmount, GoldMemberTitle, GoldMemberFeatureList, Icon, Feature, 
    PaymentDetailSection, PaymentListItem, PaymentLabel, Amount, Line, TotalAmount, Wrapper} from './StyledLotteryPayment';

const LotteryPayment:FC = () => {
    const navigate = useNavigate();
    const redirectToPaymentSuccess = () => {
        navigate(RouterPath.lotteryPaymentSuccess)
    };

    return <Wrapper>
        <Navigation />
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
                                    1234567
                                </Value>
                                </LotteryDetail>
                                <LotteryDetail>
                                <Label>
                                    Lottery Price
                                </Label>
                                <Value>
                                &#x24; 10000
                                </Value>
                            </LotteryDetail>
                            <LotteryDetail>
                            <Label>
                                    Lottery Ends on
                                </Label>
                                <Value>
                                    10000
                                </Value>
                            </LotteryDetail>
                            <LotteryDetail>
                                <GoldTicketView >
                                    Gold Ticket
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
                            &#x24; 100.00
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
                            &#x24; 100.00
                            </Amount>
                        </TotalAmount>
                        <Line />
                        <Button 
                    disabled={false} 
                    fullWidth={true} 
                    size={ButtonSizeVariant.medium} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={redirectToPaymentSuccess} >
                        Send Link
                </Button>
                    </PaymentDetailSection>
                </SectionContainer>
            </Content>
        </ContentSection>
    </Wrapper>
};

export default LotteryPayment