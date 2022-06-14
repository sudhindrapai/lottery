import {FC} from 'react';
import {Wrapper, Title} from './StyledSimilarProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import AuctionCards from '../../components/AuctionCards/AuctionCards';
import 'swiper/css';

import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../app/store';

interface SimilarProductsProps {
  isTitleRequired?:boolean
}

const SimilarProducts:FC<SimilarProductsProps> = ({isTitleRequired}) => {
    const dispatch = useDispatch();
    const auctionProducts = useSelector((state:RootState) => state.auction.auctionList);

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
      {auctionProducts.map((product) => {
          return <SwiperSlide>
<AuctionCards auctionId={product.id} 
imgUrl={product.imgUrl} 
title={product.title} 
auctionProduct={product.type} 
totalUsers={product.totalUsers} 
engagedUsers={product.engagedUsers} 
entryTicket={product.entryTicket} 
drawDate={product.drawDate} 
onSelectBuy={buySimilarProduct} />
          </SwiperSlide>
      })}
    </Swiper>
    </Wrapper>
};

export  default SimilarProducts;