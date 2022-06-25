import {FC, useEffect} from 'react';
import Navigation from '../../components/Navigation/DesktopNavigation';
import {transformDate} from '../../Utility/Utility'
import ImageComponent from '../../components/AuctionImage/AuctionImage';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {ButtonSizeVariant, ButtonType, ButtonVariant,AppButtonType} from '../../Utility/InterFacesAndEnum';
import Button from '../../components/UI/Buttons/Button';
import SimilarProducts from '../AuctionSimilarProducts/SimilarProducts';

import {useSelector, useDispatch} from 'react-redux';
import {getAuctionDetail} from '../../features/auctionList';
import {RootState} from '../../app/store';
import {RouterPath} from '../../routes';
import {useParams, useNavigate} from 'react-router-dom';

import {Wrapper, Container, ImageSection, DetailSection,
     Title, ProductType, Description, ProgressBarContainer, ProgressBarDetail,
      EngagedUrsers, TotalUsers, ActionDetail, TicketDetail, Label, Value, Line,
       SellerSectionTitle, SellerDetailWrapper ,ProfileImg, SellerDetail, SellerName,
       ItemDetails, ItemDetailLabel, SimilarProductContainer, BreadCrumb, BreadCrumbItem} from './StyledAuctionDetail'

const AuctionDetail:FC = () => {
    
    const {auctionId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let auctionDetail = useSelector((state:RootState) => state.auction.auctionDetail);

    useEffect(() => {
        if (auctionId !== null && auctionId !== undefined) {
            dispatch(getAuctionDetail(auctionId.toString()));
        }
    },[]);

    const redirectToView = (path:string) => {
        navigate(path)
    }

    return <Wrapper>
        <Navigation />
        <BreadCrumb>
        <BreadCrumbItem onClick={() => {redirectToView(RouterPath.root)}}>Home</BreadCrumbItem> / 
        <BreadCrumbItem onClick={() => {redirectToView(RouterPath.auctionList)}} >Auction</BreadCrumbItem> / 
        <BreadCrumbItem onClick={() => {redirectToView(RouterPath.createAuction)}} >{auctionDetail.auctionTitle}</BreadCrumbItem>
        </BreadCrumb>
        <Container>
            <ImageSection>
                <ImageComponent images={auctionDetail.auctionImageUrls} />
            </ImageSection>
            <DetailSection>
                <Title>
                    {auctionDetail.auctionTitle}
                </Title>
                <ProductType>
                    {auctionDetail.auctionType}
                </ProductType>
                <Description>
                {auctionDetail.auctionDesc}
                </Description>
                <ProgressBarContainer>
                    <ProgressBar completed={auctionDetail.engagedUsers} total={auctionDetail.totalUsers} />
                    <ProgressBarDetail>
                        <EngagedUrsers>
                            {10 - auctionDetail.engagedUsers} users to join
                        </EngagedUrsers>
                        <TotalUsers>
                            {100} users
                        </TotalUsers>
                    </ProgressBarDetail>
                </ProgressBarContainer>
                <ActionDetail>
                <Button disabled={false} 
                appBtnType={AppButtonType.primaryBtn}
        fullWidth={false} 
        variant={ButtonVariant.contained} 
        type={ButtonType.default} size={ButtonSizeVariant.large} clicked={() => {}} >
            BUY TICKETS
        </Button>
                </ActionDetail>
                <TicketDetail>
                    <Label>
                    Entry Ticket:
                    </Label>
                    <Value>
                    &#x24; {10}
                    </Value>
                </TicketDetail>
                <TicketDetail>
                    <Label>
                    Draw Date:
                    </Label>
                    <Value>
                    {transformDate(auctionDetail.auctionEndDate)}
                    </Value>
                </TicketDetail>
                <Line />
                <SellerSectionTitle>
                Seller Details:
                </SellerSectionTitle>
                <SellerDetailWrapper>
                    <ProfileImg src={""} />
                    <SellerDetail>
                        <SellerName>
                            {auctionDetail.userName}
                        </SellerName>
                    </SellerDetail>
                </SellerDetailWrapper>
                <SellerSectionTitle>
                Item location:
                </SellerSectionTitle>
                <ItemDetails>
                    <ItemDetailLabel>
                    State
                    </ItemDetailLabel>
                    <Value>
                        {auctionDetail.state}
                    </Value>
                </ItemDetails>
                <ItemDetails>
                    <ItemDetailLabel>
                    City
                    </ItemDetailLabel>
                    <Value>
                        {auctionDetail.city}
                    </Value>
                </ItemDetails>
                <ItemDetails>
                    <ItemDetailLabel>
                    Country
                    </ItemDetailLabel>
                    <Value>
                        {auctionDetail.country}
                    </Value>
                </ItemDetails>
            </DetailSection>
        </Container>
        <SimilarProductContainer>
        <SimilarProducts isTitleRequired={true} />
        </SimilarProductContainer>
    </Wrapper>
};

export default AuctionDetail