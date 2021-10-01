import React, { useEffect, useState } from "react";
import ResultTable from "./ResultTable.js";
import axios from "axios";
import NdcUserModifiers from "./NdcUserModifiers.js";

const Search = () => {
  const [term, setTerm] = useState("");
  const [ndcResults, setNdcResults] = useState([]);
  const [ndcModifiers, setNdcModifiers] = useState({
    prefix: "",
    dash: "",
    suffix: "",
  });

  useEffect(() => {
    //runs when term changes
    const search = (query) => {
      // ndc api request
      fetch(`https://api.fda.gov/drug/ndc.json?search="${query}"&limit=5`)
        .then((data) => {
          return data.json();
        })
        .then((data) => setNdcResults(data));
    };
    search(term);
  }, [term]);

  return (
    <div>
      <label>NDC search</label>
      <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
      <NdcUserModifiers
        modifiers={ndcModifiers}
        setModifiers={setNdcModifiers}
      />
      <ResultTable searchResults={ndcResults} ndcModifiers={ndcModifiers} />
    </div>
  );
};

export default Search;
