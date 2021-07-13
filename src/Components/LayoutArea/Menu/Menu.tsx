
import ContactMe from "../../MenuArea/ContactMe/ContactMe";
import MenuLinks from "../../MenuArea/MenuLinks/MenuLinks";
import MyPortrait from "../../MenuArea/MyPortrait/MyPortrait";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <section className="my-portrait">
            <MyPortrait/>
            </section>

            <h1 className="MyName">Ynon Oz</h1>
            <section className="menu-links">
            <MenuLinks/>
            </section>

            <section className="contact-me">
			<ContactMe/>

            </section>
        </div>
    );
}

export default Menu;
