function sendMessage() {
    const chatWindow = document.getElementById('chatWindow');
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    if (messageText.trim()) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageText;
        chatWindow.appendChild(messageElement);

        // Limpar a entrada de mensagem
        messageInput.value = '';
        // Rolar para a última mensagem
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}
