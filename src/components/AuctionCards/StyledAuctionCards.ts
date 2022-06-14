import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #ffffff;
display: flex;
flex-flow: column wrap;
align-items: flex-start;
justify-content: flex-start;
text-align: left;
border: 1px solid #ADB5BD;
border-radius: 8px;
overflow: hidden;
`;

export const DetailWrapper = styled.div`
width: 100%;
box-sizing: border-box;
padding: 16px;
`;

export const AuctionImage = styled.img`
width: 100%;
height: 290px;
object-fit: contain;
`;

export const Title = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #200E32;
margin-bottom: 6px;
`;

export const AuctinProductType = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #ADB5BD;
margin-bottom: 16px;
`;

export const ProgressBarContainer = styled.div`
width: 100%;
box-sizing: border-box;
margin-bottom: 16px;
`;

export const TicketDetailWrapper = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-start;
margin-bottom: 16px;
`;

export const Detail = styled.div`
display: flex;
flex-basis: 50%;
flex-flow:column;
text-align: left;
`;

export const DetailTitle = styled.div`
font-weight: 400;
font-size: 12px;
line-height: 15px;
text-transform: capitalize;
color: #200E32;
`;

export const Value = styled.div`
font-weight: 600;
font-size: 14px;
line-height: 15px;
text-transform: capitalize;
color: #000000;
`;

export const Action = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-start;
Button{
    width: 100%;
    height: 41px;
};
Button:first-child{
    margin-right: 10px;
}
`;