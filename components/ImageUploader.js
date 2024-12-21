import React, { useRef, useState } from "react";

const ImageUploader = ({ onImageSelect }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file.name);
    if (file) {
      onImageSelect(file);
    }
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
      if (fileInputRef.current) {
          fileInputRef.current.click();
      }
  };

  return (
    <div>
     <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }} // Hide the input
            />
            <div className="btn-box">
                <button className="thm-btn" onClick={handleButtonClick}>
                    Upload Image
                    <i className="icon-right-arrow21"></i>
                    <span className="hover-btn hover-bx"></span>
                    <span className="hover-btn hover-bx2"></span>
                    <span className="hover-btn hover-bx3"></span>
                    <span className="hover-btn hover-bx4"></span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default ImageUploader;
