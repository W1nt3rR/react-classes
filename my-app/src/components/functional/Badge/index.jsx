import style from "./badge.module.css";

const Conditional = (props) => {

    const { type } = props;

    let badges = {
        badge1: "https://i.pinimg.com/originals/32/ce/5a/32ce5ae0555afc83f66cbc13e52e68c9.png",
        badge2: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png",
        twitter: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
    }

    return <a href={badges[type]}>
        <img className={style.icon} src={badges[type]} alt="badgeIdkTM" />
    </a> 
}

export default Conditional;