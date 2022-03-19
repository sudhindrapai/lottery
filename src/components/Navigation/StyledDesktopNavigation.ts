import Styled from 'styled-components';

export const StyledDesktopNavContainer = Styled.div`
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

export const LogoSection = Styled.div`
width: 15%;
`;

export const NavSection = Styled.div`
width: 65%;
display: flex;
flex-flow: row;
align-items: center;
justify-content: flex-start;
`;

export const ActionSection = Styled.div`
width: 20%;
`;

export const NavItem = Styled.div`
font-weight: 400;
font-size: 16px;
color: #ADB5BD;
padding: 8px 16px;
margin-right: 10px;
cursor: pointer;
text-transform: capitalize;
`;

export const SelectedNavItem = Styled.div`
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