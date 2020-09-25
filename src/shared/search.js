import React, { useState, useEffect } from "react";
import axios from 'axios';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {}, [searchTerm]);
  return (
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
        <div className="results"></div>
      </div>
    </form>
  );
};
export default Search;
