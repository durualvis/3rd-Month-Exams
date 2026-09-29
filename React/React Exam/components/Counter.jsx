import { useState } from "react";

const Counter = () => {
  let [num, setnum] = useState(0);
  const handleAdd = () => {
    if(num >= 0){
      setnum(num + 1)
    }
  };
  const handleminus = () => {
    if(num > 0){
      setnum(num - 1)
    }
  }

  return (
    <div className="counter">
      <h3
        style={{
          textAlign: "center",
        }}
      >
        {num % 2 == 0? "It is even": "It is odd"}
      </h3>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {num}
      </h1>
      <button
        style={{
          marginLeft: "9px",
          marginRight: "9px",
        }}
        onClick={handleAdd}
      >
        +
      </button>
      <button onClick={handleminus}>-</button>
    </div>
  );
};
export default Counter;
