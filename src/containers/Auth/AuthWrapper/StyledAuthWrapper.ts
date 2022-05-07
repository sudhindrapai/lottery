import styled from 'styled-components';

interface StyledAuthWrapper{
    bgImageUrl: string
}

export const StyledAuthContainer = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: center;
height: 100%;
`;

export const StyledImgSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-basis: 60%;
/* background-color: #FFFDF7; */
background: rgba(255, 200, 57, 0.2);
mix-blend-mode: multiply;
height: 100%;
border: 1px solid rgba(255, 179, 50, 0.3);
@media screen and (max-width: 425px){
    border: unset;
    display: none;
}
`;

export const StyledImg = styled.img`
width: 500px;
max-width: 100%;
height: 100%;
max-height: 100%;
object-fit: contain;
mix-blend-mode: multiply;
@media screen and (max-width: 425px){
    max-height: 300px;
    max-width: 300px;
}
`;

export const StyledFormSection = styled.div`
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
flex-basis: 40%;
@media screen and (max-width: 425px){
    flex-basis: 100%;
}
`;