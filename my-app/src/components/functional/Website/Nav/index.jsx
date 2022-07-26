import style from "./style.module.css";
import logo from "./images/cogwheel_nice_android.svg"

const Nav = (props) => {
    return (
        <nav className={style.nav}>
            <div class={style.sideMargins}></div>

            <a href="./index.html">
                <img id={style.navLogo} src={logo} alt="logo" />
            </a>

            <div class={style.filler}></div>

            <a href="./index.html">
                <div class={style.navItem}>Home</div>
            </a>
            <a href="./magisk.html">
                <div class={style.navItem}>Magisk</div>
            </a>
            <a href="./modules.html">
                <div class={style.navItem}>Modules</div>
            </a>
            <a href="./gcam.html">
                <div class={style.navItem}>Gcam</div>
            </a>
            <a href="./other-mods.html">
                <div class={style.navItem}>Other Mods</div>
            </a>
            <a href="./contact.html">
                <div class={style.navItem}>Contact</div>
            </a>
            <a href="./faq.html">
                <div class={style.navItem}>FAQ</div>
            </a>

            <div class={style.sideMargins}></div>
        </nav>
    )
}


export default Nav;