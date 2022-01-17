import { useEffect } from "react";
import { getData } from "./helpers/getData";
import "./styles.css";

export default function App() {
  useEffect(() => {
    getData()
      .then(() => null)
      .catch((error) => console.log(error));
  });

  return (
    <div className="App">
      <div>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
