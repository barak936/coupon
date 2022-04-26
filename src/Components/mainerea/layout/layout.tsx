import { Component } from "react";
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
                  
            </div>
        );
    }
}

export default Layout;
