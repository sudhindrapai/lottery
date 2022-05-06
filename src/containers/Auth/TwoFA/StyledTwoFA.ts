import styled from 'styled-components';

export const StyledWrapper = styled.div`
flex-flow: column;
display: flex;
align-items: center;
justify-content: flex-start;
height: 100vh;
`;

export const StyledFormContainer = styled.div`
max-width: 700px;
width: 100%;
box-sizing: border-box;
padding: 30px;
max-width:420px;
background-color: #ffffff;
@media screen and (max-width: 500px){
    max-width: 100%;
    box-shadow: unset;
    border: none;
    min-height: unset;
}`;

export const StyledFormHeader = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
margin-bottom: 30px;
color: #000000;
font-size: 16px;
`;

export const StyledIconContainer = styled.span`
margin-right: 15px;
font-size: 16px;
cursor: pointer;
`;

export const StyledFormDescription = styled.div`
width: 100%;
    box-sizing: border-box;
    margin-bottom: 50px;
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    color: #828282;
`;

export const StyledSmsDetail = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
color: #3A57E8;
text-align: left;
font-size: 14px;
line-height: 18px;
font-weight: 600;
margin-bottom: 50px;
`;

export const Styled2FAIcon = styled.span`
margin-right: 10px;
`;