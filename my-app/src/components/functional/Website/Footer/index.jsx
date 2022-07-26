import style from "./style.module.css";

const Footer = (props) => {

    const { logo } = props;

    return (
        <div className={style.footer}>
            <div className={style.logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={style.copyright}>
                <div><a href="./vuejs/vue.html">© Copyright <strong>Cogflake & Snowheel Company</strong>.</a></div>
                <div><a href="https://github.com/W1nt3rR">Designed by <strong>W1nt3rR</strong></a></div>
            </div>

            <div class={style.filler}></div>
            
            <div class={style.footerButtons}>
                <a class={style.aButton} target="_blank" href="https://twitter.com/W1nt3rR"><img src="images/icons/twitter.svg" alt=""/></a>
                <a class={style.aButton} target="_blank" href="https://t.me/W1nt3rR"><img src="images/icons/telegram.svg" alt=""/></a>
                <a class={style.aButton} target="_blank" href=""><img src="images/icons/facebook.svg" alt=""/></a>
                <a class={style.aButton} target="_blank" href="https://www.instagram.com/w1nt3rr/"><img src="images/icons/instagram.svg" alt=""/></a>
                <a class={style.aButton} target="_blank" href="https://www.linkedin.com/in/winterr/"><img src="images/icons/linkedin.svg" alt=""/></a>
            </div>
        </div>
    )
}


export default Footer;