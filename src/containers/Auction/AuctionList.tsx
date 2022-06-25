import {FC, Fragment, useEffect} from 'react';
import DesktopNavigation from '../../components/Navigation/DesktopNavigation';
import {ButtonSizeVariant, ButtonType, ButtonVariant,AppButtonType} from '../../Utility/InterFacesAndEnum';
import Button from '../../components/UI/Buttons/Button';
import AuctionItem from '../../components/AuctionCards/AuctionCards';
import {getAuctionList} from '../../features/auctionList';
import {useSelector, useDispatch} from 'react-redux';

import {useNavigate} from 'react-router-dom';
import {RouterPath} from '../../routes'
import {Wrapper, BannerSection,BannerContainer, CardContainer,
     CardFooter, CardDescription, CardTitle, CardProduct, CardAction, AuctionList,
      AuctionListItem, ListTitle, ActionSection} from './StyledAuctionList'
import { RootState } from '../../app/store';
const Auction:FC = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const auctionList = useSelector((state:RootState) => state.auction.auctionList);

    const buyTickets = (id: number) => {};

    const redirectToView = (path: string) => {
        navigate(path);
    }

    useEffect(() => {
        dispatch(getAuctionList("auctionStatus=U"))
    },[])

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
                        appBtnType={AppButtonType.primaryBtn}
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
            <ListTitle>
                showing {auctionList.length} auctions
            </ListTitle>
            <ActionSection>
            <Button disabled={false} 
                        appBtnType={AppButtonType.primaryBtn}
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.small} 
        clicked={() => {redirectToView(RouterPath.createAuction)}} >
            + List your product in auction
        </Button>
            </ActionSection>
            <AuctionList>
                {auctionList.map((auctionItem) => {
                    let auctionUrl = auctionItem.imageUrls? auctionItem.imageUrls[0] : "https://picsum.photos/450/420";
                    let engagedUsersCount = auctionItem.noOfUsersJoined ? auctionItem.noOfUsersJoined : 0
                    return <AuctionListItem>
                        <AuctionItem 
                    auctionId={auctionItem.auctionId} 
                    imgUrl={auctionUrl} 
                    title={auctionItem.auctionTitle} 
                    totalUsers={100} 
                    engagedUsers={engagedUsersCount} 
                    auctionProduct={auctionItem.productType} 
                    entryTicket={auctionItem.auctionPrice} 
                    drawDate={auctionItem.auctionEndDate} 
                    onSelectBuy={buyTickets} />
                    </AuctionListItem>
                })}
            </AuctionList>
    </Wrapper></Fragment>
};

export default Auction