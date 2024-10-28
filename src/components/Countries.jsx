import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Select from "react-select";

const Countries = () => {
  const { data, loading } = useFetch("https://restcountries.com/v3.1/all");
  // Sort languages alphabetically by name
  const sortedCountries = data.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
  const countryOptions = sortedCountries.map((country) => ({
    value: country.cca2,
    label: (
      <div>
        <img
          src={country.flags.svg}
          alt={country.name.common}
          style={{ width: "20px", marginRight: "10px" }}
        />
        {country.name.common}
      </div>
    ),
  }));
  // Default selections
  const [selectedCountry, setSelectedCountry] = useState({
    value: "BD",
    label: (
      <div>
        <img
          src="https://flagcdn.com/w320/bd.png"
          style={{ width: "20px", marginRight: "10px" }}
        />
        Bangladesh
      </div>
    ),
  });
  const customStyles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",

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
    <div className="z-2 position-relative">
      {loading && (
        <img
          className="loader"
          style={{ left: "0" }}
          src={"images/loader.gif"}
        />
      )}

      <Select
        value={selectedCountry}
        onChange={setSelectedCountry}
        options={countryOptions}
        styles={customStyles}
      />
    </div>
  );
};

export default Countries;
