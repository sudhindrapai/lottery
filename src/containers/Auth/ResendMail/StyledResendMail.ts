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
min-height: 630px;
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
color: #000000;
margin-bottom: 19px;
`;
export const StyledIconContainer = styled.span`
margin-right: 15px;
font-size: 16px;
cursor: pointer;
`;

export const StyledDescription = styled.div`
width: 100%;
box-sizing: border-box;
margin-bottom: 50px;
text-align: left;
font-weight: 400;
font-size: 14px;
color: #828282;
`;

export const StyledResetLinkTitle = styled.div`
width: 100%;
box-sizing: border-box;
font-size: 14px;
color: var(--color-text-primary);
text-align: left;
`;

export const StyledResendBtn = styled.div`
width: 100%;
box-sizing: border-box;
font-size: 14px;
color: #FFB333;
cursor: pointer;
text-align: left;
margin-top: 15px;
`;