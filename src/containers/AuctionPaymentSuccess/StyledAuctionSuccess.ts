import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`;

export const ViewHeader = styled.div`
width: 100%;
box-sizing: border-box;
max-height: 160px;
height: 160px;
background-color: #3A57E8;
`;

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
max-width: 1000px;
background-color: #ffffff;
text-align:center;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
padding: 50px;
position: absolute;
top: -43px;
left: 13%;
border-radius: 20px;
`;

export const SuccessImage = styled.img`
object-fit: contain;
height: 250px;
width: 250px;
margin-bottom: 30px;
`;

export const Title = styled.div`
width: 100%;
box-sizing: border-box;
font-size: 34px;
font-weight: 600;
color: #000000;
`;

export const Subtitle = styled.div`
width: 100%;
box-sizing: border-box;
color: #000000;
margin-top: 16px;
`;

export const ActionSection = styled.div`
width: 100%;
box-sizing: border-box;
margin-top: 30px;
Button {
    padding: 16px 50px;
}
`;

export const PurchaseSuccessWrapper = styled.div`
width: 100%;
box-sizing: border-box;
position: relative;
height: 70vh
`;