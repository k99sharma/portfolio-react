import './Home.css';
import { useState } from 'react';

// importing components
import Projects from './Projects';
import Copyright from './Copyright';
import Introduction from './Introduction';
import About from './About';

function Home(){
    const [display, setDisplay] = useState(false);

    window.onscroll = function(){scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    }

    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }


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

            <div onClick = { topFunction } className = { !display ? 'hidden' : 'up-arrow p-2 bg-sky-300 cursor-pointer' }>
                <img width = "30px" height = "30px" src = 'up.png' alt = 'up' />
            </div>
        </>   
    );
}

export default Home;