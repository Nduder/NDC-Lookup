import React from "react";

const MedicationDisplay = ({ medInfo }) => {
  const infoDesired = [
    "brand_name",
    "generic_name",
    "dosage_form",
    "route",
    "labeler_name",
    "product_ndc",
  ];
  const infoDesiredElements = infoDesired.map((ele) => {
    return <td>{medInfo[ele]}</td>;
  });
  return <React.Fragment>{infoDesiredElements}</React.Fragment>;
};

export default MedicationDisplay;
