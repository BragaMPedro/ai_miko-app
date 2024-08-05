import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
interface ChatInputProps{
    message: string,
    setMessage: Dispatch<SetStateAction<string>>,
    loading: boolean
    submit: ()=>void
}

export const ChatInput = ({message, setMessage, loading,  submit}: ChatInputProps) => {
  const disabled = message === "" || loading;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();    
    submit();  //Função para enviar a mensagem para o chatbot
    setMessage(''); // Limpar o campo de input
    
  };

  return (
    <form className="fixed bottom-0 left-0 flex items-center space-x-4 w-full max-w-5xl p-4" onSubmit={handleSubmit} >
      <textarea
        id='msg-input'
        name='msg-input'
        maxLength={500}
        value={message}
        inputMode='text'
        onKeyUp={(e)=>{ if(e.key === "Enter") handleSubmit() }}
        onChange={handleChange}
        placeholder="Digite sua mensagem..."
        className="flex-grow p-2 rounded-md text-white border border-gray-300"
      />
      <button type="submit" disabled={disabled} className={`${disabled && "btn-disabled"} btn btn-square btn-primary cursor-pointer text-white px-4 py-2 rounded-md hover:brightness-75 transition-all duration-200`}>
        Enviar
      </button>
    </form>
  );
};