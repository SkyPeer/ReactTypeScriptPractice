import React, { useState, useImperativeHandle } from "react";
import logo from "./logo.svg";
import "./App.css";

export interface MyInterface extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: string;
  name: String;
  tel: Number;
}

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);
  const [arr, changeArr] = useState([1, 2, 3]);

  const SpreadingExample = ({
    children,
    title = "Dr.",
    ...other
  }: MyInterface) => {
    console.log("123", other);

    return (
      <div {...other}>
        {title}: {children}: {count}
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <p>{status ? "true" : "false"}</p>

        <button
          onClick={async () => {
            await setCount(count + 1);
            setStatus(true);
            let _arr = arr;
            arr.push(17);
            changeArr(_arr);
          }}
        >
          PressMe
        </button>
        {SpreadingExample({
          children: "REAAAACTY",
          name: "name222",
          tel: 123321
        })}
      </header>
    </div>
  );
}

export default App;
