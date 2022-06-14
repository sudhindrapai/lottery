import {FC} from 'react';
import {Wrapper, Table} from './StyledAuctionWinners';
import {transformDate} from '../../Utility/Utility';

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
    return <Wrapper>
        <Table>
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
                        auctionWinnersList.map((bodyObj) => {
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
        </Table>
    </Wrapper>
};

export default AuctionWinners