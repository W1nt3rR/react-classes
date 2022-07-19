import { useState } from "react";

const TemperatureConverter = (props) => {

    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
      
    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function celsiusFunction(e) {
        setFahrenheit(toFahrenheit(celsius));
    }

    function fahrenheitFunction(e) {
        setCelsius(toCelsius(fahrenheit));
    }

    console.log(celsius);


    return (
        <div>
            <TemperatureInput type="Celsius" value={celsius} setValue={setCelsius}/>
            <button onClick={celsiusFunction}>Convert To Fahrenheit</button>
            <br />
            <br />
            <TemperatureInput type="Fahrenheit" value={fahrenheit} setValue={setFahrenheit}/>
            <button onClick={fahrenheitFunction}>Convert to Celsius</button>
        </div>
    );
}

function TemperatureInput(props) {

    const { type = "Celsius", value, setValue } = props;

    // const [value, setValue] = useState(0);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return <div>
        <label htmlFor="">{type}</label>
        <input type="number" name="" id="" value={value} onChange={handleChange}/>
    </div>;
}

export default TemperatureConverter;