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
        <div className="divider my-14 flex items-center justify-center">
            <hr className={`${theme === "dark" ? "border-amber-500" : "border-zinc-800"} w-16`} />
        </div>
    )
}