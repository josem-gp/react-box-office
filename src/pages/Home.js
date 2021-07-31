import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((r) => r.json())
      .then((result) => {
        setResults(result);
      });
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div key={item.show.id}> {item.show.name} </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}></button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
