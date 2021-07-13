import "./ContactMe.css";
import mail from '../../../Assets/Images/emailx2.png';
import git from '../../../Assets/Images/githublogo.png';
import linkedin from '../../../Assets/Images/linkedinlogo.png';
function ContactMe(): JSX.Element {
    return (
        <div className="ContactMe">
			<a href="mailto:ynonoz@gmail.com" target="_blank"><img src={mail} alt="Email" /></a>
            <a href="https://github.com/Ynon-Oz" target="_blank"><img src={git} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/ynon-oz/" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
        
        </div>
    );
}

export default ContactMe;
