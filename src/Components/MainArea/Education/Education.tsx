import "./Education.css";

function Education(): JSX.Element {
    return (
        <div className="Education" id="education">
			<h2 >EDUCATION</h2>
            <div className="Education-container">
                <div className="Box2">
                    <h4>John Bryce Academy, Java full-stack Course</h4>
                    <h5>Jan 2019 - Dec 2020</h5>
                    <p>Graduation project: coupon platform enabling multiple companies to list and sell discount coupons to end-client. Platform includes different interfaces per user type (admin, company, end-client), filters, authentication and privilege management.
                        The system was built in 3 phases: system core (JAVA), API and client side using Spring, JPA, and Angular 8 (SPA).
                        During the project, migration was done from JDBC to JPA
                    </p>
                    <h5>Skills</h5>
                    <div className="UnOrder">
                        <ul>
                            <li>Java |TypeScript | JavaScript</li>
                            <li>Spring Boot/MVC | Hibernate (JPA) | REST </li>
                            <li>React | Angular 8 | HTML | CSS</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
                <div className="Box2">
                    <h4>Afeka College (“Hakirya”) , Mechanical Practical Engineer (magna cum laude)</h4>
                    <h5>Oct 2013 - Sep 2016</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsam? Tempore quod, aliquam perspiciatis fuga porro itaque facilis accusantium quos ratione esse officia deleniti suscipit a quaerat voluptate temporibus. Consequatur?</p>
                </div>

            </div>
        </div>
    );
}

export default Education;
