import { createContext, useState } from "react"

const themeContext = createContext();

 const ContextPractice = ({children}) => {
    const [themeState, setThemeState] = useState("light");


    const ToggleThemeState = () => {
        setThemeState((prevValue) => (prevValue === "light" ? "dark" : "light"));
    }

    return(
        <themeContext.Provider value={{themeState, ToggleThemeState}}>
            {children}
        </themeContext.Provider>
    )
}
 export {themeContext, ContextPractice};