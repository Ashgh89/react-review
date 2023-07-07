import { useMemo, useState } from "react";

const WithoutUseMemo = () => {
  const [num, setNum] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const useY = useMemo(()=>{
    return y(num)
  },[num])
  const x = {
    background: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
  };

  return (
    <div>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
        Click me
      </button>
      <div style={x}>{useY}</div>
    </div>
  );
};

function y(number) {
  console.log("HAHAHAHAHA");
  for (let i = 0; i <= 100000000; i++) {}
  return number * 2;
}
export default WithoutUseMemo;
