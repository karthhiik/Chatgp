function chatAgent(message, chatHistory) {
    try {
        const systemPrompt = `You are a helpful AI assistant. You provide clear, accurate, and helpful responses.

Chat history:
${JSON.stringify(chatHistory)}`;

        return invokeAIAgent(systemPrompt, message);
    } catch (error) {
        reportError(error);
        throw error;
    }
}
