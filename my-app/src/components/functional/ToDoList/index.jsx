import { useState } from "react";
import style from "./style.module.css";

const ToDoList = () => {

    const [list, setList] = useState(JSON.parse(localStorage.getItem("list")));
    const [doneList, setDoneList] = useState(JSON.parse(localStorage.getItem("doneList")));

    const [showList, setShowList] = useState(false);

    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("doneList", JSON.stringify(doneList));

    // console.log(localStorage);

    console.log(list);
    console.log(doneList);

    const items = list.map((item, index) => {
        return <li>
            <div class={style.item}>
                <p>{item.item}</p>
                <button className={style.btnCommon} value={index} onClick={removeItem}>X</button>
            </div>
        </li>
    });

    const doneItems = doneList.map((item, index) => {
        return <li>
            <div class={style.item}>
                <p><strike>{item.item}</strike></p>
                <button className={style.btnCommon} value={index} onClick={restoreItem}>+</button>
                <button className={style.btnCommon} value={index} onClick={deleteItem}>X</button>
            </div>
        </li>
    });


    function deleteItem(e) {
        let tempList = [...doneList];
        tempList.splice(e.target.value, 1);

        setDoneList(tempList);
    }

    function restoreItem(e) {
        let tempList = [...doneList];
        let removedItem = tempList.splice(e.target.value, 1);

        setList([...list, removedItem[0]]);
        setDoneList(tempList);
    }

    function removeItem(e) {
        let tempList = [...list];
        let removedItem = tempList.splice(e.target.value, 1);
        
        setDoneList([...doneList, removedItem[0]]);
        setList(tempList);
    }

    function submitForm(e) {
        e.preventDefault();
        const text = e.target[0];

        if(text.value === "")
            return;
        
        setList([...list, {item: text.value}]);
        text.value = "";
    }

    function remainingTasks() {
        return list.length;
    }

    function toggleList() {
        setShowList(!showList);
    }

    function finishAll() {
        setDoneList([...doneList, ...list]);
        setList([]);
    }

    function restoreAll() {
        setList([...list, ...doneList]);
        setDoneList([]);
    }

    function deleteList() {
        setList([]);
    }

    function deleteDoneList() {
        setDoneList([]);
    }

    return (
        <div id={style.container}>
            <div class={style.toDoContainer}>
                <form id={style.inputForm} onSubmit={submitForm}>
                    <input id={style.textInput} type="text" name="" />
                    <input className={style.btnCommon} id={style.submitInput} type="submit" value="+"/>
                </form>

                <div id={style.toDoList}>
                    {/* {items != "" ? <p>To DO:</p> : ""} */}
                    <h2>To DO</h2>
                    <ul>
                        {items}
                    </ul>
                </div>
                
                <div id={style.footer}>
                    <p>{remainingTasks()} Tasks Left</p>
                    <button className={style.btnCommon} onClick={deleteList}>Delete All</button>
                    <button className={style.btnCommon} onClick={finishAll}>Finish All</button>
                    <button className={style.btnCommon} onClick={toggleList}>Finished Tasks</button>
                </div>
            </div>

            {showList ? 
            <div class={style.toDoContainer}>
                <div id={style.toDoList}>
                    {/* {doneItems != "" ? <p>Finished Tasks</p> : ""} */}
                    <h2>Finished Tasks</h2>
                    <ul>
                        {doneItems}
                    </ul>
                </div>

                <div id={style.footer}>
                    <p></p>
                    <button className={style.btnCommon} onClick={deleteDoneList}>Delete All</button>
                    <button className={style.btnCommon} onClick={restoreAll}>Restore All</button>
                    {/* <button className={style.btnCommon} onClick={toggleList}>Finished Tasks</button> */}
                </div>
            </div> 
            : ""}
            
        </div>
    );
}

export default ToDoList;