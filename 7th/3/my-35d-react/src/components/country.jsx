import React from "react";
const Country = ({ country }) => {
  const { name } = country;
  return (
    <div>
      <h3>Name: {name?.common}</h3>
      <img src="" alt="" />
    </div>
  );
};
export default Country;
