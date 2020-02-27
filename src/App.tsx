import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { isContext } from "vm";

export interface SpreadingExampleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: Number;
}

function SpreadingExample({
  children,
  title = "Dr.",
  ...other
}: SpreadingExampleProps) {
  console.log("123");

  return (
    <div {...other}>
      {title}: {children}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);
  const [arr, changeArr] = useState([1, 2, 3]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.t123123sx</code> and save to reload.
        </p>
        <p>{count}</p>
        <p>{status ? "true" : "false"}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={async () => {
            await setCount(count + 1);
            console.log(arr);
            setStatus(true);
            let _arr = arr;
            arr.push(17);
            changeArr(_arr);
          }}
        >
          PressMe
        </button>
        {SpreadingExample({ children: 12312 })}
      </header>
    </div>
  );
}

export default App;
