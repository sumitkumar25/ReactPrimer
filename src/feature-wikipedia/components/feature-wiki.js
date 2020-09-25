import React from "react";
import Accordion from "./../../shared/accordion";
import Search from "./../../shared/search";
const data = [
  {
    title: "title 1",
    content: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum",
  },
  {
    title: "title 2",
    content: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum",
  },
  {
    title: "title 3",
    content: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum",
  },
  {
    title: "title 4",
    content: "lorem ipsum,lorem ipsum,lorem ipsum,lorem ipsum",
  },
];
const FeatureWikipedia = () => {
  return (
    <div>
      <h2>Feature Wikipedia</h2>
      <Search></Search>
      <Accordion items={data} />

    </div>
  );
};
export default FeatureWikipedia;
