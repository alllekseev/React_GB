import './message.css'

function Message(props) {
    return (
        <div>
            <p className="Message">{props.message}</p>
        </div>
    )
}

export default Message