// importing components
import Banner from "../Banner"

// navbar component
export default function Navbar(){
    return(
        <div className="navbar flex">
            <div className="navbar__banner">
                <Banner />
            </div>

            <div className="navbar__navlinks">
                Nav Links
            </div>
        </div>
    )
}