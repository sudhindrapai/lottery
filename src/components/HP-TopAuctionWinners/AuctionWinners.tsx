import {FC, useEffect} from 'react';
import {Wrapper, Table, EmptyView} from './StyledAuctionWinners';
import {transformDate} from '../../Utility/Utility';

import {RootState} from '../../app/store';
import {getAuctionWinnerList} from '../../features/auctionList'
import {useSelector, useDispatch} from 'react-redux';

let auctionWinnersList = [
    {
        imgUrl: "https://picsum.photos/100/100",
        name: "Sudhindra",
        auctionType: "House",
        date: new Date(),
        reward: "Maserati Levante GT Hybrid car won"
    },
    {
        imgUrl: "https://picsum.photos/100/100",
        name: "Sudhindra",
        auctionType: "House",
        date: new Date(),
        reward: "Maserati Levante GT Hybrid car won"
    },
    {
        imgUrl: "https://picsum.photos/100/100",
        name: "Sudhindra",
        auctionType: "House",
        date: new Date(),
        reward: "Maserati Levante GT Hybrid car won"
    },
    {
        imgUrl: "https://picsum.photos/100/100",
        name: "Sudhindra",
        auctionType: "House",
        date: new Date(),
        reward: "Maserati Levante GT Hybrid car won"
    },
    {
        imgUrl: "https://picsum.photos/100/100",
        name: "Sudhindra",
        auctionType: "House",
        date: new Date(),
        reward: "Maserati Levante GT Hybrid car won"
    }
]

const AuctionWinners = () => {

    const dispatch = useDispatch();

    const winnerList = useSelector((state:RootState) => state.auction.auctionWinnerList);

    useEffect(() => {
        if (winnerList.length === 0) {
            dispatch(getAuctionWinnerList(""));
        }
    },[]);

    return <Wrapper>
        {winnerList.length > 0 && <Table>
            <thead>
                <tr>
                    <td>
                        Images
                    </td>
                    <td>
                        Name
                    </td>
                    <td>
                        Auction Type
                    </td>
                    <td>
                        Date
                    </td>
                    <td>
                        Reward
                    </td>
                </tr>
            </thead>
            <tbody>
                    {
                        winnerList.length > 0 && winnerList.map((bodyObj:any) => {
                            return <tr>
                                <td>
                                    <img src={bodyObj.imgUrl} />
                                </td>
                                <td>
                                    {bodyObj.name}
                                </td>
                                <td>
                                    {bodyObj.auctionType}
                                </td>
                                <td>
                                    {transformDate(bodyObj.date)}
                                </td>
                                <td>
                                    {bodyObj.reward}
                                </td>
                            </tr>
                        })
                    }
                </tbody>
        </Table>}
        <EmptyView>
            No Winner Records Found
        </EmptyView>
    </Wrapper>
};

export default AuctionWinners