import {FC} from 'react';
import {transformDate} from '../../Utility/Utility';
import {AppButtonType, ButtonSizeVariant, ButtonType, ButtonVariant} from '../../Utility/InterFacesAndEnum';
import Button from '../UI/Buttons/Button';
import AuctionBuyBtn from '../AuctionBuyButton/AuctionBuyButton'
import ProgressBar from '../ProgressBar/ProgressBar';
import {Wrapper,DetailWrapper, AuctionImage, Title, AuctinProductType, ProgressBarContainer,
     TicketDetailWrapper, Detail, DetailTitle, Value, Action} from './StyledAuctionCards';

import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../routes';

interface AuctionCardsProps {
    auctionObj:any
    auctionId: number
    imgUrl: string,
    title: string,
    auctionProduct: string,
    totalUsers:number,
    engagedUsers:number,
    entryTicket: number,
    drawDate: Date | string,
    onSelectBuy(id: number):void
}

const AuctionCards:FC<AuctionCardsProps> = (props) => {
    const navigate = useNavigate();
    const {auctionId,imgUrl, title, auctionProduct, totalUsers, engagedUsers, entryTicket, drawDate, onSelectBuy, auctionObj} = props;

    const redirectToMoreDetail = (auctionId:number) => {
        navigate(`/auction/detail/${auctionId}`);
    };

    return <Wrapper>
        <AuctionImage src={imgUrl} />
        <DetailWrapper>
        <Title>
            {title}
        </Title>
        <AuctinProductType>
            {auctionProduct}
        </AuctinProductType>
        <ProgressBarContainer>
        <ProgressBar total={totalUsers} completed={engagedUsers} />
        </ProgressBarContainer>
        <TicketDetailWrapper>
            <Detail>
                <DetailTitle>
                Entry Ticket
                </DetailTitle>
                <Value>
                &#x24; {entryTicket}
                </Value>
            </Detail>
            <Detail>
            <DetailTitle>
                Draw Date
                </DetailTitle>
                <Value>
                    {transformDate(new Date(drawDate)).toString()}
                </Value>
            </Detail>
        </TicketDetailWrapper>
        <Action>
        <Button disabled={false} 
        appBtnType = {AppButtonType.primaryBordered}
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={() => {redirectToMoreDetail(auctionId)}} >
            More Detail
        </Button>
        <AuctionBuyBtn auctionObj={auctionObj} />
        </Action>
        </DetailWrapper>
    </Wrapper>
};

export default AuctionCards