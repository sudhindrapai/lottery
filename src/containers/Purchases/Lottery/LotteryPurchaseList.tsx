import {FC,useEffect, useMemo, useState} from 'react';

import Collapse from '../../../components/LotteryCollapse/LotteryCollapse';

import {getLotteryOrders} from '../../../features/ordersSlice';
import {useSelector, useDispatch} from 'react-redux';
import {setOrders} from '../../../features/ordersSlice'
import {RootState} from '../../../app/store';

import * as Style from './StyledLotteries';

const lotteryTabMenu = [
    {
        label:"Live lottery",
        isActive:true,
        id:1,
        filterParam:""
    },
    {
        label:"Executed lottery",
        isActive:false,
        id:2,
        filterParam:""
    }
];

const LotteryPurchaseList:FC = () => {

    const dispatch = useDispatch();

    const [tabMenu, setTabMenu] = useState(lotteryTabMenu);

    const [liveLottery, setLiveLottery] = useState([]);
    const [executedLottery, setExecutedLottery] = useState([]);
    const [activeTabMenuId, setMenuId] = useState(1);

    const lotteryList = useSelector((state:RootState) => state.orders.lotteryOrders)

    useEffect(() => {
        dispatch(getLotteryOrders());
    },[]);

    useEffect(() => {
        if (lotteryList.length > 0) {
            let executedLottery = [];
            let currentLottery = [];
            
            executedLottery = lotteryList.filter((obj:any) => {
                return obj.lotteryGameStatus === "E"
            });
            currentLottery = lotteryList.filter((obj:any) => {
                return obj.lotteryGameStatus !== "E"
            });
            setLiveLottery(currentLottery);
            setExecutedLottery(executedLottery);
        }
    },[lotteryList])

    const toggleActiveState = (id:number) => {
        setMenuId(id)
        setTabMenu((tabMenu) => {
            return tabMenu.map((menuObj) => {
                return{
                    ...menuObj,
                    isActive:menuObj.id === id
                }
            })
        })
    };

    let tabMenuView = useMemo(() => {
        return tabMenu.map((menuObj,index) => {
            return <Style.TabMenuItem onClick={() => {toggleActiveState(menuObj.id)}} 
            key={`lotteryMenuItem_${menuObj.id}_${index}`} isActive={menuObj.isActive} >
                {menuObj.label}
            </Style.TabMenuItem>
        });
    },[tabMenu]);

    const toggleLotteryCollapse = (ticketNumber:any) => {
        let updateLotteryList = lotteryList.map((lotteryObj:any) => {
            return{
                ...lotteryObj,
                isExpanded:lotteryObj.ticketNo === ticketNumber ? !(lotteryObj.isExpanded) : lotteryObj.isExpanded
            }
        });
        dispatch(setOrders({
            lotteryOrders:updateLotteryList
        }))
    }

    return <Style.Wrapper>
        <Style.TabMenuWrapper>
            {tabMenuView}
        </Style.TabMenuWrapper>
        <Style.CollapseHeader>
            <Style.Label width={"18%"} textAlign={"right"}>
                Game Number
            </Style.Label>
            <Style.Label width={"15%"} textAlign={"center"}>
                Ticket number
            </Style.Label>
            <Style.Label width={"15%"} textAlign={"center"}>
                Reward
            </Style.Label>
            <Style.Label width={"20%"} textAlign={"center"}>
                Status
            </Style.Label>
            <Style.Label width={"35%"} textAlign={"right"}>
                Purchased Date
            </Style.Label>
        </Style.CollapseHeader>
        <Collapse onToggle={toggleLotteryCollapse} data={activeTabMenuId === 1 ? liveLottery : executedLottery} />
    </Style.Wrapper>
};

export default LotteryPurchaseList