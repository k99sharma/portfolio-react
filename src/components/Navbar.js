import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
            <div className = 'navbar flex justify-between items-center'>
                <div className = 'navbar__brand mx-10'>
                    <Link to = '/'>
                        <img width = "150px" height = "150px"  src = '/logo1.png' alt = 'brand' />
                    </Link>
                </div>
            </div> 
        </>  
    );
}

export default Navbar;