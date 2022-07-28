import { Fragment } from "react";


const Fragments = (props) => {

    const arr = [1, 2, 3, 4, 5];

    return (
        <div style={{ display: "flex", gap: 10 }}>
            {arr.map((element, index) => {
                return (
                <Fragment key={index}>
                    <p>Broj {element}</p>
                    <p>{element} Broj</p>
                </Fragment>
                )
            })}
        </div>
    )
}


export default Fragments;