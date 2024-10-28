import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Select from "react-select";

const Languages = () => {
  const { data, loading } = useFetch("https://libretranslate.com/languages");
  // Sort languages alphabetically by name
  const sortedLang = data.sort((a, b) => a.name.localeCompare(b.name));

  const languageOptions = sortedLang.map((lang) => ({
    value: lang.code,
    label: lang.name,
  }));
  const [selectedLanguage, setSelectedLanguage] = useState({
    value: "en",
    label: "English",
  });
  const customStyles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      padding: 0,
      borderRight: "none",
      "&:hover": {
        border: 0,
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      border: "none",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    valueContainer: (base) => ({
      ...base,
    }),
    input: (base) => ({
      ...base,
    }),
  };

  return (
    <div className=" z-3 position-relative">
      {loading && <img className="loader" src={"images/loader.gif"} />}

      <Select
        value={selectedLanguage}
        onChange={setSelectedLanguage}
        options={languageOptions}
        styles={customStyles}
      />
    </div>
  );
};

export default Languages;
