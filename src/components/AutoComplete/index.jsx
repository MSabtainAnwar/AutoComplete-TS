import React, { useState } from "react";

interface AutoCompelteProps {
  countryData: string[];
}

function AutoComplete(props: AutoCompelteProps) {
  // Hooks
  const [search, setSearch] = useState("");
  const [haveSearch, setHaveSearch] = useState(true);

  //   Function-for-search-countries
  const changeHandler = (e) => {
    setHaveSearch(true);
    setSearch(e.target.value);
  };

  // Function-for-select-country
  const selectedCountry = (country) => {
    setSearch(country);
    setHaveSearch(false);
  };

  // Function-for-Submission
  const handleSubmit = () => {
    if (search !== "") {
      alert(search);
    } else {
      alert("Please select any option in country AutoComplete");
    }
  };

  return (
    <>
      <div className="autocomplete">
        {/* input-Field */}
        <input
          type="text"
          placeholder="Country"
          value={search}
          onChange={changeHandler}
        />
        {/* Submit-buttom */}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {/* search-list-start */}
      <div>
        <ul>
          {props.countryData
            .filter((values) => {
              if (
                search !== "" &&
                haveSearch &&
                values.toLowerCase().includes(search.toLowerCase())
              ) {
                return values;
              } else {
                return null;
              }
            })
            .map((country, index) => (
              <li key={index} onClick={() => selectedCountry(country)}>
                {country}
              </li>
            ))}
        </ul>
      </div>
      {/* search-list-end */}
    </>
  );
}

export default AutoComplete;
