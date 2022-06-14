import {FC} from 'react';
import {Wrapper, Table} from './StyledLotteryWinners';
import {transformDate} from '../../Utility/Utility'
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
    return <Wrapper>
        <Table>
            <thead>
            <tr>
                <td>
                   Name 
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
                {tableValues.map((data) => {
                    return <tr>
                        <td>
                            {data.name}
                        </td>
                        <td>
                            $ {data.reward}
                        </td>
                        <td>
                            {transformDate(data.date)}
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
    </Wrapper>
};

export default LotteryWinners