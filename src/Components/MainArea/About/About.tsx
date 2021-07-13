import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About" id="about">
			    <h2>ABOUT ME</h2>
            <p>
                Hi, my name is Ynon and I am a Full-Stack Developer and certified Mechanical practical engineer <br></br>recently John Bryce
                graduated (Java full-stack) seeking to transfer my passion for technology, analytical problem solving and team player skills 
                to Java software development.

            </p>
            <h3>MY EXPERTISE</h3>
            <div className="Expertise">
                <div className="Box1 Server">
                    <h4>Java Server side development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsam? Tempore quod, aliquam perspiciatis fuga porro itaque facilis accusantium quos ratione esse officia deleniti suscipit a quaerat voluptate temporibus. Consequatur?</p>
                </div>
                <div className="Box1 Web">
                    <h4>Web development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsam? Tempore quod, aliquam perspiciatis fuga porro itaque facilis accusantium quos ratione esse officia deleniti suscipit a quaerat voluptate temporibus. Consequatur?</p>
                </div>
                <div className="Box1 App">
                    <h4>App development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsam? Tempore quod, aliquam perspiciatis fuga porro itaque facilis accusantium quos ratione esse officia deleniti suscipit a quaerat voluptate temporibus. Consequatur?</p>
                </div>
            </div>
        </div>
    );
}

export default About;
