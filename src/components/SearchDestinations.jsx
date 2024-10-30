import { useNavigate } from "react-router-dom";
import Select from "react-select";

const SearchDestinations = () => {
  const navigete = useNavigate();
  const monthOptions = [
    { value: "january", label: "January" },
    { value: "february", label: "February" },
    { value: "march", label: "March" },
    { value: "april", label: "April" },
    { value: "may", label: "May" },
    { value: "june", label: "June" },
    { value: "july", label: "July" },
    { value: "august", label: "August" },
    { value: "september", label: "September" },
    { value: "october", label: "October" },
    { value: "november", label: "November" },
    { value: "december", label: "December" },
  ];
  const travelTypeOptions = [
    { value: "domestic", label: "Domestic" },
    { value: "international", label: "International" },
    { value: "adventure", label: "Adventure" },
    { value: "honeymoon", label: "Honeymoon" },
    { value: "family", label: "Family" },
    { value: "business", label: "Business" },
    { value: "religious", label: "Religious" },
    { value: "weekend_getaway", label: "Weekend Getaway" },
  ];
  const customStyles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      backgroundColor: "transparent",

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
  const customComponents = {
    DropdownIndicator: () => null,
    IndicatorSeparator: () => null,
  };
  return (
    <div className="container row p-5  p-lg-0 ps-lg-3 align-items-center search-destination ">
      <div className="col-lg-3 d-flex justify-content-between align-items-center p-2 pe-0">
        <img src="/images/icons/compass.svg" alt="compass" />
        <input
          className="form-control ms-3 border-0 bg-transparent w-100"
          type="text"
          name=""
          placeholder="Where to ?"
        />
      </div>
      <div className="col-lg-3 pointer d-flex justify-content-between align-items-center p-2 ps-0">
        <img src="/images/icons/calendar.svg" alt="calendar" />
        <Select
          className="form-select border-0 bg-transparent"
          options={monthOptions}
          placeholder="Month"
          styles={customStyles}
          components={customComponents}
        />
      </div>
      <div className="col-lg-3 pointer d-flex justify-content-between align-items-center p-2 ps-0">
        <img src="/images/icons/pin.svg" alt="travel type" />
        <Select
          className="form-select border-0 bg-transparent"
          options={travelTypeOptions}
          placeholder="Travel Type"
          styles={customStyles}
          components={customComponents}
        />
      </div>
      <div className="col-lg-2 text-right d-flex  px-0">
        <div className="w-100">
          <button
            onClick={() => navigete("/destinations")}
            className="btn btn-primary w-100 travel-type-btn btn-lg rounded-0 border-0 d-block"
          >
            Travel Type
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchDestinations;
