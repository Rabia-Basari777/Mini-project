import { useState, useContext } from "react";
import { CartContext } from "../Contexts/CartContextProvider";

export const ItemCount = ({id}) => {
    const [count, setCount] = useState(1);

    const handleIncrement = (x) => {
        const prev = count + x;
        setCount(prev);
        
    };

    const handleDecrement = (x) => {
        const prev = count - 1;
        setCount(prev);
        if (prev === 0) {
            setCount(count);
        }
    }

    return (
      <div style={{ display: "flex", height: "20px" }}>
        <button
          onClick={() => {
            handleDecrement(1);
          }}
        >
          -
        </button>
        <button>{count}</button>
        <button
          onClick={() => {
            handleIncrement(1);
          }}
        >
          +
        </button>
      </div>
    );
}