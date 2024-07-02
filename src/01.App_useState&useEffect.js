import Button from "./Button";
import styles from "../modules/Button.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick2 = () => setValue((prev) => prev + 1);
  const onChange2 = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("i run only once (like call API only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("i run when 'keyword' changes");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'keyword or counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="Search here ! "
        onChange={onChange2}
      />
      <h1>{counter}</h1>
      <button onClick={onClick2}>click me</button>
    </div>
  );
}

export default App;
