import React, { useEffect, useState } from "react";
import ResultTable from "./ResultTable.js";
import NdcUserModifiers from "./NdcUserModifiers.js";
import ScaleButton from "./Scale.js";

const Search = () => {
  const [term, setTerm] = useState("");
  const [ndcResults, setNdcResults] = useState("[]");
  const [ndcModifiers, setNdcModifiers] = useState({
    prefix: "",
    dash: "",
    suffix: "",
  });

  const searchPlaceholder =
    "Search - NDC #, Name, Active Ingredient, RxCUI, Uses, Form, Route, App Number or Company";

  useEffect(() => {
    const search = async () => {
      fetch(`https://api.fda.gov/drug/ndc.json?search="${term}"&limit=100`)
        .then((data) => {
          return data.json();
        })
        .then((data) => setNdcResults(data));
    };

    if (term && !ndcResults) {
      search();
    } else {
      const setTimeOutCleanupId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 250);
      return () => {
        clearTimeout(setTimeOutCleanupId);
      };
    }
  }, [term]);

  const copyNdcResults = () => {
    if (ndcResults.error) return;
    else {
      const { prefix, dash, suffix } = ndcModifiers;
      let modifiedNdc = ndcResults.results.map((ele) => {
        return prefix + ele.product_ndc.replace("-", dash) + suffix;
      });
      modifiedNdc = modifiedNdc.join();
      navigator.clipboard.writeText(`${modifiedNdc}`);
      console.log(`Copied Results for ${term}!`);
    }
  };

  return (
    <div className="search-container">
      <div className="search-label">
        <div>NDC Tool</div>

        <input
          placeholder={searchPlaceholder}
          className="search-input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        ></input>
      </div>

      <NdcUserModifiers
        modifiers={ndcModifiers}
        setModifiers={setNdcModifiers}
      />
      <a className="btn btn-copy" onClick={() => copyNdcResults()}>
        Copy results
      </a>
      <ResultTable searchResults={ndcResults} resultsModifiers={ndcModifiers} />
    </div>
  );
};

export default Search;
