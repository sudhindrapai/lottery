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
border: 1px solid var(--color-borderColor);
padding: 30px;
box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.12);
border-radius: 20px;
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