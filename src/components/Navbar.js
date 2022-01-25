import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
            <div className = 'navbar flex justify-between items-center my-5'>
                <div className = 'navbar__brand mx-10'>
                    <Link to = '/'>
                        <img className = 'w-20 h-20' src = '/logo2.svg' alt = 'brand' />
                    </Link>
                </div>
            </div> 
        </>  
    );
}

export default Navbar;