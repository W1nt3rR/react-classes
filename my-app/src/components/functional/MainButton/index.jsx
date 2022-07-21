import style from "./style.module.css";

const MainButton = (props) => {

    const { text = "Click Me", color, radius, size } = props;

    const getColor = () => {
        switch(color) {
            case "dark":
                return style.main;
            case "red":
                return style.red;
            case "yellow":
                return style.yellow;
            case "light":
                return style.light;
            default:
                return style.main;
        }
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

    return (
        <button className={`${getSize()} ${style.btnCommon} ${getColor()} ${getRadius()}`}>{text}</button>
    )
}


export default MainButton;