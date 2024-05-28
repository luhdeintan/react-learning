import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(['ika', 'ince'])

  const addOne = () => {
    setFriends([...friends, 'antari'])
  }
  const removeOne = () => {
    setFriends(friends.filter((f) => f !== 'antari'))
  }
  const updateFriend = () => {
    setFriends(friends.map(f => f === 'ince' ? 'ince lewogete' : f))
  }

  return (
    <>
    {friends.map((friend) => (
      <li key={Math.random()}>{friend}</li>
    ))}

    <button onClick={addOne}>Add One</button>
    <button onClick={removeOne}>Remove One</button>
    <button onClick={updateFriend}>Update Friends</button>
    </>
  );
}

export default App;
