import React, { useState } from "react";
import Dropdown from "../shared/dropdown";
import TranslatorConvertor from "./translatorConvertor";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
  { label: "Hindi", value: "hi" },
  { label: "Africans", value: "af" },
  { label: "Arabic", value: "ar" },
];
const Translator = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [userText, setUserText] = useState("");
  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          value={userText}
          onChange={(e) => {
              console.log
            setUserText(e.target.value);
          }}
        />
      </div>
      <div>
        <Dropdown
          options={options}
          selected={selectedLanguage}
          onSelectedChange={setSelectedLanguage}
          label="Select a language"
        ></Dropdown>
      </div>
      <TranslatorConvertor
        language={selectedLanguage}
        text={userText}
      ></TranslatorConvertor>
    </React.Fragment>
  );
};
export default Translator;
