import { useState, useEffect } from "react";

function Hello() {
  function destroyFn() {
    console.log("now i am DESTROYED ... ");
  }
  function createFn() {
    console.log("i am created ! ");
    return destroyFn;
  }
  useEffect(createFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "Hide" : "Show"} </button>
    </div>
  );
}

export default App;
