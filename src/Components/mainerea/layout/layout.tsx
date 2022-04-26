import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import "./layout.css";

class Layout extends Component {

    public render(): JSX.Element {
        return (
            <div className="layout">
<BrowserRouter>
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
                    <Main/>
                </main>
                
                <footer>
                    <Footer/>
                </footer>
                </BrowserRouter>
            </div>
        );
    }
}

export default Layout;
