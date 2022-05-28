import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column;
text-align: left;
`;

export const About2FA = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
`;

export const MobileImg = styled.img`
height: 40px;
margin-right: 20px;
`;

export const Details = styled.div`
display: flex;
flex-flow: column;
`;

export const Header = styled.div`
font-size: 18px;
color: #3A57E8;
line-height: 140%;
font-weight: 700;
margin-bottom: 10px;
`;

export const Subtitle = styled.div`
font-size: 14px;
color: rgba(32, 14, 50, 0.5);
font-size: 14px;
font-weight: 400;
`;

export const Divider = styled.div`
width: 100%;
box-sizing: border-box;
border-bottom: 1px solid #E8E8E8;
margin: 30px 0;
`;

export const TwoFASteps = styled.ol`
padding-left: 0;
color: rgba(32, 14, 50, 0.5);;
font-size: 14px;
margin-bottom: 30px;
li{
    padding-bottom: 6px;
}
`;