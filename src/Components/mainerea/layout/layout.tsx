import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "../../Routing/Routing/Routing";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import "./layout.css";

class Layout extends Component {

    public render(): JSX.Element {
        return (
            <BrowserRouter>
            <div className="layout">
<aside>
                    <Logo/>
                    
                </aside>

				<header>
                  <Header/> 
                </header>

                <aside>
                    <Menu/>
                </aside>

                 <main>
                    <Routing/>
                </main>
                
                <footer>
                    <Footer/>
                </footer>
            </div>
            </BrowserRouter>

        );
    }
}

export default Layout;
