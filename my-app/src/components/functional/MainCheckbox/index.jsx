import { useState } from "react";
import style from "./style.module.css";
import doneIcon from "./icons/done.svg";

const MainCheckbox = (props) => {

    const { text = "I agree to sell my kidney", color, radius, size } = props;

    const [checked, setChecked] = useState(false);


    const getColor = () => {
        if(checked) 
        {
            switch(color) 
            {
                case "dark":
                    return style.dark;
                case "red":
                    return style.red;
                case "yellow":
                    return style.yellow;
                case "light":
                    return style.light;
                default:
                    return style.dark;
            }
        }

        return style.unchecked;
    }

    const getRadius = () => {
        switch(radius) {
            case "xs":
                return style.radiusXS;
            case "sm":
                return style.radiusSM;
            case "md":
                return style.radiusMD;
            case "lg":
                return style.radiusLG;
            case "xl":
                return style.radiusXL;
            default:
                return style.radiusNull;
        }
    }

    const getSize = () => {
        switch(size) {
            case "xs":
                return style.sizeXS;
            case "sm":
                return style.sizeSM;
            case "md":
                return style.sizeMD;
            case "lg":
                return style.sizeLG;
            case "xl":
                return style.sizeXL;
            default:
                return style.sizeNull;
        }
    }

    const getFontSize = () => {
        switch(size) {
            case "xs":
                return style.fontSizeXS;
            case "sm":
                return style.fontSizeSM;
            case "md":
                return style.fontSizeMD;
            case "lg":
                return style.fontSizeLG;
            case "xl":
                return style.fontSizeXL;
            default:
                return style.fontSizeNull;
        }
    }

    return (
        <div className={style.container} onClick={() => setChecked(!checked)}>
            <div className={`${style.common} ${getRadius()} ${getColor()} ${getSize()}`}>
                <img src={doneIcon} alt="" style={{width: "100%", height: "100%"}}/>
            </div>
            <p id={style.text} className={`${getFontSize()}`}>{text}</p>
        </div>
    )
}


export default MainCheckbox;