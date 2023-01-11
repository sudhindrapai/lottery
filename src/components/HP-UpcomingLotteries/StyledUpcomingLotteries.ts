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
align-items: center;
justify-content: flex-start;
padding: 24px;
border-bottom: 1px solid #E9EFFF;
`;

export const CoinImg = styled.img`
width: 94px;
object-fit: contain;
`;

export const LotteryDetail = styled.div`
display: flex;
flex-flow: column wrap;
flex-basis: 60%;
align-items: flex-start;
justify-content:flex-start;
padding-left: 30px;
`;

export const RewardTitle = styled.div`
font-weight: 300;
font-size: 14px;
line-height: 17px;
color: #200E32;
margin-bottom: 8px;
`;

export const Reward = styled.div`
font-weight: 400;
font-size: 28px;
line-height: 34px;
color: #200E32;
margin-bottom: 16px;
`;

export const StartsWrapper = styled.div`
width: 100%;
box-sizing: border-box;
display:flex;
flex-flow: row nowrap;
color: #200E32;
`;

export const Label = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 19px;
`;

export const Value = styled.div`
color: #200E32;
`;

export const NotifySection = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-end;
color: #FFB332;
flex-basis: 20%;
`;

export const EmptyLottery = styled.div`
width: 100%;
box-sizing: border-box;
text-align: left;
color: #000000;
`;