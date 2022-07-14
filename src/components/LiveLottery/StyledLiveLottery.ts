import styled from 'styled-components';

import * as UIConstants from '../../UIConstants';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
padding: 70px;
${UIConstants.mobileView}{
    padding: 15px;
}
`;

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
padding: 25px;
background-color: #ffffff;
border-radius: 20px;
min-height: 200px;
margin-bottom: 8px;
${UIConstants.mobileView}{
    padding: 15px;
    flex-flow: column;
}
`;

export const CoinImgSection = styled.div`
display: flex;
flex-basis: 20%;
background-color: #ffffff;
margin-right: 15px;
${UIConstants.mobileView}{
    margin-right: 0;
}
`;

export const LotterCoinImg = styled.img`
width: 100%;
object-fit: contain;
max-height: 223px;
${UIConstants.mobileView}{
    width: 150px;
    height: 150px;
}
`;

export const LotteryDetailSection = styled.div`
display: flex;
flex-basis: 80%;
flex-flow: column;
align-items: flex-start;
justify-content: flex-start;
`;

export const PriceTitle = styled.div`
font-size: 16px;
color: #ADB5BD;
margin-bottom: 8px;
`;

export const LotteryPrice = styled.div`
font-size: 38px;
font-weight: 700;
color: #3A57E8;
${UIConstants.mobileView}{
    font-size: 28px;
    margin-bottom: 10px;
}
`;

export const EndSection = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
margin-bottom: 30px;
${UIConstants.mobileView}{
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 15px;
}
`;

export const EndSectinTitle = styled.div`
font-size: 16px;
color:#200E32;
font-weight: 300;
margin-right: 10px;
`;

export const EndSectionTime = styled.div`
font-size: 20px;
font-weight: 600;
color: #200E32;
`;

export const AuctionBtnSection = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
margin-bottom: 20px;
Button{
    height: 41px;
};
Button:first-child {
    margin-right: 10px;
};
`;

export const FooterOption = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
padding: 0 20px;
${UIConstants.mobileView}{
    padding: 0;
    margin-bottom: 12px;
}
`;

export const FooterSection = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
${UIConstants.mobileView}{
    flex-flow: column;
    align-items: flex-start;
    padding: 0;
}
${FooterOption}:nth-child(2){
    border-right: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
    color: red;
    ${UIConstants.mobileView}{
    border: none;
    padding: 0;
}
};
${FooterOption}:nth-child(1){
    padding-left: 0;
    ${UIConstants.mobileView}{
    padding: 0;
}
}
`;

export const FooterTitle = styled.span`
font-size: 16px;
color: #200E32;
${UIConstants.mobileView}{
    text-align: left;
}
`;

export const FooterValue = styled.span`
font-size: 16px;
color: #000000;
font-weight: 600;
margin: 0 10px;
${UIConstants.mobileView}{
    text-align: left;
    margin-left: 0;
}
`;

export const FooterImg = styled.img`
object-fit: contain;
margin-right: 10px;
`;