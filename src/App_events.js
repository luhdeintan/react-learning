/* 
  If the tailwind is still active, then stype is used tailwind. 
  So, for inactive that, you can turn off index.css tailwind first
*/


/**
 * Example 1
 */
const ButtonClick = () => {
  const ButtonClicked = () => {
    console.log('Clicked');
  }
  return <button onClick={ButtonClicked}>Click !</button>;
}

/**
 * Example 2
 * we must add () => FunctionCall()
 * that because if we dont use that way, the function will run directly
 * without caring about the event handler
 */
const ButtonClickSum = () => {
  const ButtonClickedSum = (a, b) => {
    alert(a+b);
  }
  return <button onClick={() => ButtonClickedSum(2,2)}>Click Sum !</button>;
}

function App() {
  return (
    <div className="App">
      <ButtonClickSum />
      <ButtonClick />
    </div>
  );
}

export default App;
