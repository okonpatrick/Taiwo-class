import { createContext, useState } from "react";

const themeContext = createContext();

const ThemeComponent = ({children}) => {
    const [themeState, setThemeState] = useState("light")

    const toggleTheme = () => {
        setThemeState((prevValueState) => (prevValueState === "light" ? "dark" : "light"))
    }
    return (
    <themeContext.Provider value={{themeState, toggleTheme}}>
        {children}
    </themeContext.Provider>

    )
}
export {ThemeComponent, themeContext};