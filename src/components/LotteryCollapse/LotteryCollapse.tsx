import {FC, useMemo, useState} from 'react';
import {transformDate} from '../../Utility/Utility'
import * as Style from './StyledLotteryCollapse';

interface OrderObj{
    "purchaseId": number | null | string,
    "lotteryGameId": number | string | null,
    "userId": number | null | string,
    "firstName": number | null | string,
    "lastName": number | null | string,
    "purchaseDate": Date,
    "paymentId": number | null | string,
    "ticketType": number | null | string,
    "noOfTickets": number | null | string,
    "ticketAmount": number | null | string,
    "ticketId": number | null | string,
    "ticketNo": number | null | string,
    "paymentType": number | null | string,
    "ticketPrice": number | null | string,
    "rewardType": number | null | string,
    "rewardAmount": number | null | string,
    "rewardGiftName": number | null | string,
    "winnerStatus": number | null | string,
    "winnerAnnounceDate": Date,
    "lotteryGameStatus": number | null | string,
    "isExpanded": boolean
}

interface LotteryCollapseProps{
    data:OrderObj[],
    onToggle(id:any):void
}

const LotteryCollapse:FC<LotteryCollapseProps> = ({data,onToggle}):any => {

    let CollapseView = data.map((lotteryObj) => {
            return <Style.Wrapper onClick={() => {onToggle(lotteryObj.ticketNo)}}>
            <Style.CollapseBtn>
                <Style.ChevronDown />
                <Style.Value width={"15%"} textAlign={"center"} >
                     {lotteryObj.lotteryGameId}
                </Style.Value>
                <Style.Value width={"15%"} textAlign={"center"}  >
                      {lotteryObj.ticketNo}
                </Style.Value>
                <Style.Value width={"15%"} textAlign={"center"}  >
                      {lotteryObj.rewardType === "M" ? lotteryObj.rewardAmount : lotteryObj.rewardGiftName}
                </Style.Value>
                <Style.Value width={"20%"} textAlign={"center"}  >
                      {lotteryObj.winnerStatus}
                </Style.Value>
                <Style.Value width={"35%"} textAlign={"right"}  >
                    {transformDate(lotteryObj.purchaseDate? new Date() : lotteryObj.purchaseDate)}
                </Style.Value>
            </Style.CollapseBtn>
            {lotteryObj.isExpanded && <Style.CollapseBody>
                <Style.TicketDetails>
                    <Style.TicketDetail>
                        <Style.TicketDetailTitle>
                            Ticket Amount
                        </Style.TicketDetailTitle>
                        <Style.TicketDetailValue>
                            ${lotteryObj.rewardAmount}
                        </Style.TicketDetailValue>
                    </Style.TicketDetail>
                    <Style.TicketDetail>
                        <Style.TicketDetailTitle>
                            Ticket Type
                        </Style.TicketDetailTitle>
                        <Style.TicketDetailValue>
                            {lotteryObj.ticketType}
                        </Style.TicketDetailValue>
                    </Style.TicketDetail>
                    <Style.TicketDetail>
                        <Style.TicketDetailTitle>
                            Payment Type
                        </Style.TicketDetailTitle>
                        <Style.TicketDetailValue>
                            {lotteryObj.paymentType}
                        </Style.TicketDetailValue>
                    </Style.TicketDetail>
                    <Style.TicketDetail>
                        <Style.TicketDetailTitle>
                            Winner Announce Date 
                        </Style.TicketDetailTitle>
                        <Style.TicketDetailValue>
                        {transformDate(lotteryObj.winnerAnnounceDate? new Date() : lotteryObj.winnerAnnounceDate)}
                        </Style.TicketDetailValue>
                    </Style.TicketDetail>
                </Style.TicketDetails>
                <Style.TicketImage>
                    <Style.ImageContainer>
                        <h1>Ticket Number</h1>
                    </Style.ImageContainer>
                </Style.TicketImage>
            </Style.CollapseBody>}
        </Style.Wrapper>
        });

    return <Style.Values>{CollapseView}</Style.Values>
};

export default LotteryCollapse