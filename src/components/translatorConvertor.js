import React, { useEffect, useState } from "react";
const TranslatorConvertor = ({ language, text }) => {
  useEffect(() => {
    const translate = async function () {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?q=${text}&target=${language.value}&key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`,
        {
          method: "post",
        }
      );
      const {data} = await response.json();
      setTranslatedText(data.translations[0].translatedText);
    };
    if (language && text) {
      translate();
    }
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
