//vracaju samo jsx
import "./Card.css";

function Card(props) {
    const { url, name, job } = props;

    return (
        <div className="card">
            <img src={url} alt="" />
            <div>
                <h1>{name}</h1>
                <p>{job}</p>
            </div>
        </div>
    )
}

export default Card;