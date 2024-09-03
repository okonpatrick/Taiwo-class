import { useReducer } from "react";

const initialState = { count: 0 }

//This is our Reducer Function
const ReducerFunc = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 }
        default:
            return { count: state.count };
    }

}

//Our Rendered Component
const UseReducerClass = () => {
    //initialize the useReducer hook
    const [state, dispatchFunc] = useReducer(ReducerFunc, initialState);
    return (
        <div className="mx-auto w-full text-center">
            <h1 className="mt-8 font-bold">useReducer Class</h1>
            <div className="px-6 pt-4 pb-2 text-center mx-center">
                   <div className="m-8"> {state.count}</div>
                   
                        <button onClick={() => dispatchFunc({ type: "increment" })} className="rounded-lg bg-green-500 px-8 py-2 m-8">+</button>
                        <button onClick={() => dispatchFunc({ type: "decrement" })}className="rounded-lg bg-red-500 px-8 py-2 m-8 text-white">-</button>
                    </div>

        </div>
    )

}
export default UseReducerClass