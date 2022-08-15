import {FC} from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {SlidingElement} from './StyledSwipper'

interface SlidingProps {
    sliderList:any
}

const Sliders:FC<SlidingProps> = ({sliderList}) => {

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {sliderList.map((sliderObj:any) => {
            return <SwiperSlide>
                <SlidingElement>
                <picture>
                    <source media="(min-width:650px)" srcSet={sliderObj.promotionWebBannerImages} />
                    <source media="(min-width:465px)" srcSet={sliderObj.promotionMobileBannerImages} />
                </picture>
                </SlidingElement>
            </SwiperSlide>
        })}
    </Swiper>
  );
};

export default Sliders