import React from "react";

const ImageDisplay = ({ image }) => {
  return (
    <>
      {image&&<img style={{height:"100%", width:"100%"}} src={URL.createObjectURL(image)} alt="Selected" />}
    </>
  );
};

export default ImageDisplay;
