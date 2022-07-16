import { useState } from "react";

const SimpleForm = (props) => {

    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("");

    const [inputs, setInputs] = useState({name: "", surname: "", password: "", agree: false})

    function handleChange(e) {
        if(e.target.type == "checkbox")
            setInputs({
                ...inputs,
                [e.target.id]: e.target.checked
            });
        else
            setInputs({
                ...inputs,
                [e.target.id]: e.target.value
            });
    }

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                // api.get({name: name, surname: surname});
                // console.log({inputs.name, inputs.surname});
                console.log(inputs);
            }}
        >
            <label htmlFor="">Name:</label>
            <input type="text" value={inputs.name} onChange={handleChange} id="name" />
            <label htmlFor="">Surname:</label>
            <input type="text" value={inputs.surname} onChange={handleChange} id="surname" />
            <label htmlFor="">Password:</label>
            <input type="password" value={inputs.password} onChange={handleChange} id="password" />

            <label>I Agree</label>
            <input type="checkbox" checked={inputs.agree} onChange={handleChange} id="agree" />

            <input type="submit" />
        </form>
    );
}

export default SimpleForm;