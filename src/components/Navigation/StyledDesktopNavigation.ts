import styled from 'styled-components';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

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
width: 150px;
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