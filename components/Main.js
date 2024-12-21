import React, { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";
import ImageDisplay from "./ImageDisplay";
import ModelSelector from "./ModelSelector";
import ResultDisplay from "./ResultDisplay";
import Link from "next/link";

const Main = ({isMobile}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedModel, setSelectedModel] = useState("");
  const [results, setResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const models = ["MobileNet V3", "ResNet", "InceptionNet"];

  const handleRunInference = async () => {
    setIsLoading(true);
    if (!selectedImage || !selectedModel) {
      alert("Please select an image and a model.");
      return;
    }

    const formData = new FormData();
    console.log("yo",selectedImage)
    formData.append("image", selectedImage);
    formData.append("model", selectedModel);

    const response = await fetch("http://127.0.0.1:5000/inference", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResults(data.results);
    setIsLoading(false);
  };

  return (
    <div>
      <div style={{position:isMobile?"absolute":"absolute", left:isMobile?0:"",right:isMobile?"":0, top:isMobile?10:150, height:isMobile?"175px":"", width:isMobile?"":"500px"}}>
      <ImageDisplay image={selectedImage} />
      </div>
     
      <div className="slider-one__single-content">
       <div className="title-box"><h2>Deepfake Detection <br/></h2></div>
      <ImageUploader onImageSelect={setSelectedImage} />

      {selectedImage&&(
        <>
        <p style={{color:"White",fontSize:20, marginTop:20, fontWeight:"bold"}}>Select a Model :</p>
        <ModelSelector isMobile={isMobile} models={models} onSelectModel={setSelectedModel} />
        </>
        )}

              {selectedModel&&<div className={`btn-box`} style={{marginTop:20}} onClick={handleRunInference}>
                    <div className="thm-btn" style={{cursor:"pointer", backgroundColor:"#9523fd"}}>
                    {isLoading?'Loading...':'Run Inference'}
                        <span className="hover-btn hover-bx"></span>
                        <span className="hover-btn hover-bx2"></span>
                        <span className="hover-btn hover-bx3"></span>
                        <span className="hover-btn hover-bx4"></span>
                    </div> </div>}
                {results&&!isLoading&&<p style={{color:"White",fontSize:20, marginTop:20}}>{results}</p>}
      </div>
    </div>
  );
};

export default Main;
