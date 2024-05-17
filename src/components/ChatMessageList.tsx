export const ChatMessageList = () => {
    const messages = [
      { sender: 'Você', content: 'Oi!' },
      { sender: 'Chatbot', content: 'Olá! Como posso te ajudar?' },
    ];
  
    return (
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message) => (
          <div className={`flex items-start ${message.sender === 'Você' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-4 rounded-md ${message.sender === 'Você' ? 'bg-gray-400' : 'bg-white'}`}>
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };