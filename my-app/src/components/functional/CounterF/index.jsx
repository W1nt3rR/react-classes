import { useState } from "react";

const CounterF = (props) => {
    let [count, setCount] = useState(0);

    function increment(e) {
        setCount(count + 1);
        console.log(e);
    }

    function decrement(e) {
        setCount(count - 1);
        console.log(e);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default CounterF;