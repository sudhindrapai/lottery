import React from 'react';
import headerLogo from '../../assets/headerLogo.svg';

import {StyledDesktopNavContainer, LogoSection, NavSection, ActionSection, NavItem, SelectedNavItem} from './StyledDesktopNavigation';
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

    const redirectToLogin = (event: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
        navigate(RouterPath.signIn);
    }

    const createLogout = () => {
        setLocalStorage(localStorageActionType.CLEAR_LOGIN_USER_DETAIL, "");
        window.location.reload();
    }

    let buttons = null;
    if (!accessToken) {
        buttons = <Button disabled={false} 
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={redirectToLogin} >Redirect to login</Button>
    } else {
        buttons = <Button disabled={false} 
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={createLogout} >logout</Button>
    }

    let navView = navigationData.map((navObj):JSX.Element => {
        let Item = navObj.isSelected ? SelectedNavItem : NavItem
        return <Item>{navObj.label}</Item>
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