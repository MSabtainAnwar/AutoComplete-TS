import React from "react";
// styling
import "../../styles/css/autocomplete.css";
// Components
import AutoComplete from "../../components/AutoComplete";
// countries-data
import countryData from "../../config/config.json";
const countries = countryData.countries;

export default function Index() {
  return (
    <>
      <AutoComplete countryData={countries} />
    </>
  );
}
