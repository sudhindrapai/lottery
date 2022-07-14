import {FC, useEffect} from 'react';
import Navigation from '../../components/Navigation/DesktopNavigation';

import {Wrapper, Container, Viewheader} from './StyledPurchase';
import {getOrders} from '../../features/ordersSlice';
import {useSelector, useDispatch} from 'react-redux';

const Purchases:FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
    },[])

    return <Wrapper>
        <Viewheader>
                Home / Purchases
            </Viewheader>
        <Container>
            
        </Container>
    </Wrapper>
};

export default Purchases
