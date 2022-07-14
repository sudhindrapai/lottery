import styled from 'styled-components';
import * as UIConstants from '../../UIConstants';

export const MainPageWrapper = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #ffffff;
margin-top: 2px;
padding: 50px 80px;
border-bottom: 1px solid #D4D8E2;
${UIConstants.mobileView}{
    padding: 10px;
}
`;

export const Section = styled.div`
padding: 50px;
display: flex;
flex-basis: 50%;
flex-flow: column;
${UIConstants.mobileView}{
    margin:15px;
    padding: 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255, 200, 57, 0.5);
}
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

${UIConstants.mobileView}{
    margin:15px;
    border-right: none;
    border-radius: 10px;
    overflow: hidden;
    padding: 0;
};

};
${UIConstants.mobileView}{
    flex-flow: column;
};
`;

export const Title = styled.div`
font-weight: 600;
font-size: 22px;
line-height: 27px;
text-transform: capitalize;
color: #200E32;
margin-bottom: 45px;
text-align: left;
${UIConstants.mobileView}{
    border-bottom: none;
    padding: 20px 16px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: unset;
    background: rgba(255, 200, 57, 0.4);
};
`;

export const AuctionSection = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #ffffff;
margin-top: 2px;
padding: 20px 20px 70px 20px;
border-bottom: 1px solid #D4D8E2;
${UIConstants.mobileView}{
    padding: 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255, 200, 57, 0.5);
    /* padding: 15px; */
}
`;

export const TitelWrapper = styled.div`
width: 100%;
box-sizing:border-box;
padding: 0 20px 0 40px;
display: flex;
flex-flow:row nowrap;
align-items: center;
justify-content: space-between;
${UIConstants.mobileView}{
    flex-flow: column;
    /* padding: 0; */
    padding: 0 0 20px 16px;
}
${Title}{
    margin-top: 30px;
${UIConstants.mobileView}{
    width: 100%;
    margin: 0;
}
}
`;

export const SectionWrapper = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #ffffff;
${UIConstants.mobileView}{
    padding: 15px;
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
${UIConstants.mobileView}{
    /* display: none; */
    padding:15px;
    /* padding: 0; */
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255, 200, 57, 0.5);
}
`;

export const MoreLotteries = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: right;
color: #200E32;
cursor:pointer;
padding-top: 40px;
`;