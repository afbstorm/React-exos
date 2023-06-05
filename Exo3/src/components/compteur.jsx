import { useState } from "react";

const Compteur = () => {
    
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevValues => prevValues + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
    <p>{count}</p>
    <button onClick={increment}> +1 </button>
    <button onClick={reset}>Reset count</button>
    </>
  )
}

export default Compteur;