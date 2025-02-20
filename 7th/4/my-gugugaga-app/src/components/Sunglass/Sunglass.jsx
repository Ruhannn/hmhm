import React from "react";
import "./Sunglass.css";
import { add, subtract, multiplication, div } from "../../Utility/Calculate";
const Sunglass = () => {
  const first = 55;
  const second = 44;
  const sum = add(first, second);
  return (
    <div>
      <Watch></Watch>
    </div>
  );
};
export default Sunglass;