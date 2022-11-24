import {FC,useEffect} from 'react';
import loadingImgUrl from '../../../assets/loader.gif';
import * as styled from './StyledSuccess';

import {useNavigate, useLocation} from 'react-router-dom'
import {RouterPath} from '../../../routes';

import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../../app/store';
import {paymentComplete} from '../../../features/purchaseLotterySlice';

const Success:FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigation = useNavigate();

    let isSuccess = useSelector((state:RootState) => state.purchaseLottery.isPurchased)

    useEffect(() => {
        let searchUrl = location.search;
        let searchItems = searchUrl.split("&PayerID=");
        let token = searchItems[0].slice(7);
        if (token !== undefined && token !== null && token.length > 0) {
            dispatch(paymentComplete({payerId:token}));
        }
    },[]);

    useEffect(() => {
        if (isSuccess === true) {
            navigation(RouterPath.lotteryPaymentSuccess);
        }
    },[isSuccess])

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