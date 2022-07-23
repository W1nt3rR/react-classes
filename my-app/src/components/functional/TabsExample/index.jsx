import { useState } from "react";
import Tabs from "../Tabs";


const TabsExample = (props) => {

    const [selectedTab, setSelectedTab] = useState(0);

    let tabsList = [
        {
            title: "Page 1",
            content: <p>idk man </p>
        },
        {
            title: "Page 2",
            content: <p>idk man 2</p>
        },
        {
            title: "Page 3",
            content: <p>idk man 3</p>
        },
        {
            title: "Test Tab",
            content: <div>
                <p>Testing tab or something</p>
            </div>
        },
        {
            title: "Page 4",
            content: <div>
                <p>WOOOO</p>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
            </div>
        },
        {
            title: "Page 4",
            content: <div>
                <p>WOOOO</p>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
            </div>
        },
        {
            title: "Page nice",
            content: <div>
                <p>nice</p>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>
            </div>
        }
    ]

    return (
        <div>
            <Tabs onChange={(i) => setSelectedTab(i)} pages={tabsList} />
        </div>
    )
}

export default TabsExample;