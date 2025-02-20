import React, { useEffect, useState } from "react";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhones(data.data))

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => console.log(data)})
  }
  
  return (
    <div>
      <h2 className="text-5xl">{phones.length}</h2>
    </div>
  );
};

export default Phones;
