import { useEffect } from "react";
import { useState } from "react";

const RandomColor = (props) => {
    const [count, setCount] = useState(0);

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const [size, setSize] = useState(100);

    function random(e) {
        setRed(Math.floor(Math.random() * 255));
        setGreen(Math.floor(Math.random() * 255));
        setBlue(Math.floor(Math.random() * 255));
        setSize(Math.floor(Math.random() * 400 + 100));
        // console.log(e);
    }

    //componentDidMount function basicaly, [] dependency array
    useEffect(() => {
        // console.log("nesto");
        setInterval(random, 100);
    }, [])

    // console.log("rendering");
    return (
        <div>
            <button onClick={random}>Color</button>
            <div style={{
                backgroundColor: `rgb(${red}, ${green}, ${blue})`, 
                height: size,
                width: size
            }}></div>
        </div>
    )
}

export default RandomColor;