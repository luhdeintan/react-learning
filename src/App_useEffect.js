import { useEffect, useState } from "react";

function App() {

  const [value, setValue] = useState(0);

  /**
   * 1. Render for the (first time)
   * 2. Anytime we do (side effect)
   * 3. Depedency List / Depedency Array
   */

  useEffect(() => {
    if(value > 0) {
      console.log('HELLO !')
      document.title = `incement (${value})`
    }
  }, [4]) //3

  return (
    <>
    <h1>{value}</h1>
    <button onClick={() => setValue(value + 1)}>+</button>
    </>
  );
}

export default App;
