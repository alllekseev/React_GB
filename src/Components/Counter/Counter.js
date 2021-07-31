import React, {useEffect, useState} from "react";
import './Counter.css';
import Child from "../Child/Child";

export function Counter() {

    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount((prevCount) => prevCount + 1);
    }
    // console.log(count)

    useEffect(() => {
        console.log(count);
    }, [count]);

    // const [value, setValue] = useState('');
    //
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // }
    // console.log(value)

    return (
        <div className="counter center">
            <div className="counter-number">{count}</div>
            <button className="counter-button" onClick={updateCount}>Click!</button>
            {/*<input type="text" value={value} onChange={handleChange}/>*/}
            <Child number={count}/>
        </div>
    )
}