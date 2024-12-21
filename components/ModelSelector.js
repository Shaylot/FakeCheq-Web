import Link from "next/link";
import React, { useEffect, useState } from "react";

const ModelSelector = ({ models, onSelectModel, isMobile }) => {
    const [selectedModel, setSelectedModel] = useState(null);

    const handleModelClick = (model) => {
        setSelectedModel(model);
        onSelectModel(model);
    };

    return (
        <div style={{ display: "flex", flexDirection:isMobile?"column":"row", width: "100%", justifyContent: "space-between", flexWrap:"wrap" }}>
            {models.map((model) => (
                <div
                    className={`btn-box`}
                    key={model}
                    onClick={() => handleModelClick(model)}
                >
                    <div className="thm-btn"  style={{marginTop:20,backgroundColor:selectedModel==model?"#062E39":"#fd5523", cursor:"pointer"}}>
                        {model}
                        <span className="hover-btn hover-bx"></span>
                        <span className="hover-btn hover-bx2"></span>
                        <span className="hover-btn hover-bx3"></span>
                        <span className="hover-btn hover-bx4"></span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ModelSelector;
