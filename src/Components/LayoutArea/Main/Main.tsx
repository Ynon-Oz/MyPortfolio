import "./Main.css";

import Landing from "../../MainArea/Landing/Landing";
import About from "../../MainArea/About/About";
import Education from "../../MainArea/Education/Education";
import Projects from "../../MainArea/Projects/Projects";
function Main(): JSX.Element {
    // const url = 'https://media.giphy.com/media/loG32MXYyQl5vUJL46/giphy.gif';
    return (
        <div className="Main">

            <Landing/>
            <About/>
            <Education/>
            <Projects/>
        </div>
    );
}

export default Main;
