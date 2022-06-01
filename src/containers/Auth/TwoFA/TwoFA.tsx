import {FC, useEffect} from 'react';
import TwoFAForm from '../../Forms/TwoFA/TwoFA';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import TwoFAImg from '../../../assets/twoFA.png';
import {FeatierArrowLeft} from '../../../icons';
import {RouterPath} from '../../../routes';
import {useNavigate} from 'react-router-dom';
import {verify2FACode} from '../../../features/loginSlice';
import {useDispatch,useSelector} from 'react-redux';
import TwoFAIcon from '../../../assets/2FactorIcon.svg';
import {getUserProfileDetail} from '../../../features/userProfileSlice';


import {StyledWrapper,
    StyledFormContainer,
    StyledFormHeader, 
    StyledIconContainer, 
    StyledFormDescription, StyledSmsDetail, Styled2FAIcon} from './StyledTwoFA';
import { RootState } from '../../../app/store';

const TwoFA:FC = () => {

    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state:RootState) => state.login.isAuthenticated);

    const navigate  = useNavigate();

    const onCliclLogin = (code: string) => {
        dispatch(verify2FACode(code));
    };

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUserProfileDetail());
            navigate(RouterPath.userProfile);
        }
    },[isAuthenticated])

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