import React, {useState} from "react";
import {AUTHORS} from "../../constants";
import "./Form.css"

export const Form = ({ onSendMessage }) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSendMessage({
            author: AUTHORS.human,
            id: Date.now(),
            text: value,
        });
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="Form-text" type="text" value={value} onChange={handleChange} />
            <input className="Form-submit" type="submit" />
        </form>
    )
}