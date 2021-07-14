
import ContactMe from "../../MenuArea/ContactMe/ContactMe";
import MenuLinks from "../../MenuArea/MenuLinks/MenuLinks";
import MyPortrait from "../../MenuArea/MyPortrait/MyPortrait";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <section className="top-header">
                <div className="my-portrait">
                    <MyPortrait />
                </div>

                <h1 className="MyName">Ynon Oz</h1>
            </section>
            
            <section className="bottom-header">
                <div className="menu-links">
                    <MenuLinks />
                </div>

                <div className="contact-me">
                    <ContactMe />
                </div>
            </section>
        </div>
    );
}

export default Menu;
