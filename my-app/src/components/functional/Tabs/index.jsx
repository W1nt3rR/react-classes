import { useState } from "react";
import style from "./style.module.css";

const Tabs = (props) => {

    const { pages, onChange } = props;

    const [currentPage, setCurrentPage] = useState(0);
    let pageContent = [];

    
    const handlePageChange = (e) => {
        setCurrentPage(e.target.value);
        if(onChange) {
            onChange(currentPage);
        }
    }

    pages.forEach((page, index) => {
        pageContent[index] = <div key={index}>{page.content}</div>;
    });

    let buttons = pages.map((page, index) => {
        return <button value={index} key={index} id={index == currentPage ? style.buttonActive : ""} onClick={handlePageChange}>{page.title}</button>
    });
    
    return (
        <div>
            <div className={style.buttons}>
                {buttons}
            </div>
            <div className={style.content}>
                {pageContent[currentPage]}
            </div>
        </div>
    )
}

export default Tabs;