import './Copyright.css';

import { Link } from 'react-router-dom';

function Copyright(){
    const social = [{
        id: 0,
        name: 'twitter',
        address: 'https://twitter.com/kalashsharma99',
        img: '/twitter.png'
    },
    {
        id: 1,
        name: 'linkedin',
        address: 'https://www.linkedin.com/in/kalashsharma99/',
        img: '/linkedin.png',
    },
    {
        id: 2,
        name: 'github',
        address: 'https://github.com/k99sharma',
        img: '/github.png',
    },
    {
        id: 3,
        name: 'mail',
        address: 'mailto:kalash.strt@gmail.com',
        img: '/email.png',
    },];

    return(
        <div className = 'copyright'>
                <div className='copyright__contact w-11/12 lg:w-9/12 text-center rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-3 justify-around items-center py-14 px-5'>
                    <div className = 'text-3xl font-bold text-font p-2'>
                        Start a project
                    </div>

                    <div className = 'text-lg lg:text-xl font-light py-8'>
                        Interested in working together?
                        We should queue up a chat.
                    </div>

                    <div>
                        <Link to = '/contact'>
                            <button className = 'contactButton'>
                                Let's do this
                            </button>
                        </Link>  
                    </div>
                </div>

                <div className = 'home__last__copyright pt-4 px-6 pb-16'>
                    <div className = 'p-4'>
                        <div className = 'text-2xl text-white text-center my-8'>
                                Living, learning, & leveling<br/>
                                up one day at a time.
                        </div>
                    </div>

                    <div className = 'mb-8 flex items-center justify-center'>
                        <div className = 'flex py-4'>
                            {
                                social.map(icon => {
                                    return <a target = '_blank' className = 'mx-3' key = { icon.id } href = { icon.address }>
                                        <img height = "30px" width = "30px" src = { icon.img } alt = { icon.name } />
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    
                <div className = 'text-white text-base text-center'>
                    Handcrafted by me &copy; twentytwentytwo
                </div>
            </div>
        </div> 
    );
}

export default Copyright;