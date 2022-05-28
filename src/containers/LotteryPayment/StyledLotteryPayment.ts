import styled from 'styled-components';

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
`;

export const SectionTitle = styled.div`
width: 100%;
box-sizing: border-box;
padding: 20px;
border-bottom: 1px solid #E8E8E8;
font-size: 16px;
color: #000000;
`;

export const PurchaseSectionDetails = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-start;
`;

export const PurchaseSectionImg = styled.div`
display: flex;
flex-basis: 20%;
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
`;

export const Label = styled.div`
font-size: 16px;
color: #200E32;
`;

export const Value = styled.div`
font-size: 16px;
color: #000000
`;