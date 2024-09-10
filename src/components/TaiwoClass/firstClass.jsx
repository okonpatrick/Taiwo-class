import ClientImg from "../../assets/image/client.jpg";
import {Link} from "react-router-dom";
import { themeContext } from "../manageTheme";
import { useContext } from "react";

export const TailwindClass = () => {
    const {themeState} = useContext(themeContext)
    return (
        <>
            <div className={`${ themeState === "light" ? "bg-white mx-auto lg:flex justify-center p-2" : "bg-black text-white mx-auto lg:flex justify-center p-2"}`}>
                <div className="lg:mt-40 lg:pr-16">    
                    <div className="">
                        <h1 className="text-6xl font-bold">Design nice interfaces <br/>on the go with Tailwind</h1>
                        <h3 className="text-3xl">using utility first class stylings!</h3>
                    </div>
                   <Link to="/signup"> <button className="px-6 py-4 bg-blue-500 rounded-lg mt-20 text-white text-2xl font-bold">Sign up </button>
                   </Link>

                </div>
                <div>
                    <img src={ClientImg} alt="client image" className="lg:w-[800px] sm:w-full"/>
                </div>
            </div>

        </>
        
    )
}
