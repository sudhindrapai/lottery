import {FC, useEffect} from 'react';
import {Wrapper, Title} from './StyledSimilarProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import AuctionCards from '../../components/AuctionCards/AuctionCards';
import 'swiper/css';

import {useSelector, useDispatch} from 'react-redux';
import {getAuctionList, purchaseAuction, toggleAuctionPurchase} from '../../features/auctionList';
import {RootState} from '../../app/store';

import {RouterPath} from '../../routes'
import {useNavigate} from 'react-router-dom';

interface SimilarProductsProps {
  isTitleRequired?:boolean
}

const SimilarProducts:FC<SimilarProductsProps> = ({isTitleRequired}) => {
    const dispatch = useDispatch();
    const navigage = useNavigate();

    const auctionProducts = useSelector((state:RootState) => state.auction.auctionList);
    const isAuctionPurchased = useSelector((state:RootState) => state.auction.isAuctionPurchased);

    useEffect(() => {
      if (auctionProducts.length === 0) {
        dispatch(getAuctionList("auctionStatus=U"));
      }
    },[]);

    useEffect(() => {
      if (isAuctionPurchased === true) {
        navigage(RouterPath.lotteryPaymentSuccess);
      }
      return () => {
        dispatch(toggleAuctionPurchase({
          isPurchased: false
        }))
      }
    },[isAuctionPurchased])

    const buySimilarProduct = (id:number) => {
      dispatch(purchaseAuction({
        auctionId: id
    }));
    };

    return <Wrapper>
        {isTitleRequired && <Title>
        Similar Auctions
        </Title>}
        <Swiper
      spaceBetween={10}
      loop={true}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {auctionProducts.map((auctionItem) => {

let auctionUrl = auctionItem.imageUrls? auctionItem.imageUrls[0] : "https://picsum.photos/450/420";
                    let engagedUsersCount = auctionItem.noOfUsersJoined ? auctionItem.noOfUsersJoined : 0;

          return <SwiperSlide>
<AuctionCards auctionId={auctionItem.auctionId} 
imgUrl={auctionUrl} 
title={auctionItem.auctionTitle} 
auctionProduct={auctionItem.productType} 
totalUsers={1999} 
engagedUsers={engagedUsersCount} 
entryTicket={10} 
drawDate={auctionItem.auctionEndDate} 
onSelectBuy={buySimilarProduct} />
          </SwiperSlide>
      })}
    </Swiper>
    </Wrapper>
};

export  default SimilarProducts;