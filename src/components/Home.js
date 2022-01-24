import './Home.css';

// importing components
import Projects from './Projects';
import Copyright from './Copyright';
import Introduction from './Introduction';


function Home(){
    return(
        <>
            {/* introduction */}
            <Introduction />


            {/* second section of home */}
            {/* <div className = 'home grid mx-4 grid-cols-1 md:grid-cols-2'>
                <div className = 'flex justify-start items-center'>
                    <div className = 'p-4 flex flex-col justify-around items-start'>
                        <div className = 'home__content text-3xl'>
                            I'm a Web Developer 
                            who is passionate about
                            writing clean, elegant and efficient code.
                            Innovation is my passion.
                        </div>

                        <button className = 'button'>
                            Projects
                        </button>
                    </div>
                </div>

                <div className = 'home__illustration grid place-items-center'>
                    <img height = "500px" width = "500px" src = '/home1.svg' alt = 'illustration' />
                </div>
            </div> */}

            {/* home projects */}
            <Projects />

            {/* home copyright */}
            <Copyright />
        </>   
    );
}

export default Home;