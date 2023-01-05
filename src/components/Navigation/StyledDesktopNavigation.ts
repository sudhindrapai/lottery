import styled from 'styled-components';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface ResponsiveMenuProps {
    isExpanded: boolean
}

export const StyledDesktopNavContainer = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
background: #FFFFFF;
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
padding: 16px;
`;

export const LogoSection = styled.div`
width: 15%;
cursor: pointer;
`;

export const NavSection = styled.div`
width: 55%;
display: flex;
flex-flow: row;
align-items: center;
justify-content: flex-start;
`;

export const ActionSection = styled.div`
width: 30%;
display: flex;
flex-flow: row;
align-items: center;
justify-content: center;
`;

export const NavItem = styled.div`
font-weight: 400;
font-size: 16px;
color: #ADB5BD;
padding: 8px 16px;
margin-right: 10px;
cursor: pointer;
text-transform: capitalize;
`;

export const SelectedNavItem = styled.div`
font-weight: 600;
font-size: 16px;
color: #3A57E8;
background: rgba(58, 87, 232, 0.08);
border-radius: 2px;
padding: 8px 16px;
margin-right: 10px;
cursor: pointer;
text-transform: capitalize;
`;

export const WalletContainer = styled.div`
display: inline-flex;
flex-flow: row nowrap;
align-items: center;
justify-content: center;
background: #FFFFFF;
border: 1px solid #3A57E8;
border-radius: 50px;
font-size: 10px;
padding: 3px 15px;
margin-left: 10px;
`;

export const WalletIcon = styled(AccountBalanceWalletIcon)`
height: 8px;
width: 9px;
color: #3A57E8;
margin-right: 10px;
`;

export const Amount = styled.div`
font-size: 10px;
color: #3A57E8;
`;

export const ProfileOption = styled.div`
display: inline-flex;
flex-flow: row nowrap;
align-items: center;
justify-content: center;
background: #3A57E8;
border: 1px solid #3A57E8;
border-radius: 50px;
font-size: 12px;
padding: 9px 25px;
color: #FFFFFF;
margin-left: 10px;
`;

export const DropdownContainer = styled.div`
position: absolute;
top: auto;
width: 186px;
z-index: 1;
box-shadow: 0px 4px 44px rgb(0 0 0 / 12%);
  background-color: #FFFFFF;
  border-radius: 5px;
  display: none;
`;


export const ProfielWapper = styled.div`
position: relative;
&:hover{
    ${DropdownContainer}{
        display: block;
    }
}
`;


export const DropdownOption = styled.div`
width: 100%;
box-sizing: border-box;
padding: 12px 16px;
border-bottom: 1px solid #f7f7f7;
color: #000000;
text-align: left;
cursor: pointer;
&:last-child{
    border-bottom: none;
}
`;

export const RedirectionBtns = styled.div`
Button {
    width: 140px;
    height: 40px;
    margin-right: 10px;
}
`;

// mobile navigation 

export const LoginDiv = styled.div`
    border: none;
    background-color: transparent;
    box-shadow: none;
    color: #000000;
`;

export const M_Wrapper = styled.div`
    position: relative;
    ${WalletContainer}{
        width: 100%;
        box-sizing: border-box;
        margin-left: 0;
        width: 112px;
        background-color: #3A57E8;

        ${WalletIcon}{
            color: #ffffff;
        }

        ${Amount}{
            color: #ffffff;
        }
    }
`;

export const M_Container = styled.div`
    border-right: 1px solid #f2f4f9;
    width: 320px;
    position: fixed;
    left: 0;
    top: 0;
    transition: transform .2s ease-out;
    z-index: 100;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 8px 10px 0 rgb(183 192 206 / 20%);
    overflow-y: scroll;
    /* transform: translateX(0); */
    transform: ${(props:ResponsiveMenuProps) => props.isExpanded ? 'translateX(0)' : 'translateX(-100%)'};
`;

export const NavBar = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
height: 56px;
background-color: #FFC839;
padding-right: 5px;
`;

export const ToggleIcon = styled(MenuIcon)`
color: #000000;
`;

export const ToggleButton = styled.div`
width: 20%;
text-align: center;
`;

export const LogoLabel = styled.div`
font-size: 18px;
width: 60%;
color: #000000;
`;

export const Action = styled.div`
text-align: right;
`;

export const CloseSection = styled.div`
width: 100%;
box-sizing: border-box;
text-align: right;
padding: 10px;
border-bottom: 1px solid #ededed;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-between;
cursor: pointer;
margin-bottom: 20px;
`;

export const Close = styled(CloseIcon)`
width: 24px;
height: 24px;
color: #000000;
`;

export const Name = styled.div`
width: content;
box-sizing: border-box;
font-size: 14px;
color: #000000;
text-transform: capitalize;
`;

export const NavMenuSection = styled.div`
width: 100%;
box-sizing: border-box;
margin-bottom: 15px;
`;

export const ProfileSection = styled.div`
width: 100%;
box-sizing: border-box;
border-top: 1px solid #cccccc;
margin-top: 30px;
`;

export const ProfileItem = styled.div`
width: 100%;
box-sizing: border-box;
color: #000000;
padding: 8px 16px;
border-bottom: 1px solid #f7f7f7;
`;