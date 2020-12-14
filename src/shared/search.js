import React, { useState, useEffect } from "react";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("programming");
  const [results, setResults] = useState([]);
  const displayedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
        </div>
      </div>
    );
  });
  useEffect(() => {
    const search = async () => {
      const queryParameters = {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: searchTerm,
      };
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?${new URLSearchParams(
          queryParameters
        )}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        let data = await response.json();
        if (data && data.query && data.query.search) {
          setResults(data.query.search);
        }
      }
    };
    if (searchTerm && !results.length) {
      search();
    } else {
      const timer = setTimeout(() => {
        if (searchTerm && searchTerm.trim()) {
          search();
        }
      }, 1000);
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }
  }, [searchTerm]);
  return (
    <div>
      <form>
        <div className="ui search">
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search Wikipedia"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
      <div className="results ui celled list">{displayedResults}</div>
    </div>
  );
};
export default Search;
