function ChatInput({ onSendMessage, disabled }) {
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() && !disabled) {
            try {
                onSendMessage(message);
                setMessage('');
            } catch (error) {
                reportError(error);
            }
        }
    };

    return (
        <form 
            data-name="chat-input-form"
            className="input-container" 
            onSubmit={handleSubmit}
        >
            <input
                data-name="chat-input"
                type="text"
                className="chat-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={disabled}
            />
            <button
                data-name="send-button"
                type="submit"
                className="send-button"
                disabled={!message.trim() || disabled}
            >
                Send
            </button>
        </form>
    );
}
