import {FC, useState, useEffect} from 'react';
import {ButtonSizeVariant, ButtonVariant, ButtonType, AppButtonType} from '../../../Utility/InterFacesAndEnum';
import Button from '../../../components/UI/Buttons/Button';
import MobileImgSrc from '../../../assets/2FactorIcon.svg'
import TwoFAModal from '../../../components/Modals/TwoFAModal/TwoFaModal'
import {Container, About2FA, MobileImg, Details, Header, Subtitle, Divider, TwoFASteps} from './Styled2FA';

import {toggleTwoFA, verify2FAVerificationCode} from '../../../features/userProfileSlice';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../../app/store';

import * as localStorageAction from '../../../localStorage/ActionTypes';
import {getLocalStorage} from '../../../localStorage/GetLocalStorage';

const TwoFa:FC = () => {
    const dispatch = useDispatch();
    const toggleModal = () => {
        setVisibility(!isVisible);
    }

    let isVerified = useSelector((state:RootState) => state.userProfile.isTwoCodeVerified )

    const [isVisible, setVisibility] = useState(false);
    const [isEnabled, setStatus] = useState<boolean|null>(null);

    const toggleUser2FA = () => {
        dispatch(toggleTwoFA());
        if (isEnabled === false) {
            toggleModal();
            setStatus(false);
        }
    }

    const verifyUserCode = (code:string) => {
        dispatch(verify2FAVerificationCode(code));
        
    }

    useEffect(() => {
        if (isVerified) {
            toggleModal();
        }
        if (isEnabled === null) {
            let data = getLocalStorage(localStorageAction.GET_TWO_FA_STATUS);
            setStatus(data === true);
        }
    },[isVerified]);


    return <Container>
        <TwoFAModal label={"two-step Authentication"} isVisible={isVisible} toggleModal={toggleModal} 
        verifyCode={verifyUserCode} />
        <About2FA>
            <MobileImg src={MobileImgSrc} />
            <Details>
                <Header>
            After entering your password, verify your identity with an authentication method.
            </Header>
            <Subtitle>
            Two-step authentication adds a layer of security to your account by using more than just your password to log in.
            </Subtitle>
            <Divider/>
            <Header>
            How it works
            </Header>
            <Subtitle>
            When you log in to Kings Rings, you’ll need to:
            </Subtitle>
            <TwoFASteps>
                <li>
                Enter your email and password 
                </li>
                <li>
                Complete a second step to prove that it’s you logging in. 
                You can enter a verification code, use a security key by receiving the email OTP.
                </li>
            </TwoFASteps>
            <Button
            appBtnType={AppButtonType.primaryBtn} 
        disabled={false} 
        fullWidth={false} 
        size={ButtonSizeVariant.medium} 
        variant={ButtonVariant.contained} 
        type={ButtonType.submit} 
        clicked={toggleUser2FA} >
            {isEnabled ? "TURN OFF TWO-STEP": "TURN ON TWO-STEP"}
    </Button>
            </Details>
        </About2FA>
    </Container>
};

export default TwoFa