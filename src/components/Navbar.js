import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='navbar my-5 flex justify-between items-center'>
                <div className='navbar__brand mx-10'>
                    <Link to='/'>
                        <img width="40px" height="40px" src='/web/logo.png' alt='brand' /> <span><div className='text-grey-500'>kalash</div></span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;