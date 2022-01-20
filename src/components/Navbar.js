import { Link } from 'react-router-dom';

// social links 
function NavbarSocial(){
    return(
        <div className = 'navbar__social hidden md:flex justify-left w-1/3'>
            <a className = 'pl-10 pr-5' href = "#">
                <img width = '30px' height = '30px' src = '/linkedin.png' alt = 'linkedin' />
            </a>

            <a className = 'pl-5 pr-10' href = "#">
                <img width = '30px' height = '30px' src = '/github.png' alt = 'github' />
            </a>
        </div>
    );
}

// brand
function NavbarBrand(){
    return(
        <div className = 'navbar__brand w-1/3 flex justify-center h-20 w-20 md:h-24 md:w-24'>
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
            <NavbarSocial />
            <NavbarBrand />
            <NavbarMenu />
        </div>
    );
}

export default Navbar;