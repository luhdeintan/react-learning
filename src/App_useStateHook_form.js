import { useState } from "react";

function App() {
  const [username, setUsername] = useState('')
  const handleChange = (event) => {
    setUsername(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`You typed: ${username}`)

    //when alert comes, username set again to ''
    setUsername('');
  }
  return (
    <>
      <h1>Demo Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={username} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
