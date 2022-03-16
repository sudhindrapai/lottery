import styled from 'styled-components';
import BadkgroundUrl from '../../../assets/authScreenBgImage.png';

export const StyledWrapper = styled.div`
flex-flow: column;
display: flex;
align-items: center;
justify-content: flex-start;
height: 100vh;
background: url(${BadkgroundUrl}) no-repeat center center fixed;
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
    border: none
}
`;

export const Image = styled.img`
max-width: 271px;
max-width: 271px;
@media screen and (max-width: 500px){
    max-width: 100%;
    max-height: 100%
}
`;