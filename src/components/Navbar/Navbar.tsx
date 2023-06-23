// importing components
import { Link } from "react-router-dom";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

// navlinks
const navLinks = [{
    label: 'Blog',
    path: '/blog'
},{
    label: 'About',
    path: '/about'
},
{
    label: 'dark-mode',
    path: '#'
}];

// navbar component
export default function Navbar(){
    return(
        <div className="navbar flex justify-between">
            <div className="navbar__brand">
                <button type="button" role="button">
                    <Link to="/">
                        Brand
                    </Link>
                </button>
            </div>

            <div className="navbar__links flex">
                {
                    navLinks.map(link => {
                        return link.label === 'dark-mode' ? <DarkModeButton /> : <button type="button" role="navigation" className="navbar__links mx-2">
                            <Link to={link.path}>
                                {
                                    link.label
                                }
                            </Link>
                        </button>
                    })
                }
            </div>
        </div>
    );
}