function App() {
    const [messages, setMessages] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const messagesEndRef = React.useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (message) => {
        try {
            const userMessage = { role: 'user', content: message };
            setMessages(prev => [...prev, userMessage]);
            setIsLoading(true);

            const response = await chatAgent(message, messages);
            const aiMessage = { role: 'assistant', content: response };
            
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            reportError(error);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div data-name="chat-container" className="chat-container">
            <div data-name="messages-container" className="messages-container">
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg} />
                ))}
                {isLoading && (
                    <div data-name="ai-message" className="message ai-message">
                        <LoadingDots />
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
