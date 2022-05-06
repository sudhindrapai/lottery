import {FC} from 'react';
import TwoFAForm from '../../Forms/TwoFA/TwoFA';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import TwoFAImg from '../../../assets/twoFA.png';
import {FeatierArrowLeft} from '../../../icons';
import {RouterPath} from '../../../routes';
import {useNavigate} from 'react-router-dom';

import TwoFAIcon from '../../../assets/2FactorIcon.svg'

import {StyledWrapper,
    StyledFormContainer,
    StyledFormHeader, 
    StyledIconContainer, 
    StyledFormDescription, StyledSmsDetail, Styled2FAIcon} from './StyledTwoFA';

const TwoFA:FC = () => {

    const navigate  = useNavigate();

    const onCliclLogin = () => {};

    const onClickResend2FA = () => {}

    const routeTologin = () => {
        navigate(RouterPath.signIn);
    }

    return <StyledWrapper>
        <AuthWrapper imgUrl={TwoFAImg} altText={"Two factor authentication"} >
        <StyledFormContainer>
        <StyledFormHeader>
                    <StyledIconContainer onClick={routeTologin}>
                        <FeatierArrowLeft />
                    </StyledIconContainer>
                    2-Step Authentication
                </StyledFormHeader>
             <StyledFormDescription>
             This extra step shows it’s really you trying to log in
                 </StyledFormDescription>   
               <StyledSmsDetail>
                   <Styled2FAIcon>
                       <img src={TwoFAIcon} alt={"2FA mobile"} />
                   </Styled2FAIcon>
               A text Message with your code has been sent to +91 ********03
                   </StyledSmsDetail>  
    <TwoFAForm onClickLogin={onCliclLogin} onClickResendCode={onClickResend2FA} />
    </StyledFormContainer>
    </AuthWrapper>
    </StyledWrapper>
}

export default TwoFA;