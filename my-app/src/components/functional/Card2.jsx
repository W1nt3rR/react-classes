//vracaju samo jsx
import "./Card2.css";

function Card2(props) {
    const { url, title, text } = props;

    return (
        <div className="card2">
            <img src={url} alt="" />
            <h1>{title}</h1>
            <p>{text}</p>
            <button>READ MORE</button>
        </div>
    )
}

export default Card2;