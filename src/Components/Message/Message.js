import React from "react";
import "./Message.css"

export const Message = ({ text, author }) => (
    <div className="Message">
        <p className="Message-p">{author}: {text}</p>
    </div>
);
