import React, { useEffect, useState } from "react";
import Country from "./country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div>
        <h3>Countries: {countries.length}</h3>
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </div>
    </>
  );
};

export default Countries;
