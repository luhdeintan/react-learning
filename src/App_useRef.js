import { useRef } from "react";
function App() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus()
    inputElement.current.value = "Intania Mentari"
  }
  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Click</button>
    </>
  );
}

export default App;
