import React from "react";

const NdcDisplay = (props) => {
  const { prefix, dash, suffix } = props.ndcModifiers;
  const ndcChanged = props.ndc.replace("-", dash);
  return (
    <div>
      {prefix}
      {ndcChanged}
      {suffix}
    </div>
  );
};

export default NdcDisplay;
