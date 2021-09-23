import React from "react";
import MedicationDisplay from "./MedicationDisplay";
import NdcDisplay from "./NdcDisplay";

const ResultTable = (props) => {
  let allResults = [];
  if (!props.searchResults.results) allResults = <div>No result</div>;
  else {
    allResults = props.searchResults.results.map((ele) => {
      return (
        <tr>
          <MedicationDisplay medInfo={ele} />
          <NdcDisplay ndc={ele.product_ndc} />
        </tr>
      );
    });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Proprietary Name</th>
            <th>Generic Name</th>
            <th>Dosage Form</th>
            <th>Route Name</th>
            <th>Company Name</th>
            <th>Ndc</th>
          </tr>
        </thead>
        <tbody>
          {allResults}
          <tr>
            <td>BrandNameosterone</td>
            <td>Genericosterone</td>
            <td>Pill</td>
            <td>IV</td>
            <td>SuperMegaPharmCorp</td>
            <td>12345-1234</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
