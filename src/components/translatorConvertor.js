import React, { useEffect, useState } from "react";
const TranslatorConvertor = (language, text) => {
  useEffect(() => {
    // setTranslatedText(text);
    console.log(text);
    return () => {};
  }, [language, text]);
  const [translatedText, setTranslatedText] = useState("");
  return (
    <React.Fragment>
      <h2>Translated</h2>
      <p>{translatedText}</p>
    </React.Fragment>
  );
};

export default TranslatorConvertor;
