import styled from 'styled-components';
import * as UIConstants from '../../../UIConstants';

export const Container = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-flow: row nowrap;
gap: 50px;
${UIConstants.mobileView}{
    flex-flow: column;
    gap: 15px;
}
`;

export const FormSection = styled.div`
display: flex;
flex-flow: column;
width: 100%;
`;