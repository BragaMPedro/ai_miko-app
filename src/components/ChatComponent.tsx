import { postMessage } from "@/app/services/chat";
import { ChatConponentProps, ChatContentProps, ChatHistoryProps } from "@/types/chat";
import { randomBytes } from "crypto";
import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { ChatMessageList } from "./ChatMessageList";

export const ChatComponent = ({ setShowModal }: ChatConponentProps) => {
   const [typing, setTyping] = useState<boolean>(false);
   const [message, setMessage] = useState("");
   const [chatHistory, setChatHistory] = useState<ChatHistoryProps[] | []>([]);

   function generateId() {
      const id = randomBytes(20).toString("hex");
      return id;
   }

   function handleSubmit() {
      setTyping(true);
      const userMsg: ChatHistoryProps = { id: generateId(), role: "user", content: { text: message } };

      postMessage(message)
      .then(res=>{
         const response = res.data
         console.table(response);

         const resState: ChatHistoryProps = { id: generateId(), role: "model", content: response };
         setChatHistory([...chatHistory, userMsg, resState]);
      })
      .catch ((error) => {
         console.log(error);
         
         atualizaChatHistory(generateId(), "system", {
            text: "Lamento, parece que há algo de errado.\nTente de novo mais tarde",
         });
      })
      .finally(()=>{
         setTyping(false);
      });
   };

   function atualizaChatHistory(id: string, role: "user" | "model" | "system", content: ChatContentProps) {
      const newChat: ChatHistoryProps = {
         id: id,
         role: role,
         content: content,
      };

      setChatHistory([...chatHistory, newChat]);
   }

   return (
      <section
         id="chat-section"
         className="flex flex-col items-center w-full min-h-svh max-h-screen px-6 py-0 sm:px-10">
         <ChatHeader setShowModal={setShowModal} />
         <ChatMessageList typing={typing} chatHistory={chatHistory} />
         <ChatInput message={message} setMessage={setMessage} loading={typing} submit={() => handleSubmit()} />
      </section>
   );
};
