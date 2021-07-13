
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import "./Layout.css"

function Layout(): JSX.Element{
    return (
        <div className="Layout">

           <aside>
                <Menu/>
           </aside>
           <main>
                <Main/>
           </main>

        </div>
    );
}

export default Layout;