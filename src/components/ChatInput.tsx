'use client'
import { useState } from 'react';

export const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(message);
    
    //sendMessage(message);  Função para enviar a mensagem para o chatbot
    setMessage(''); // Limpar o campo de input
  };

  return (
    <form className="flex items-center p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Digite sua mensagem..."
        className="flex-grow p-2 rounded-md border border-gray-300"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Enviar
      </button>
    </form>
  );
};