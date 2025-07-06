import "./styles.css";
import { useEffect } from "react";
import myUseState from "./myUseState";
export default function App() {
  const [count, setCount] = myUseState(0);

  useEffect(() => {
    console.log("Component re-rendered!");
  });

  return (
    <div className="App">
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount((prev) => prev + 1)}>Callback</button>
      </div>
    </div>
  );
}
