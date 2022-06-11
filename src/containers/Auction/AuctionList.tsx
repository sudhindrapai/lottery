import {FC, Fragment} from 'react';
import DesktopNavigation from '../../components/Navigation/DesktopNavigation';
import {ButtonSizeVariant, ButtonType, ButtonVariant} from '../../Utility/InterFacesAndEnum';
import Button from '../../components/UI/Buttons/Button';
import AuctionItem from '../../components/AuctionCards/AuctionCards';
import {useSelector, useDispatch} from 'react-redux';

import {Wrapper, BannerSection,BannerContainer, CardContainer,
     CardFooter, CardDescription, CardTitle, CardProduct, CardAction, AuctionList, AuctionListItem} from './StyledAuctionList'
import { RootState } from '../../app/store';
const Auction = () => {

    const dispatch = useDispatch();
    
    const auctionList = useSelector((state:RootState) => state.auction.auctionList);

    const buyTickets = (id: number) => {};

    return <Fragment>
        <DesktopNavigation />
        <Wrapper>
            <BannerSection>
                <BannerContainer>
                    <img src={"https://picsum.photos/450/520"} />
                </BannerContainer>
                <BannerContainer>
                    <CardContainer>
                    <img src={"https://picsum.photos/450/420"} />
                    <CardFooter>
                        <CardDescription>
                            <CardTitle>
                            Modern dream house with pool by the sea
                            </CardTitle>
                            <CardProduct>
                            House
                            </CardProduct>
                        </CardDescription>
                        <CardAction>
                        <Button disabled={false} 
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} clicked={() => {buyTickets(1)}} >
            BUY TICKETS
        </Button>
                        </CardAction>
                    </CardFooter>
                    </CardContainer>
                </BannerContainer>
                <BannerContainer>
                <img src={"https://picsum.photos/450/520"} />
                </BannerContainer>
            </BannerSection>
            <AuctionList>
                {auctionList.map((auctionItem) => {
                    return <AuctionListItem><AuctionItem 
                    auctionId={auctionItem.id} 
                    imgUrl={auctionItem.images[0]} 
                    title={auctionItem.title} 
                    totalUsers={auctionItem.totalUsers} 
                    engagedUsers={auctionItem.engagedUsers} 
                    auctionProduct={auctionItem.type} 
                    entryTicket={auctionItem.entryTicket} 
                    drawDate={auctionItem.drawDate} 
                    onSelectBuy={buyTickets} />
                    </AuctionListItem>
                })}
            </AuctionList>
    </Wrapper></Fragment>
};

export default Auction