import { useState } from "react";
import style from "./input.module.css";

const TextInput = (props) => {

    const { defaultValue, label, onChange} = props;
    
    const [text, setText] = useState(defaultValue);

    const handleChange = (e) => {
        setText(e.target.value)
        if(onChange) {
            onChange(e.target.value);
        }
    }


    // console.log(text);

    return (
        <div className={style.container}>
            { label && <p className={style.label}>{label}</p> }
            <input 
                type="text" 
                value={text} 
                defaultValue={defaultValue} 
                onChange={handleChange}
                className={style.textInput}
                />
        </div>
    );
        
}

export default TextInput;