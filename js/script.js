document.addEventListener('DOMContentLoaded', () => {
    const chatbotIcon = document.querySelector('.chatbot-icon');
    const chatbotWindow = document.querySelector('.chatbot-window');

    if (chatbotIcon) {
        chatbotIcon.addEventListener('click', () => {
            if (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') {
                chatbotWindow.style.display = 'block';
            } else {
                chatbotWindow.style.display = 'none';
            }
        });
    }
});
