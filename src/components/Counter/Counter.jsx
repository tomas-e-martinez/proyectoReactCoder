import React from "react";
import './styles.css';

const Counter = ({counter, decrementCounter, incrementCounter, isValidCounter}) => {
    return(
        <div className='divCounter'>
            <button onClick={incrementCounter}>+</button>
            <p>{counter}</p>
            <button onClick={decrementCounter} disabled={!isValidCounter}>-</button>
        </div>
    )
}

export default Counter;