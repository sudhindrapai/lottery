import {FC} from 'react';
import {Wrapper, ViewHeader, Container, Title, Subtitle, ActionSection} from './StyledPaymentSuccess';
import {FormElementType, customValidationType, InputVariant, InputTypes, FormElement, ButtonSizeVariant, ButtonVariant, ButtonType} from '../../Utility/InterFacesAndEnum';
import Button from '../../components/UI/Buttons/Button';

const PaymentSuccess:FC = () => {
    return(
        <Wrapper>
            <ViewHeader />
            <Container>
                <Title>
                Ticket  purchased Successfully
                </Title>
                <Subtitle>
                Total 10 entries created to the lottery, your ticket will be sent to your registered email address
                </Subtitle>
                <ActionSection>
                <Button 
                    disabled={false} 
                    fullWidth={false} 
                    size={ButtonSizeVariant.large} 
                    variant={ButtonVariant.contained} 
                    type={ButtonType.submit} 
                    clicked={() => {}} >
                        Send Link
                </Button>
                </ActionSection>
            </Container>
        </Wrapper>
    )
};

export default PaymentSuccess