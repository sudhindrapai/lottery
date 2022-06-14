import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
`;

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-start;
background-color: #ffffff;
padding: 30px;
border-radius: 20px;
gap: 10px;
`;

export const ImgSection = styled.div`
display: flex;
flex-basis: 20%;
`;

export const LotteryDetail = styled.div`
display: flex;
flex-flow: column;
flex-basis: 80%;
align-items: flex-start;
justify-content: flex-start;
`;

export const CoinImg = styled.img`
width: 130px;
object-fit: contain;
`;

export const RewardTitle = styled.div`
font-size: 16px;
font-weight: 400;
color: #ADB5BD;
margin-bottom: 8px;
`;

export const RewardDetail = styled.div`
font-size: 38px;
    font-weight: 700;
    color: #3A57E8;
    margin-bottom: 8px;
`;

export const CounterWrapper = styled.div`
display: flex;
flex-flow: row nowrap;
margin-bottom: 30px;
color: #200E32;
`;

export const CounterTitle = styled.div`
font-size: 16px;
font-weight: 300;
font-size: 16px;
margin-right: 10px;
`;

export const TicketDetails = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
margin-bottom: 15px;
`;

export const IconImg = styled.img`
width:20px;
object-fit: contain;
`;

export const Detail = styled.div`
font-weight: 400;
font-size: 16px;
color: #200E32;
`;

export const Actions = styled.div`
width: 100%;
box-sizing: border-box;
text-align: left;
margin-top: 30px;
Button{
    height: 41px;
    width: 150px;
};
`;