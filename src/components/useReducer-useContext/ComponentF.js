import React, { useContext } from "react"; 
import { CountContext } from "./Reducer-Context";

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component F
            <button onClick={() => countContext.countDispatch('increment')}>Increase</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrease</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF