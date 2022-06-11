
import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
padding: 30px;
`;

export const BannerSection = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-start;
gap: 30px;
`;

export const BannerContainer = styled.div`
display: flex;
flex-basis: 32%;
flex-flow: column;
align-items: flex-start;
justify-content:flex-start;
border-radius: 8px;
overflow: hidden;
`;

export const CardContainer = styled.div`
border: 1px solid #ADB5BD;
overflow: hidden;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
background-color: #ffffff;
`;

export const CardFooter = styled.div`
background-color: #ffffff;
padding: 15px 20px;
overflow: hidden;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: space-between;
`;

export const Description = styled.div`
width: 100%;
box-sizing: border-box;
`;

export const CardDescription = styled.div`
display: flex;
flex-basis: 70%;
flex-flow: column;
align-items: flex-start;
justify-content: center;
`;

export const CardAction = styled.div`
display: flex;
flex-basis: 30%;
`;

export const CardTitle = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #200E32;
text-align: left;
margin-bottom: 10px;
`;

export const CardProduct = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #ADB5BD;
`;

export const AuctionList = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row wrap;
align-items: flex-start;
justify-content: flex-start;
gap: 33px;
`;

export const AuctionListItem = styled.div`
display: flex;
flex-basis: 23%;
`;