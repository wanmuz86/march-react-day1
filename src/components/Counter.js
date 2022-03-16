import react, { useState } from 'react';
import '../App.css';

function Counter() {
    // Create me a variable name counter...
    // Create me a setter name setCounter , x = 10; y = 15;
    // In react, when we create a variable, and that variable is being called in the UI,
    // It is known as a state, and if we want to modify it we have to use setter
    const [counter, setCounter] = useState(0);
    const [message,setMessage] = useState("");

    const increment = () => {
        setCounter(counter + 1);
        setMessage("");

    }

    const decrement = () => {
        /// I want the decrement button to be restricted until 0, when it is 0
        // the decrement button cannot be pressed anymore
        // Instead you are going to show a message at the bottom of counter saying
        // "Number cannot be less than 0"
        if (counter > 0) {
            setCounter(counter - 1);
        }
        else {
            setMessage("Number cannot be less than 0");
        }
    }
    return (

        <div>
            <h2>Counter</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => { 
                setCounter(0);
                setMessage(""); 
                }}
                >Reset</button>
            <p>Current Count : {counter}</p>
            <p className="Red-font">{message}</p>
        </div>
    );
}
export default Counter;