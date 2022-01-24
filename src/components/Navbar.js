import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className = 'navbar flex h-24 justify-between items-center my-5'>
            <div className = 'navbar__brand mx-10 h-10 w-10'>
                <Link to = '/'>
                    <img src = '/logo.png' alt = 'brand' />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;