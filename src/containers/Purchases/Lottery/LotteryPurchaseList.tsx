import {FC,useEffect} from 'react';
import {getLotteryOrders} from '../../../features/ordersSlice'
import {useSelector, useDispatch} from 'react-redux';

const LotteryPurchaseList:FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLotteryOrders());
    },[])

    return <h1>
        Lottery Purchase list
    </h1>
};

export default LotteryPurchaseList