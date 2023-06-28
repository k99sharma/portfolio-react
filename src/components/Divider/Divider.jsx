// importing components
import { useContext } from "react"

// importing context
import ThemeContext from "../../context/ThemeContext";

// divider component
export default function Divider(){
    // theme context
    const themeCtx = useContext(ThemeContext);
    const { theme } = themeCtx;

    return(
        <div className="divider my-12 flex items-center justify-center">
            <hr className={`${theme === "dark" ? "border-red-600" : "border-cyan-700"} w-16`} />
        </div>
    )
}