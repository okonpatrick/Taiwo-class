import { useState } from "react";

export const StateComponent = () => {
    const [stateVariable, stateFunction] = useState(
        {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    );

    const incrementBtn = () => {
        stateFunction(stateVariable + 1);
    }

    const decrementBtn = () => {
        stateFunction(stateVariable - 1);
    }

    const onChangeFunction = (event) => {
        stateFunction({...stateVariable, [event.target.name]: event.target.value} )
    }

    const onSubmitFunction = (event) => {
        event.preventDefault();
        //come back to clear user inputs after submission!
        stateFunction(" ");
        console.log(stateVariable);

    }
    return (
        <>
        <h1 className="text-center">
        useState Hook Class
        </h1>
        <div className="flex text-center justify-center">
        <div><button onClick={decrementBtn} className="px-4 py-2 font-bold">Decrement</button></div>
            <div>
                {stateVariable}
            </div>
            <div><button onClick={incrementBtn} className="px-4 py-2 font-bold">Increment</button></div> 
            </div> 

            <div className="ml-80">
                <form onSubmit={onSubmitFunction}>
                  <div>
                  <label>FirstName</label>
                    <input 
                    className="border border-lg m-2"
                    name="firstname"
                    value={stateVariable.firstname}
                    onChange={onChangeFunction}></input>
                    </div>

            <div>    
            <label>Email</label>
                    <input 
                    name="email"
                    value={stateVariable.email}
                    onChange={onChangeFunction}></input>
                </div>

                   <div>
                   <label>Password</label>
                    <input 
                    type="password"
                    name="password"
                    value={stateVariable.password}
                    onChange={onChangeFunction}></input>
                   </div>

                    <div>
                    <label>Confirm Password</label>
                    <input 
                    type="password"
                    name="confirmPassword"
                    value={stateVariable.confirmPassword}
                    onChange={onChangeFunction}></input>
                    </div>

                    <button onClick={onSubmitFunction} type="submit" className="text-center">Submit</button>
                </form>
            </div>
        </>
    )
}