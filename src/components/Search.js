import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [ndcResults, setNdcResults] = useState("");

  useEffect(() => {
    search(term);
    console.log(ndcResults);
    console.log(term);
  }, [term]);

  const search = (query) => {
    fetch(`https://api.fda.gov/drug/ndc.json?search="${query}"&limit=5`)
      .then((data) => {
        return data.json();
      })
      .then((data) => setNdcResults(data));
  };
  const ndcNumbers = (() => {
    if (ndcResults.results !== undefined) {
      return <div>{ndcResults.results[0].product_ndc}</div>;
    } else {
      return <div>no query submitted</div>;
    }
  })();

  return (
    <div>
      <label>NDC search</label>
      <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
      {ndcNumbers}
    </div>
  );
};

export default Search;
