import {FC} from 'react';
import {Wrapper, ViewHeader, Container, Title, Subtitle, ActionSection, PurchaseSuccessWrapper, SuccessImage} from './StyledPaymentSuccess';
import {ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../Utility/InterFacesAndEnum';
import Button from '../../components/UI/Buttons/Button';

import successSrc from '../../assets/success.svg';
import {RouterPath} from '../../routes'
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { RootState } from '../../app/store';

const PaymentSuccess:FC = () => {
    const navigate = useNavigate();
    let totalNoOfTickets = useSelector((state:RootState) => state.purchaseLottery.totalNoOfTickets);
    return(
        <Wrapper>
            <ViewHeader />
            <PurchaseSuccessWrapper>
            <Container>
                <SuccessImage src={successSrc} />
                <Title>
                Ticket  purchased Successfully
                </Title>
                <Subtitle>
                Total {totalNoOfTickets} entries created to the Auction, 
                your ticket will be sent to your registered email address
                </Subtitle>
                <ActionSection>
                <Button 
                appBtnType={AppButtonType.primaryBtn}
                    disabled={false} 
                    fullWidth={false} 
                    size={ButtonSizeVariant.large} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={() => {
                        navigate(RouterPath.root);
                    }} >
                        Continue Shopping
                </Button>
                </ActionSection>
            </Container>
            </PurchaseSuccessWrapper>
        </Wrapper>
    )
};

export default PaymentSuccess