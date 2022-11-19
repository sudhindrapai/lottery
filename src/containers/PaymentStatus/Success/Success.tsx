import {FC} from 'react';
import loadingImgUrl from '../../../assets/loader.gif';
import * as styled from './StyledSuccess';

const Success:FC = () => {
    return <styled.Wrapper>
        <styled.SectionWrapper>
            <styled.Title>
                Payment is Processing...
            </styled.Title>
            <styled.Subtitle>
                Please do not press back button or reload <br />
                page will be automaticaly refresh once process is complete
            </styled.Subtitle>
            <img src={loadingImgUrl} alt={"loader"} />
        </styled.SectionWrapper>
    </styled.Wrapper>
};

export default Success;