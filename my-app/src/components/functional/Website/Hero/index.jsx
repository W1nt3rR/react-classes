import style from "./style.module.css";

const Hero = (props) => {

    const { image, text, title } = props;

    return (
        <div className={style.container}>
            <div className={style.text}>
                <div>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <div className={style.buttons}>
                    <button>Button</button>
                    <button>Button</button>
                </div>
            </div>
            <div className={style.image}>
                <img src={image} alt="image" />
            </div>
        </div>
    )
}

export default Hero;