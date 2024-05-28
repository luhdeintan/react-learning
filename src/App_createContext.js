// 1. Import createContext
import { createContext } from "react";
import ComponentA from "./ComponentA"

// 2. Creating instance of "createContext"
export const Data = createContext();
export const MyAge = createContext();

function App() {
  const name = "Intania Mentari"
  const age = 25
  return (
    // 3. Wrap our component into Provider COmponent
    <>
    <Data.Provider value={name}>
      <MyAge.Provider value={age}>
        <ComponentA />
      </MyAge.Provider>
    </Data.Provider>
    </>
  );
}

export default App;
