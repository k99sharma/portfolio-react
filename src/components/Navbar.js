import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
            <div className = 'navbar flex justify-between items-center'>
                <div className = 'navbar__brand mx-10'>
                    <Link to = '/'>
                        <img width = "200px" height = "40px"  src = '/logo2.svg' alt = 'brand' />
                    </Link>
                </div>
            </div> 
        </>  
    );
}

export default Navbar;