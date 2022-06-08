import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
position: relative;
padding-bottom: 100px;
height: 110vh;
`;

export const ViewHeader = styled.div`
width: 100%;
box-sizing: border-box;
max-height: 160px;
height: 160px;
background-color: #3A57E8;
`;

export const ContentSection = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
gap: 50px;
padding: 0 50px;
position: absolute;
top: 167px;
margin-bottom: 100px;
`;

export const Content = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: column;
flex-basis: 49%;
`;

export const SectionContainer = styled.div`
background-color: #ffffff;
width: 100%;
margin-top: 30px;
border-radius: 20px;
`;

export const SectionTitle = styled.div`
width: 100%;
box-sizing: border-box;
padding: 20px;
border-bottom: 1px solid #E8E8E8;
font-size: 16px;
font-weight: 600;
text-align: left;
color: #000000;
`;

export const PurchaseSectionDetails = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-start;
padding: 30px;
`;

export const PurchaseSectionImg = styled.div`
display: flex;
flex-basis: 20%;
img{
    height: 80px;
    width: 80px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
`;

export const PurchaseDetails = styled.div`
display: flex;
flex-basis: 80%;
flex-flow: column;
`;

export const LotteryDetail = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-between;
margin-bottom: 16px;
`;

export const Label = styled.div`
font-size: 16px;
color: #200E32;
`;

export const Value = styled.div`
font-size: 16px;
color: #200E32;
`;

export const GoldTicketView = styled.div`
background: linear-gradient(76.64deg, #EFDFA3 5.43%, #CE8631 29.33%, #C1A053 47.47%, #F4C045 68.72%, #C88221 90.4%);
border-radius: 6px;
width: 100%;
height: 54px;
display: flex;
flex-flow: row;
align-items: center;
justify-content: flex-start;
padding: 0 10px;
font-size: 14px;
font-weight: 600;
`;

export const GoldMemberDetail = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
padding: 30px;
`;

export const GoldMemberCheckbox = styled.div`
display: flex;
flex-basis: 8%;
`;

export const GoldMemberDetails = styled.div`
display: flex;
flex-basis: 75%;
text-align: left;
flex-flow: column;
`;

export const GoldMemberAmount = styled.div`
display: flex;
flex-basis: 17%;
font-size: 26px;
color: #FFB332;
font-weight: 600;
`;

export const GoldMemberTitle = styled.div`
width: 100%;
box-sizing: border-box;
font-size: 20px;
font-weight: 600;
text-transform: uppercase;
color: #FFB332;
margin-bottom: 16px;
`;

export const GoldMemberFeatureList = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row;
margin-bottom: 16px;
`;

export const Icon = styled.i`
margin-right: 10px;
color: #000000;
`;

export const Feature = styled.div`
font-size: 14px;
font-weight: 400;
color: #000000;
`;

export const PaymentDetailSection = styled.div`
width: 100%;
box-sizing: border-box;
padding: 30px;
`;

export const PaymentListItem = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row;
align-items: center;
justify-content: space-between;
margin-bottom: 16px;
`;

export const PaymentLabel = styled.div`
display: inline-flex;
font-weight: 400;
font-size: 18px;
line-height: 18px;
color: #000000;
`;

export const Amount = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 18px;
color: #000000;
`;

export const Line = styled.div`
width: 100%;
border-bottom: 1px solid #ccc;
margin: 30px 0;
`;

export const TotalAmount = styled.div`
height: 80px;
width: 100%;
box-sizing: border-box;
background-color: #F5F5F5;
border-radius: 6px;
display: flex;
flex-flow: row;
align-items: center;
justify-content: space-between;
padding: 0 10px;
${PaymentLabel}{
    color: #000000;
    font-size: 18px;
}
`;