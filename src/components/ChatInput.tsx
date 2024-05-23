import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
interface ChatInputProps{
    message: string,
    setMessage: Dispatch<SetStateAction<string>>,
    submit: ()=>void
}

export const ChatInput = ({message, setMessage, submit}: ChatInputProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    submit();  //Função para enviar a mensagem para o chatbot
    setMessage(''); // Limpar o campo de input
    
  };

  return (
    <form className="fixed bottom-0 flex items-center space-x-4 w-full max-w-5xl p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Digite sua mensagem..."
        className="flex-grow p-2 rounded-md text-gray-700 border border-gray-300"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Enviar
      </button>
    </form>
  );
};