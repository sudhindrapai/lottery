import React, { Fragment, useState, useEffect } from 'react';
import headerLogo from '../../assets/headerLogo.svg';

import {StyledDesktopNavContainer, LogoSection, NavSection, ActionSection, NavItem, SelectedNavItem, 
    WalletContainer, WalletIcon, Amount, ProfileOption, ProfielWapper, DropdownContainer, DropdownOption, RedirectionBtns} from './StyledDesktopNavigation';
import {ButtonSizeVariant, ButtonType, ButtonVariant} from '../../Utility/InterFacesAndEnum';
import {RootState} from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import * as localStorageActionType from '../../localStorage/ActionTypes';
import {getLocalStorage} from '../../localStorage/GetLocalStorage';
import {setLocalStorage} from '../../localStorage/SetLocalStorage'
import Button from '../UI/Buttons/Button';

import {RouterPath} from '../../routes';
import {useNavigate} from 'react-router-dom';

const DesktopNavigation: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let navigationData = useSelector((state: RootState) => state.navigation.data);
    let accessToken = getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN);

    const [name, setName] = useState("");

    const redirectToLogin = (event: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
        navigate(RouterPath.signIn);
    }

    useEffect(() => {
        if (name === "") {
            let userObj = JSON.parse(getLocalStorage(localStorageActionType.GET_USER_DETAILS));
            setName(userObj.firstName);
        }
    },[])

    const createLogout = () => {
        setLocalStorage(localStorageActionType.CLEAR_LOGIN_USER_DETAIL, "");
        redirectToView(RouterPath.tempRoot);
        window.location.reload();
    }

    const redirectToView = (url:string) => {
        navigate(url);
    };

    let walletView = <Fragment>
        <WalletContainer>
            <WalletIcon />
            <Amount>
            &#x24; 0.00
            </Amount>
        </WalletContainer>
        <ProfielWapper>
        <ProfileOption>
            Hi, {name}
        </ProfileOption>
        <DropdownContainer>
            <DropdownOption onClick={() => {redirectToView(RouterPath.userProfile)}} >
                Profile
            </DropdownOption>
            <DropdownOption onClick={createLogout} >
                Logout
            </DropdownOption>
        </DropdownContainer>
        </ProfielWapper>
    </Fragment>

    let buttons = null;
    if (!accessToken) {
        buttons = <RedirectionBtns>
            <Button disabled={false} 
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={() => {redirectToView(RouterPath.signIn)}} >login</Button>
        <Button disabled={false} 
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={() => {redirectToView(RouterPath.signUp)}} >Signup</Button>
        </RedirectionBtns>
    } else {
        buttons = walletView;
    }

    let navView = navigationData.map((navObj):JSX.Element => {
        let Item = navObj.isSelected ? SelectedNavItem : NavItem;
        return <Item key={navObj.key} onClick={() => {redirectToView(navObj.navRoute)}} >{navObj.label}</Item>
    });

    return<StyledDesktopNavContainer>
        <LogoSection>
        <img src={headerLogo} />
        </LogoSection>
        <NavSection>
        {navView}
        </NavSection>
        <ActionSection>
        {buttons}
        </ActionSection>
        </StyledDesktopNavContainer>
};

export default DesktopNavigation