import {FC} from 'react';
import Navigation from '../../components/Navigation/DesktopNavigation';
import {transformDate} from '../../Utility/Utility'
import ImageComponent from '../../components/AuctionImage/AuctionImage';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {ButtonSizeVariant, ButtonType, ButtonVariant} from '../../Utility/InterFacesAndEnum';
import Button from '../../components/UI/Buttons/Button';
import SimilarProducts from '../AuctionSimilarProducts/SimilarProducts';

import {Wrapper, Container, ImageSection, DetailSection,
     Title, ProductType, Description, ProgressBarContainer, ProgressBarDetail,
      EngagedUrsers, TotalUsers, ActionDetail, TicketDetail, Label, Value, Line,
       SellerSectionTitle, SellerDetailWrapper ,ProfileImg, SellerDetail, SellerName,
       ItemDetails, ItemDetailLabel, SimilarProductContainer} from './StyledAuctionDetail'

const AuctionDetail:FC = () => {
    const detail = {
        images:["https://picsum.photos/450/420", "https://picsum.photos/450/420"],
    title: "Duke Bike 2020 Model",
    type: "Bike",
    totalUsers: 2000,
    engagedUsers: 1290,
    entryTicket: 10,
    drawDate: new Date(),
    id: 12,
    ownerName: "Sudhindra",
    imgUrl: "https://picsum.photos/450/420",
    streat: "Strat Name",
    city: "Kundapura",
    state: "Kerala",
    country: "India",
    }
    return <Wrapper>
        <Navigation />
        <Container>
            <ImageSection>
                <ImageComponent images={detail.images} />
            </ImageSection>
            <DetailSection>
                <Title>
                    {detail.title}
                </Title>
                <ProductType>
                    {detail.type}
                </ProductType>
                <Description>
                orem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits. Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits.
                 Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits. Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits.
                 Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits. Lorem Ipsum Dolor Simut Ignus, Fraks Logik Donor Lits.
                </Description>
                <ProgressBarContainer>
                    <ProgressBar completed={detail.engagedUsers} total={detail.totalUsers} />
                    <ProgressBarDetail>
                        <EngagedUrsers>
                            {detail.totalUsers - detail.engagedUsers} users to join
                        </EngagedUrsers>
                        <TotalUsers>
                            {detail.totalUsers} users
                        </TotalUsers>
                    </ProgressBarDetail>
                </ProgressBarContainer>
                <ActionDetail>
                <Button disabled={false} 
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
                    &#x24; {detail.entryTicket}
                    </Value>
                </TicketDetail>
                <TicketDetail>
                    <Label>
                    Draw Date:
                    </Label>
                    <Value>
                    {transformDate(detail.drawDate)}
                    </Value>
                </TicketDetail>
                <Line />
                <SellerSectionTitle>
                Seller Details:
                </SellerSectionTitle>
                <SellerDetailWrapper>
                    <ProfileImg src={detail.imgUrl} />
                    <SellerDetail>
                        <SellerName>
                            Sudhindra Pai
                        </SellerName>
                    </SellerDetail>
                </SellerDetailWrapper>
                <SellerSectionTitle>
                Item location:
                </SellerSectionTitle>
                <ItemDetails>
                    <ItemDetailLabel>
                    Street
                    </ItemDetailLabel>
                    <Value>
                        {detail.streat}
                    </Value>
                </ItemDetails>
                <ItemDetails>
                    <ItemDetailLabel>
                    City
                    </ItemDetailLabel>
                    <Value>
                        {detail.city}
                    </Value>
                </ItemDetails>
                <ItemDetails>
                    <ItemDetailLabel>
                    State
                    </ItemDetailLabel>
                    <Value>
                        {detail.state}
                    </Value>
                </ItemDetails>
                <ItemDetails>
                    <ItemDetailLabel>
                    Country
                    </ItemDetailLabel>
                    <Value>
                        {detail.country}
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