import "./MenuLinks.css";

function MenuLinks(): JSX.Element {
    return (
        <div className="MenuLinks">
			   <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </nav>
        </div>
    );
}

export default MenuLinks;
