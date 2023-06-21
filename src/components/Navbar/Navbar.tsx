// navlinks
const navLinks = [{
    label: 'Blog',
    path: '/blog'
},{
    label: 'About',
    path: '/about'
}];

// navbar component
export default function Navbar(){
    return(
        <div className="navbar flex justify-between">
            <div className="navbar__brand">
                Brand
            </div>

            <div className="navbar__links flex">
                {
                    navLinks.map(link => {
                        return <div className="navbar__links mx-2">
                            {
                                link.label
                            }
                        </div>
                    })
                }
            </div>
        </div>
    );
}