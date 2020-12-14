import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, onSelectedChange, selected, label }) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const ref = useRef();
  const onBodyClick = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      return;
    }
    setOptionsVisible(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  const renderedOptions = options
    .filter((option) => option !== selected)
    .map((option) => {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => {
            onSelectedChange(option);
          }}
        >
          {option.label}
        </div>
      );
    });
  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label || "Select"}</label>
        <div
          onClick={() => {
            setOptionsVisible(!optionsVisible);
          }}
          className={`ui selection dropdown ${
            optionsVisible ? "visible active" : ""
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${optionsVisible ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
