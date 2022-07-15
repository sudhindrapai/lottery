import {FC, useState, useEffect, Fragment} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import headerLogo from '../../assets/headerLogo.svg';
import {ButtonSizeVariant, ButtonType, ButtonVariant, AppButtonType} from '../../Utility/InterFacesAndEnum';
import {RootState} from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import * as localStorageActionType from '../../localStorage/ActionTypes';
import {getLocalStorage} from '../../localStorage/GetLocalStorage';
import {setLocalStorage} from '../../localStorage/SetLocalStorage'
import Button from '../UI/Buttons/Button';
import {setNavResponse} from '../../features/navigationSlice'
import {RouterPath} from '../../routes';
import {useNavigate, useLocation} from 'react-router-dom';

import {M_Wrapper, M_Container, NavBar, ToggleButton, 
    LogoLabel, Action, CloseSection, Name, SelectedNavItem, NavItem, 
    NavMenuSection, ProfileSection, ProfileItem, WalletContainer, Amount, LoginDiv} from './StyledDesktopNavigation';
import {ToggleIcon, Close, WalletIcon} from './StyledDesktopNavigation';

const ResponsiveMenu = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    let navigationData = useSelector((state: RootState) => state.navigation.data);
    let accessToken = getLocalStorage(localStorageActionType.GET_ACCESS_TOKEN);

    const [name, setName] = useState("");
    const [isMenuExpanded, setExpandStatus] = useState(false);

    const toggleMenuExpantion = () => {
        setExpandStatus(!isMenuExpanded);
    }

    useEffect(() => {
        
        let updatedResponse = navigationData.map((navObj) => {
            return {
                ...navObj,
                isSelected: (navObj.activeRoutes).indexOf(location.pathname) >= 0
            }
        });
       dispatch(setNavResponse({
           data:updatedResponse
       }))
    },[location]);

    useEffect(() => {
        if (name === "") {
            let useerDetailObj = getLocalStorage(localStorageActionType.GET_USER_DETAILS);
            if (useerDetailObj !== null && Object.keys(useerDetailObj).length > 0) {
                let userObj = JSON.parse(getLocalStorage(localStorageActionType.GET_USER_DETAILS));
                setName(userObj.firstName);
            }
        }
    },[]);

    const createLogout = () => {
        setLocalStorage(localStorageActionType.CLEAR_LOGIN_USER_DETAIL, "");
        navigate(RouterPath.tempRoot);
        navigate(RouterPath.signIn);
        window.location.reload();
    }

    const redirectToLogin = () => {
        navigate(RouterPath.signIn);
    };

    const redirectToView = (url:string) => {
        navigate(url);
        toggleMenuExpantion();
    };

    let walletandLoginView = <div>loading...</div>;

    if (!accessToken) {
        walletandLoginView = <Fragment>
            <LoginDiv
        onClick={() => {redirectToLogin()}} >login</LoginDiv>
        </Fragment>
    } else {
        walletandLoginView = <WalletContainer>
        <WalletIcon />
        <Amount>
        &#x24; 0.00
        </Amount>
    </WalletContainer>
    }

    let navView = navigationData.map((navObj):JSX.Element => {
        let Item = navObj.isSelected ? SelectedNavItem : NavItem;
        return <Item key={navObj.key} onClick={() => {redirectToView(navObj.navRoute)}} >{navObj.label}</Item>
    });

    return <M_Wrapper>
        <Backdrop isVisible={isMenuExpanded} />
        <NavBar>
            <ToggleButton onClick={toggleMenuExpantion}>
                <ToggleIcon />
            </ToggleButton>
            <LogoLabel>
                Kings Ring
            </LogoLabel>
            <Action>
            {walletandLoginView}
            </Action>
        </NavBar>
        <M_Container isExpanded={isMenuExpanded}>
            <CloseSection onClick={toggleMenuExpantion}>
               <Name>
                   Hi, {name}
                   </Name> <Close />
            </CloseSection>
            <NavMenuSection>
            {navView}
            </NavMenuSection>
            {accessToken && <ProfileSection>
                <ProfileItem onClick={() => {
                    redirectToView(RouterPath.userProfile)
                }}>
                    Profile
                </ProfileItem>
                <ProfileItem onClick={createLogout}>
                    Logout
                </ProfileItem>
            </ProfileSection>}
        </M_Container>
    </M_Wrapper>
};

export default ResponsiveMenu