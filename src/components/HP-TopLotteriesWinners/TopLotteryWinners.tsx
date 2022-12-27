import {FC, useEffect} from 'react';
import {Wrapper, Table} from './StyledLotteryWinners';
import {transformDate} from '../../Utility/Utility';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../app/store';
import {getLotteryWinnerList} from '../../features/lotteriesSlice'
let tableValues = [
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    },
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    },
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    },
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    },
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    },
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    },
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    },
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    },
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    },
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    },
    {
        name: 'Kira***',
        reward: '1000',
        date: new Date()
    }
]

const LotteryWinners:FC = () => {

    const dispatch = useDispatch()

    const winnerList = useSelector((state:RootState) => state.lotteries.winnerList);

    useEffect(() => {
        dispatch(getLotteryWinnerList());
    },[]);

    let view = winnerList !== undefined && winnerList.length > 0 ? winnerList.map((obj:any) => {
        return <tr>
            <td>
                {obj.winnerTicketNo}
            </td>
            <td>
                $ {10000}
            </td>
            <td>
            {transformDate(obj.lotteryGameEndDate)}
            </td>
        </tr>
    }):null

    return <Wrapper>
        <Table>
            <thead>
            <tr>
                <td>
                   Ticket number
                </td>
                <td>
                    Reward
                </td>
                <td>
                    Date
                </td>
            </tr>
            </thead>
            <tbody>
                {view}
            </tbody>
        </Table>
    </Wrapper>
};

export default LotteryWinners