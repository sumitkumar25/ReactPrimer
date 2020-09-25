import React, { useState } from "react";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const titleClickHandler = (index) => {
    setActiveIndex(index);
  };
  const dataItemsJsx = props.items.map((accordionDatum, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={accordionDatum.title}>
        <div
          className={`${active} title`}
          onClick={() => titleClickHandler(index)}
        >
          <i className="dropdown icon"></i>
          {accordionDatum.title}
        </div>
        <div className={`${active} content`}>{accordionDatum.content}</div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {dataItemsJsx}
    </div>
  );
};
export default Accordion;
