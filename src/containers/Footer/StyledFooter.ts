import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';

export const FooterWrapper = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column wrap;
align-items: flex-start;
justify-content: flex-start;
background-color: #ffffff;
`;

export const FooterTop = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row wrap;
align-items: flex-start;
justify-content: flex-start;
gap: 30px;
padding: 60px;
`;

export const FooterLogoSection = styled.div`
display: flex;
flex-basis: 30%;
flex-flow: column;
align-items: flex-start;
justify-content: flex-start;
`;

export const LogoImg = styled.img`
height: 100px;
object-fit: contain;
`;

export const LogoDesc = styled.div`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: #000000;
padding: 15px 0;
`;

export const FooterItems = styled.div`
display: flex;
flex-basis: 20%;
flex-flow: column;
`;

export const FooterItemTitle = styled.div`
font-size: 16px;
font-weight: 600;
color: #200E32;
margin-bottom: 15px;
`;
export const FooterItmValue = styled.div`
font-size: 16px;
font-weight: 400;
color: #200E32;
margin-bottom: 15px;
cursor: pointer;
`;

export const FooterBottom = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #323232;
height: 52px;
display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: flex-start;
padding: 0 60px;
`;

export const CopyRight = styled.div`
display: flex;
flex-basis: 60%;
color: #ffffff;
align-items: center;
justify-content: flex-start;
text-align: left;
font-size: 12px;
`;

export const FollowUsContainer = styled.div`
display: flex;
flex-flow: row nowrap;
flex-basis: 40%;
align-items: center;
justify-content: flex-end;
`;

export const FollowUsTitle = styled.div`
font-size: 12px;
color: #ffffff;
margin-right: 15px;
`;

export const Twitter = styled(TwitterIcon)`
color: #ffffff;
height: 8px;
width: 8px;
margin-right: 10px;
`;