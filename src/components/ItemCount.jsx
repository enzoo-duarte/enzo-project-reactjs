import { useState } from 'react';

export default function ItemCount({ stock, initial, onQuantityChange }) {
    const [count, setCount] = useState(initial);

    const increment = () => {
      if (count < stock) {
        setCount(count + 1);
        onQuantityChange(count + 1); 
      }
    };

    const decrement = () => {
      if (count > 1) {
        setCount(count - 1);
        onQuantityChange(count - 1); 
      }
    };

    return (
      <div className="item-count">
          <button onClick={decrement} disabled={count === 1}>-</button>
          <span>{count}</span>
          <button onClick={increment} disabled={count === stock}>+</button>
      </div>
    );
}
