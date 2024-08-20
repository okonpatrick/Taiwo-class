import { useState } from "react";

const DisplayComp = () => {
    return (
        <>
        State is set to true
        </>
    )
}

export const AndOperatorComp =() => {
    const [state, setState] = useState(false);

    const toggleState =() => setState(!state)

    return (
        <div className="text-center">
        {state}
        <button onClick={toggleState}>Change state</button>
        <div>
        { state && <DisplayComp/>}
            </div>
        </div>
    )
}