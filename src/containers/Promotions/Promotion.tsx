import {FC, useEffect, useState} from 'react';
import Slider from '../../components/Swipper/Swipper';
import {Wrapper,SliderWrapper,StaticImgSection} from './StyledPromotion';

import {RootState} from '../../app/store';
import {useSelector,useDispatch} from 'react-redux'
import {getPromotionData, setPromotionResponse, toggleLoadingState} from '../../features/promotion'

interface PromotionProps {
    pageName:string
}

const Promotion:FC<PromotionProps> = ({pageName}) => {
    const dispatch = useDispatch();

    const homeResponse = useSelector((state:RootState) => state.promotion.home);
    const lotteryResponse = useSelector((state:RootState) => state.promotion.lottery);
    const auctionResponse = useSelector((state:RootState) => state.promotion.auction);
    const isLoading = useSelector((state:RootState) => state.promotion.isLoading)

    const [viewResponse, setViewResponse] = useState([]);
    const [isResponseUpdated, setStatus] = useState(false);

    useEffect(() => {
        dispatch(getPromotionData(pageName));
        return () => {
            dispatch(setPromotionResponse({
                pageName: pageName,
                data:[]
            }));
            dispatch(toggleLoadingState({isLoading:true}))
        }
    },[]);

    if (homeResponse.length > 0 || lotteryResponse.length > 0 || auctionResponse.length > 0) {
        if (isResponseUpdated === false && isLoading === false) {
            if (pageName === "HOME") {
                setViewResponse(homeResponse);
                setStatus(true);
                dispatch(toggleLoadingState({isLoading:true}))
            } else if (pageName === "LOTTERY") {
                setViewResponse(lotteryResponse);
                setStatus(true);
                dispatch(toggleLoadingState({isLoading:true}))
            } else if (pageName === "AUCTION") {
                setViewResponse(auctionResponse);
                setStatus(true);
                dispatch(toggleLoadingState({isLoading:true}))
            }
        }
    }

    let slidingView = <></>;

    let staticImgView = <></>;

    if (viewResponse.length > 0) {
        let slidingImages = viewResponse.filter((promotionObj:any) => {
            return promotionObj.promotionType === "SLIDER";
        });
        let staticImages = viewResponse.filter((promotionObj: any) => {
            return promotionObj.promotionType === "STATIC";
        });

        if (slidingImages.length > 0) {
            slidingView = <SliderWrapper><Slider sliderList={slidingImages} /></SliderWrapper>
        }
        if (staticImages.length > 0) {
            let staticImgObj:any = staticImages[0];
            staticImgView = <StaticImgSection>
                <picture>
                    <source media="(min-width:650px)" srcSet={staticImgObj.promotionWebBannerImages} />
                    <source media="(min-width:465px)" srcSet={staticImgObj.promotionMobileBannerImages} />
                </picture>
            </StaticImgSection>
        }
    }

    let view = <div></div>

    if (viewResponse.length > 0) {
        view = <Wrapper>
        {slidingView}
        {staticImgView}
    </Wrapper>
    }

    return view
};

export default Promotion