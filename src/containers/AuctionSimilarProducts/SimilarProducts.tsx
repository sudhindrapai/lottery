import {FC, useEffect} from 'react';
import {Wrapper, Title} from './StyledSimilarProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import AuctionCards from '../../components/AuctionCards/AuctionCards';
import 'swiper/css';

import {useSelector, useDispatch} from 'react-redux';
import {getAuctionList} from '../../features/auctionList';
import {RootState} from '../../app/store';

interface SimilarProductsProps {
  isTitleRequired?:boolean
}

const SimilarProducts:FC<SimilarProductsProps> = ({isTitleRequired}) => {
    const dispatch = useDispatch();
    const auctionProducts = useSelector((state:RootState) => state.auction.auctionList);

    useEffect(() => {
      if (auctionProducts.length === 0) {
        dispatch(getAuctionList("auctionStatus=U"));
      }
    },[])

    const buySimilarProduct = (id:number) => {};

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