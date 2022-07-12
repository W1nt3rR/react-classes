import style from "./calculator.module.css";
import { useEffect } from "react";
import { useState } from "react";

const Calculator = (props) => {

    const[input, setInput] = useState(0);
    const[operand, setOperand] = useState(0);
    const[operator, setOperator] = useState("");
    const[history, setHistory] = useState("");


    function addNumber(e) {
        let num = e.target.innerHTML;
        // console.log(e);
        if(input == 0 && num != ".") {
            setInput(num);
            return;
        }

        if(input.includes(".") && num == ".") {
            return;
        }

        setInput(input + num);
    }

    function del() {
        if(input.length == 1) {
            setInput(0);
            return;
        }
        setInput(input.slice(0, -1));
    }

    function clear() {
        setInput(0);
        setOperand(0);
    }

    function add() {
        setOperator("+");
        if(operand === 0) {
            setOperand(input);
            setInput(0);
            return;
        }
        setOperand(parseFloat(operand) + parseFloat(input));
        setInput(0);
    }

    function subtract() {
        setOperator("-");
        if(operand === 0) {
            setOperand(input);
            setInput(0);
            return;
        }

        setOperand(parseFloat(operand) - parseFloat(input));
        setInput(0);
    }

    function multiply() {
        setOperator("*");
        if(operand === 0) {
            setOperand(input);
            setInput(0);
            return;
        }

        setOperand(parseFloat(operand) * parseFloat(input));
        setInput(0);
    }

    function divide() {
        setOperator("/");
        if(operand === 0) {
            setOperand(input);
            setInput(0);
            return;
        }

        if(input == 0)
            return;

        setOperand(parseFloat(operand) / parseFloat(input));
        setInput(0);
    }

    function mod() {
        setOperator("mod");
        if(operand === 0) {
            setOperand(input);
            setInput(0);
            return;
        }

        setOperand(parseFloat(operand) % parseFloat(input));
        setInput(0);
    }

    function negative() {
        if(input[0] != "-")
            setInput("-" + input);
        else
            setInput(input.substring(1));
    }

    function equals() {
        switch (operator) {
            case "+":
                setInput(parseFloat(operand) + parseFloat(input));
                addToHistory(`${operand} + ${input} = ${parseFloat(operand) + parseFloat(input)}`);
                break;
            case "-":
                setInput(parseFloat(operand) - parseFloat(input));
                addToHistory(`${operand} - ${input} = ${parseFloat(operand) - parseFloat(input)}`);
                break;
            case "*":
                setInput(parseFloat(operand) * parseFloat(input));
                addToHistory(`${operand} * ${input} = ${parseFloat(operand) * parseFloat(input)}`);
                break;
            case "/":
                setInput(parseFloat(operand) / parseFloat(input));
                addToHistory(`${operand} / ${input} = ${parseFloat(operand) / parseFloat(input)}`);
                break;
            case "mod":
                setInput(parseFloat(operand) % parseFloat(input));
                addToHistory(`${operand} % ${input} = ${parseFloat(operand) % parseFloat(input)}`);
                break;
            default:
                break;
        }

        // setInput(operand);
        setOperand(0);
    }

    function addToHistory(text) {
        setHistory(history + `<p>${text}</p>`);
    }

    //componentDidMount function basicaly, [] dependency array
    useEffect(() => {
        // console.log("nesto");
        // setInterval(random, 100);
    }, [])

    // console.log("rendering");
    return (
        <div id={style.container}>
            <div id={style.history} dangerouslySetInnerHTML={{__html: history}}></div>
            <div id={style.inputContainer}>
                <p id={style.inputAux}>{operand}</p>
                <p id={style.input}>{input}</p>
            </div>
            
            <div>
                <button onClick={add} className={style.btn}>+</button>
                <button onClick={subtract} className={style.btn}>-</button>
                <button onClick={multiply} className={style.btn}>*</button>
                <button onClick={del} className={style.btn}>del</button>

                <button onClick={addNumber} className={style.btn}>7</button>
                <button onClick={addNumber} className={style.btn}>8</button>
                <button onClick={addNumber} className={style.btn}>9</button>
                <button onClick={divide} className={style.btn}>/</button>

                <button onClick={addNumber} className={style.btn}>4</button>
                <button onClick={addNumber} className={style.btn}>5</button>
                <button onClick={addNumber} className={style.btn}>6</button>
                <button onClick={mod} className={style.btn}>%</button>

                <button onClick={addNumber} className={style.btn}>1</button>
                <button onClick={addNumber} className={style.btn}>2</button>
                <button onClick={addNumber} className={style.btn}>3</button>
                <button onClick={negative} className={style.btn}>+/-</button>

                <button onClick={clear} className={style.btn}>clr</button>
                <button onClick={addNumber} className={style.btn}>0</button>
                <button onClick={addNumber} className={style.btn}>.</button>
                <button onClick={equals} className={style.btn}>=</button>
            </div>
            
        </div>
    )
}

export default Calculator;