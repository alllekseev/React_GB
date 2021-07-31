import './App.css';
import React, {useCallback, useEffect, useState} from "react";
import {MessageList} from "./Components/MessageList/MessageList";
import {Form} from "./Components/Form/Form"
import {AUTHORS} from "./constants"


function App() {

    const [messages, setMessages] = useState([]);

    const handleSendMessage = useCallback(
        (newMessage) => {
            setMessages([...messages, newMessage]);
        }, [messages]
    );

    useEffect(() => {
        if (!messages.length ||
            messages[messages.length - 1].author === AUTHORS.robot
        ) {
            return;
        }
        const timeout = setTimeout(() => {
            const newMessage = {
                text: "I'm Bot",
                author: AUTHORS.robot,
                id: Date.now(),
            }

            setMessages ([...messages, newMessage]);
        }, 1500);

        return () => clearTimeout(timeout);
    }, [messages]);

    return (
        <div className="App">
            <header className="App-header">
                <h2>My First React App</h2>
            </header>
            <div className="App-messages">
                <MessageList messages={messages} />
            </div>
            <div className="App-form">
                <Form onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}

export default App;
