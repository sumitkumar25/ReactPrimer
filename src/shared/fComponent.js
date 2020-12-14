import React from "react";
const TestFunctionalComponent = (props) => {
  const refrenceCallback = function () {
    console.log("reference callback");
  };
  return (
    <div>
      <div>Functional Component test</div>
      <section>
        <button
          onClick={() => {
            console.log("here");
          }}
        >
          Test
        </button>
        <button onClick={refrenceCallback}>Test Reference callback</button>
      </section>
    </div>
  );
};

export default TestFunctionalComponent;
