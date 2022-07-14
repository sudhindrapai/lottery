import React, { Fragment } from 'react';
import {Wrapper, FooterWapper} from './StyledAppWrapper';
import Navigation from '../../components/Navigation/Navigation';
import Notification from '../../components/Notification/Notification';
import Footer from '../../containers/Footer/Footer';
import {RouterPath} from '../../routes';
import {useLocation} from 'react-router-dom';

let footerExcludeUrl = [
    RouterPath.resendResetLink, RouterPath.resetPassword, RouterPath.signIn, RouterPath.signUp, RouterPath.twoFA, RouterPath.forgotPassword
]

const AppWrapper:React.FC = ({children}) => {
    let params = useLocation();
    let FooterView = <Fragment></Fragment>

    if (footerExcludeUrl.indexOf(params.pathname) === -1) {
        FooterView = <FooterWapper>
        <Footer />
        </FooterWapper>
    }

    return <Wrapper>
        <Notification />
        <Navigation />
        {children}
        {FooterView}
    </Wrapper>
};

export default AppWrapper