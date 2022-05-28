import { useState, useRef } from "react";
import classes from "./ImageUploader.module.css";

import ProfileAvtarUrl from '../../assets/profileavtar.webp'

const FileUploader = (props) => {
  let fileInputRef = useRef(null);

  let loader = (
    "loading"
  );

  const [imageListArray, setImageListArray] = useState([]);

  const setUploadedFileObj = (event) => {
    setImageListArray(event.target.files);
    uploadFile(event.target.files);
  };

  const uploadFile = (files) => {
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
    data.append("file", data);
// Fixme
    props.onSelectFile(files, props.flag);
  };

  const clickOnInput = () => {
    fileInputRef.current.click();
  };

  const removeImgRequest = () => {
    // Fixme
    props.onClickDelete();
  };

  // Fixme
  const isImagUrlExists = props.ImgURl !== undefined && props.ImgURl.length > 0;

  let view = null;

  if (!isImagUrlExists) {
    view = (
      <div className={classes.Container}>
        <div className={classes.UploadIcon} onClick={clickOnInput}>
          {/* Fixme */}
          {props.isLoading ? loader : "Load"}
        </div>
        <input
          style={{ display: "none" }}
          id={"imageFileInput"}
          ref={fileInputRef}
          type={"file"}
          onChange={(event) => {
            setUploadedFileObj(event);
          }}
          accept="image/jpeg, image/png, image/jpg, image/tiff"
        />
      </div>
    );
  } else {
    view = (
      <div className={classes.ImgContainer}>
        {/* Fixme */}
        {props.isDeleteImgOptionRequired === true && (
          <div onClick={removeImgRequest} className={classes.DeleteIcon}>
            D
          </div>
        )}
        <input
          style={{ display: "none" }}
          id={"imageFileInput"}
          ref={fileInputRef}
          type={"file"}
          onChange={(event) => {
            setUploadedFileObj(event);
          }}
          accept="image/jpeg, image/png, image/jpg, image/tiff"
        />
        <img
          src={props.ImgURl}
          alt={"uploaded"}
          className={classes.UploadedImage}
        />
      </div>
    );
  }

  return view;
};

export default FileUploader;
