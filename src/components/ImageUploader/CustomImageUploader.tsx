import {FC, useRef} from 'react';
import {Container, ProfileImage, UpdateImageText} from './StyledImageUploader';
import ProfileAvtarUrl from '../../assets/profileavtar.webp'

interface ImageUploaderProps {
    url:string,
    onSelectImage(obj: any):any
}

const CustomImageUploader:FC<ImageUploaderProps> = (props) => {
    const {url, onSelectImage} = props;
    let fileInputRef = useRef<HTMLInputElement>(null);

    const createUploadFileObj = (event:any) => {
        uploadFile(event.target.files)
    }

    const clickOnInput = () => {
          fileInputRef.current?.click()
      };

    const uploadFile = (files:any) => {
        const data = new FormData();
    
        let productimages = [];
        for (let i = 0; i < files.length; i++) {
          productimages.push(files[i]);
          let fileObj = files[i];
          if (fileObj !== undefined) {
            let updatedFileName = fileObj.name.split(" ").join("_");
            data.append(updatedFileName, fileObj, updatedFileName);
          }
        }
        data.append("file", data as unknown as Blob);
    // Fixme
    onSelectImage(data)
      }

    return <Container>
        <ProfileImage src={ProfileAvtarUrl} />
        <input
          style={{ display: "none" }}
          id={"imageFileInput"}
          ref={fileInputRef}
          type={"file"}
          onChange={(event) => {
            createUploadFileObj(event);
          }}
          accept="image/jpeg, image/png, image/jpg, image/tiff"
        />
    <UpdateImageText onClick={clickOnInput}>
        Update Image
    </UpdateImageText>
    </Container>
}

export default CustomImageUploader