import React from "react";

const ResultDisplay = ({ results }) => {
  return (
    <div>
      <h3>Results</h3>
      <pre>{results}</pre>
    </div>
  );
};

export default ResultDisplay;
