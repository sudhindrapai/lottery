import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
width: 100%;
height: 95vh;
`;

export const Title = styled.div`
width: 100%;
box-sizing: border-box;
text-align: center;
font-size: 24px;
color: #000000;
margin: 30px 0 15px 0;
`;

export const Subtitle = styled.div`
width: 100%;
box-sizing: border-box;
text-align: center;
font-size: 14px;
margin-bottom: 30px;
color: #000000;
ol {
    text-align: left;
}
`;

export const SectionWrapper = styled.div`
width: 30%;
height: 450px;
background-color: #ffffff;
border-radius: 8px;
padding: 10px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;