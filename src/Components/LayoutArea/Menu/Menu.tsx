
import ContactMe from "../../MenuArea/ContactMe/ContactMe";
import MenuLinks from "../../MenuArea/MenuLinks/MenuLinks";
import MyPortrait from "../../MenuArea/MyPortrait/MyPortrait";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <MyPortrait/>
            <h1 className="MyName">Ynon Oz</h1>

            <MenuLinks/>
			<ContactMe/>
        </div>
    );
}

export default Menu;
