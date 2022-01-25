import './Home.css';

// importing components
import Projects from './Projects';
import Copyright from './Copyright';
import Introduction from './Introduction';
import About from './About';

function Home(){
    return(
        <>
            {/* introduction */}
            <Introduction />


            {/* home about */}
            <About />

            {/* home projects */}
            <Projects />

            {/* home copyright */}
            <Copyright />
        </>   
    );
}

export default Home;