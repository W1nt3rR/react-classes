import style from "./Card.module.css";

const Conditional = (props) => {

    const { text, subtitle, type = "info", extraText, extraIcon } = props;

    return (
        <div className={`${style.card} ${style[type]}`}>
            <img className={style.icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png" alt="" />
            <div className={style.text}>
                <p className={style.title}>{text}</p>
                {subtitle && <p>{subtitle}</p>}
                {extraText || extraIcon}
                {extraText ? extraText : extraIcon}
            </div>
        </div>
    );
}

export default Conditional;