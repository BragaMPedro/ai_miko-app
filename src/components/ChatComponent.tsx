import { ChatConponentProps, ChatContentProps, ChatHistoryProps } from "@/types/chat";
import { randomBytes } from "crypto";
import { useEffect, useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { ChatMessageList } from "./ChatMessageList";

export const ChatComponent = ({ model, chat, setShowModal }: ChatConponentProps) => {
   const [typing, setTyping] = useState<boolean>(false);
   const [message, setMessage] = useState("");
   const [chatHistory, setChatHistory] = useState<ChatHistoryProps[] | []>([]);

useEffect(()=>{
   limpaStates()
},[model])

   function generateId() {
      const id = randomBytes(20).toString("hex");
      return id;
   }

   function limpaStates(){
setChatHistory([]);
setMessage("")
   }

   async function handleSubmit() {
      const userMsg: ChatHistoryProps = { id: generateId(), role: "user", content: { text: message } };
      setChatHistory([...chatHistory, userMsg]);

      if (!chat) {
         atualizaChatHistory(generateId(), "system", {
            text: "Lamento, parece que há algo de errado com a configuração da sua Yae Miko\nTente configura-la novamente na janela de configurações",
         });
         console.error("Chat not Found");

         return;
      }

      setTyping(true);
      const tokens = await getTokenCount();
      console.log("tokenCount", tokens);

      /**
       * Envia mensagem
       */
      try {
         const result = await chat.sendMessage(message);
         const response = result.response.text();

         let resObject = validaJSON(response);
         console.table(resObject);

         const resState: ChatHistoryProps = { id: generateId(), role: "model", content: resObject };
         setChatHistory([...chatHistory, userMsg, resState]);

      } catch (error) {
         console.log(error);
         atualizaChatHistory(generateId(), "system", {
            text: "Lamento, parece que há algo de errado.\nTente de novo mais tarde",
         });
      } finally {
         setTyping(false);
      }
   };

   async function validaJSON(res:string) {
      let formattedRes;

      try {
         formattedRes = JSON.parse(res);
      } catch (error) {
         console.error(error, res);
         formattedRes = { text: res.split("inner")[0] };
      }

      return formattedRes
   }

   function atualizaChatHistory(id: string, role: "user" | "model" | "system", content: ChatContentProps) {
      const newChat: ChatHistoryProps = {
         id: id,
         role: role,
         content: content,
      };

      setChatHistory([...chatHistory, newChat]);
   }

   async function getTokenCount() {
      const history = await chat!.getHistory();
      const msgContent = { role: "user", parts: [{ text: message }] };
      const contents = [...history, msgContent];
      const { totalTokens } = await model!.countTokens({ contents });

      return totalTokens;
   }

   return (
      <section
         id="chat-section"
         className="flex flex-col items-center w-full overflow-y-auto scroll-smooth min-h-svh max-h-svh px-6 py-4 sm:px-10 sm:py-4">
         <ChatHeader setShowModal={setShowModal} />
         <ChatMessageList typing={typing} chatHistory={chatHistory} />
         <ChatInput message={message} setMessage={setMessage} loading={typing} submit={() => handleSubmit()} />
      </section>
   );
};
