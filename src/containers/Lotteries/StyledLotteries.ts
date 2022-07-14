import styled from 'styled-components';

import * as UIConstants from '../../UIConstants'

export const LotteryContainer = styled.div`
width: 100%;
box-sizing: border-box;
background-color: #F5F5F5;
padding: 0 70px 50px 70px;
${UIConstants.mobileView}{
padding: 15px;
}
`;

export const BannerImg = styled.img `
width: 100%;
object-fit: contain;
`;

export const UpcomingLotteryContainer = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow; row wrap;
align-items: flex-start;
justify-content: flex-start;
gap: 30px;
`;

export const Lottery = styled.div`
display: flex;
flex-basis: 49%;
`;

export const SectionTitle = styled.div`
font-size: 24px;
font-weight: 600;
color: #000000;
text-align: left;
margin: 70px 0 24px 0;
${UIConstants.mobileView}{
margin: 25px 0;
font-size: 18px
}
`;