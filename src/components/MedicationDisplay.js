import React from "react";

const MedicationDisplay = ({ medInfo }) => {
  return (
    <React.Fragment>
      <td>{medInfo.brand_name}</td>
      <td>{medInfo.generic_name}</td>
      <td>{medInfo.dosage_form}</td>
      <td>{medInfo.route}</td>
      <td>{medInfo.labeler_name}</td>
      <td>{medInfo.product_ndc}</td>
    </React.Fragment>
  );
};

export default MedicationDisplay;
