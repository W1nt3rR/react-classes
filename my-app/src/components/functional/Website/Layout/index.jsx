import Footer from "../Footer";
import Nav from "../Nav";
import logo from "../images/cogwheel_nice_android.svg";

const Layout = (props) => {
    return (
        <div>
            <Nav />
                {props.children}
            <Footer logo={logo}/>
        </div>
    )
}

export default Layout;