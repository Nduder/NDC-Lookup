import React from "react";
import MedicationDisplay from "./MedicationDisplay";
import NdcDisplay from "./NdcDisplay";

const ResultTable = (props) => {
  let allResults = [];
  if (!props.searchResults.results)
    return (allResults = <div className="No-results">No results</div>);
  else {
    allResults = props.searchResults.results.map((ele) => {
      return (
        <tr className="results-table">
          <NdcDisplay
            ndc={ele.product_ndc}
            ndcModifiers={props.resultsModifiers}
          />
          <MedicationDisplay medInfo={ele} />
        </tr>
      );
    });
  }

  return (
    <div className="tables-container">
      <table className="all-table">
        <thead className="table-head">
          <th>NDC</th>
          <th>Proprietary Name</th>
          <th>Generic Name</th>
          <th>Dose Form</th>
          <th>Route Name</th>
          <th>Company Name</th>
          <th>Original</th>
        </thead>
        <tbody>{allResults}</tbody>
      </table>
    </div>
  );
};

export default ResultTable;
