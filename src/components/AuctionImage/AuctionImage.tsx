import {FC, useEffect, useState} from 'react';
import {Wrapper, MainImg, FeatureImage, ThumbnailImages, ThumbnailImage} from './StyledAuctionImage';


interface ImageObj {
    id: string,
    imgUrl: string,
    isSelected: boolean
}

interface AuctionImageProps{
    images: string[]
}

const AuctionImage:FC<AuctionImageProps> = ({images}) => {

    const [imagesArray, setImagesArray] = useState<[] | ImageObj[]>([]);
    const [FeatureImgUrl, setFeatuerImgurl] = useState("")

    useEffect(() => {
        if (imagesArray.length === 0) {
            let i = 0;
            let tempArray = [];
            for (let imgUrl of images) {
                i++;
                let tempObj = {
                    "id": `image_${i}`,
                    "imgUrl": imgUrl,
                    "isSelected": i === 1
                };
                tempArray.push(tempObj)
            }
            setImagesArray(tempArray);
        }
        setFeatuerImg()
    }, []);

    const setFeatuerImg = () => {
        if (imagesArray.length > 0) {
            let selectedObjArray = imagesArray.filter((imgObj) => {
                return imgObj.isSelected
            });
            console.log(selectedObjArray,"selectedObjArray")
            if (selectedObjArray.length > 0) {
                let obj = selectedObjArray[0];
                setFeatuerImgurl(obj.imgUrl)
            }
        }
    }

    if (FeatureImgUrl.length === 0) {
        setFeatuerImg()
    }

    return <Wrapper>
        <MainImg>
            <FeatureImage src={FeatureImgUrl} />
        </MainImg>
        <ThumbnailImages>
            {imagesArray.map((imgObj) =>{
                return <ThumbnailImage src={imgObj.imgUrl} />
            })}
        </ThumbnailImages>
    </Wrapper>
}

export default AuctionImage