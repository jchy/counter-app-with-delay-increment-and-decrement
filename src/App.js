import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  const delayDecrement = () => {
    setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 3000);
  };

  const delayIncrement = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 3000);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={delayDecrement}>Delay Decrement</button>
      <button onClick={handleDecrement}>-</button>
      <input value={count} onChange={handleChange} />
      <button onClick={handleIncrement}>+</button>
      <button onClick={delayIncrement}>Delay Increment</button>
    </div>
  );
}
