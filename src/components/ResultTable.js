import React from "react";

const ResultTable = (props) => {
  let allResults = [];
  if (!props.searchResults.results) allResults = <div>No result</div>;
  else {
    allResults = props.searchResults.results.map((ele) => {
      return (
        <tr>
          <td>{ele.brand_name}</td>
          <td>{ele.generic_name}</td>
          <td>{ele.dosage_form}</td>
          <td>{ele.route}</td>
          <td>{ele.labeler_name}</td>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
