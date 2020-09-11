import React from 'react';

import './input.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                onChange={event => setMessage(event.target.value)}
                value={message}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="sendButton" onClick={event =>sendMessage(event)}>Send</button>
        </form>
    );
}

export default Input;