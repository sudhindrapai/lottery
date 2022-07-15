import styled from 'styled-components';

import * as UIConstants from '../../UIConstants';

export const Wrapper = styled.div`
width: 100%;
box-sizing: border-box;
`;

export const MainImg = styled.div`
width:100%;
box-sizing: border-box;
margin-bottom: 30px;
${UIConstants.mobileView}{
    margin-bottom: 15px;
}
`;

export const FeatureImage = styled.img`
width: 100%;
height: 620px;
object-fit: contain;
${UIConstants.mobileView}{
    height: 280px;
}
`;

export const ThumbnailImages = styled.div`
width: 100%;
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: flex-start;
gap: 15px;
overflow-x: auto;
`;

export const ThumbnailImage = styled.img`
width: 90px;
height: 90px;
object-fit: cover;
`;