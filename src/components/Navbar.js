import { Link } from 'react-router-dom';

// brand
function NavbarBrand(){
    return(
        <div className = 'navbar__brand w-1/3 flex justify-start h-14 w-14'>
            <Link to = '/'>
                <img src = '/logo.png' alt = 'brand' />
            </Link>
        </div>
    );
}

// hamburger
function NavbarMenu(){
    return(
        <div className = 'navbar__menu w-1/3 flex justify-end'>
            <div className = 'px-10 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className = "h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div> 
        </div>
    );
}

function Navbar(){
    return(
        <div className = 'navbar flex h-24 justify-around items-center my-5'>
            <NavbarBrand />
            <NavbarMenu />
        </div>
    );
}

export default Navbar;