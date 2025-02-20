import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [player, setTeam] = useState(11);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleRemove = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  const divStyles = {
    display: "grid",
    gap: "20px",
  };
  //   player
  const addPlayer = () => {
    const newPlayer = player + 1;
    setTeam(newPlayer);
  };
  const removePlayer = () => {
    const newPlayer = player - 1;
    setTeam(newPlayer);
  };
  return (
    <div>
      <h3>Counter: {count}</h3>
      <div style={divStyles}>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>remove</button>
      </div>
      <h3>player: {player}</h3>
      <div style={divStyles}>
        <button onClick={addPlayer}>Add</button>
        <button onClick={removePlayer}>remove</button>
      </div>
    </div>
  );
}
