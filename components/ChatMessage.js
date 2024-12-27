function ChatMessage({ message }) {
    const { role, content } = message;
    
    return (
        <div 
            data-name="chat-message"
            className={`message ${role === 'user' ? 'user-message' : 'ai-message'}`}
        >
            <div data-name="message-content">
                {content}
            </div>
        </div>
    );
}
