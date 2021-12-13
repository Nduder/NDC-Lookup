import React from "react";

const NdcDisplay = (props) => {
  const { prefix, dash, suffix } = props.ndcModifiers;
  const ndcChanged = prefix + props.ndc.replace("-", dash) + suffix;

  return <td className="NDC">{ndcChanged}</td>;
};

export default NdcDisplay;
