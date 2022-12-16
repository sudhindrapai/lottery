import {FC} from 'react';
import {Wrapper, ViewHeader, Container, Title, Subtitle, ActionSection, PurchaseSuccessWrapper, SuccessImage} from './StyledSuccess';
import {ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button';

import successSrc from '../../../assets/success.svg';
import {RouterPath} from '../../../routes'
import {useNavigate} from 'react-router-dom';

const PaymentSuccess:FC = () => {
    const navigate = useNavigate();

    const resetRootState = () => {
        navigate(RouterPath.root, { replace: true });
        window.location.replace(RouterPath.root);
    };

    return(
        <Wrapper>
            <ViewHeader />
            <PurchaseSuccessWrapper>
            <Container>
                <SuccessImage src={successSrc} />
                <Title>
                Gold membership Purchased successfully
                </Title>
                <Subtitle>
                Now your account is activated to Goldmembership profile
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
                        resetRootState();
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