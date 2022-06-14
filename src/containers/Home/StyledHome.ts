import styled from 'styled-components';

export const MainPageWrapper = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #ffffff;
margin-top: 2px;
padding: 50px 80px;
border-bottom: 1px solid #D4D8E2;
`;

export const Section = styled.div`
padding: 50px;
display: flex;
flex-basis: 50%;
flex-flow: column;
`;

export const SectionTwo = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap
align-items: center;
justify-content: space-between;
background-color: #ffffff;
border-bottom: 1px solid #D4D8E2;
${Section}:first-child{
    border-right: 1px solid #D4D8E2;
}
`;

export const Title = styled.div`
font-weight: 600;
font-size: 22px;
line-height: 27px;
text-transform: capitalize;
color: #200E32;
margin-bottom: 45px;
text-align: left;
`;

export const AuctionSection = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #ffffff;
margin-top: 2px;
padding: 20px 20px 70px 20px;
border-bottom: 1px solid #D4D8E2;
`;

export const TitelWrapper = styled.div`
width: 100%;
box-sizing:border-box;
padding: 0 20px 0 40px;
display: flex;
flex-flow:row nowrap;
align-items: center;
justify-content: space-between;
${Title}{
    margin-top: 30px;
}
`;

export const MoreAuction = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: right;
color: #200E32;
cursor:pointer;
`;

export const AuctionWinnerSection = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #ffffff;
margin-top: 2px;
padding: 40px 50px 70px 50px;
border-bottom: 1px solid #D4D8E2;
`;