import { ChangeEvent, Dispatch, SetStateAction } from "react";
interface ChatInputProps {
   message: string;
   setMessage: Dispatch<SetStateAction<string>>;
   loading: boolean;
   submit: () => void;
}

export const ChatInput = ({ message, setMessage, loading, submit }: ChatInputProps) => {
   const disabled = message === "" || loading;

   const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      console.log(e);
      
      const input = e.target.value;
      setMessage(input);
   };

   const inputHeightSetter = () => {
      let currentHeight;

      if (message && message.match(/\n/g)?.length) {
         currentHeight = (message.match(/\n/g)!.length) * 44;

         return currentHeight + "px";
      }
   };

   const handleSubmit = () => {
      submit(); //Função para enviar a mensagem para o chatbot
      setMessage(""); // Limpar o campo de input
   };

   return (
      <div className="fixed bottom-0 flex flex-col self-center h-fit z-10 w-full max-w-5xl sm:mb-6">
         <label
            className={`textarea textarea-bordered flex grow items-end pl-8 pr-2 gap-2 ${
               inputHeightSetter() != "44px" ? "rounded-badge" : "rounded-full"
            } shadow-md shadow-black/20`}>
            <textarea
               id="msg-input"
               name="msg-input"
               rows={5}
               maxLength={800}
               value={message}
               inputMode="text"
               onChange={handleChange}
               style={{ height: inputHeightSetter() }}
               placeholder="Digite sua mensagem..."
               className="grow w-full text-white bg-transparent h-11 resize-none max-h-32 transition-all focus:outline-none"
            />
            <button
               type="button"
               onClick={handleSubmit}
               disabled={disabled}
               className={`${
                  disabled && "btn-disabled"
               } btn btn-primary relative bottom-0 rounded-full text-white hover:brightness-75 transition-all duration-200`}>
               Enviar
            </button>
         </label>
      </div>
   );
};
