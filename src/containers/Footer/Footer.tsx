import {FC} from 'react';
import LogoSrc from '../../assets/headerLogo.svg';
import {FooterWrapper,FooterTop, FooterLogoSection, LogoImg, LogoDesc, FooterItems, FooterItemTitle, 
    FooterItmValue, FooterBottom, CopyRight, FollowUsContainer, FollowUsTitle, Twitter} from './StyledFooter';
import {RouterPath} from '../../routes';
import {useNavigate} from 'react-router-dom';

const Footer:FC = () => {
    const navigate = useNavigate();

    const redirectToView = (path:string) => {
        navigate(path);
    };

    return <FooterWrapper>
        <FooterTop>
            <FooterLogoSection>
                <LogoImg src={LogoSrc} alt={"Kings ring"} />
                <LogoDesc>
                Lörem ipsum divere lada, protism anat i viv. Astrong parask, emmatisk faprebed.
                 Dehet faplabafäs vanas de debärade.
                 Giganera miv farade ving. Viliga niliga. Diban savast syre, sedan povis. 
                </LogoDesc>
            </FooterLogoSection>
            <FooterItems>
                <FooterItemTitle onClick={() => {redirectToView(RouterPath.root)}} >
                Home
                </FooterItemTitle>
                <FooterItmValue onClick={() => {redirectToView(RouterPath.lotteries)}} >
                Lottery
                </FooterItmValue>
                <FooterItmValue onClick={() => {redirectToView(RouterPath.auction)}} >
                Auction
                </FooterItmValue>
                <FooterItmValue onClick={() => {redirectToView(RouterPath.orders)}} >
                Purchases
                </FooterItmValue>
            </FooterItems>
            <FooterItems>
                <FooterItemTitle>
                Policy
                </FooterItemTitle>
                <FooterItmValue onClick={() => {redirectToView(RouterPath.privacyPolicy)}} >
                Privacy and Policy
                </FooterItmValue>
                <FooterItmValue onClick={() => {redirectToView(RouterPath.termsAndCondition)}} >
                Terms &amp; Conditions
                </FooterItmValue>
            </FooterItems>
            <FooterItems>
                <FooterItemTitle>
                Help
                </FooterItemTitle>
                <FooterItmValue>
                Contact Us
                </FooterItmValue>
            </FooterItems>
        </FooterTop>
        <FooterBottom>
            <CopyRight>
            Copyright ©{new Date().getFullYear()} KIngs rings
            </CopyRight>
            <FollowUsContainer>
                <FollowUsTitle>
                Follow us
                </FollowUsTitle>
                <Twitter />
                <Twitter />
                <Twitter />
            </FollowUsContainer>
        </FooterBottom>
    </FooterWrapper>
};

export default Footer