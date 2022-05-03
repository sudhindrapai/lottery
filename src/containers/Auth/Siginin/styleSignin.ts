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
}
`;

export const Image = styled.img`
max-width: 220px;
max-width: 220px;
@media screen and (max-width: 500px){
    max-width: 100%;
    max-height: 100%
}
`;