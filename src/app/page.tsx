"use client";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatInput } from "@/components/ChatInput";
import { ChatMessageList } from "@/components/ChatMessageList";
import { ModalConfig } from "@/components/ModalConfig";
import { ChatSession, Content, TextPart } from "@google/generative-ai";
import { useState } from "react";

export default function Home() {
   const [showModal, setShowModal] = useState<boolean>(true);
   const [typing, setTyping] = useState<boolean>(false);
   const [message, setMessage] = useState("");
   const [chatHistory, setChatHistory] = useState<Content[]>([]);
   const [chat, setChat] = useState<ChatSession | undefined>();

   // useEffect(() => {
   //    !showModal && generateMiko()
   // }, [showModal]);
   // });

   function handleSubmit() {
      setTyping(true);

      if (!chat) {
         setChatHistory([
            ...chatHistory,
            {
               role: "user",
               parts: [
                  {
                     text: "Lamento, parece que há algo de errado com a configuração da sua Yae Miko\nTente configura-la novamente na janela de configurações",
                  },
               ],
            },
         ]);
         return;
      }

      const newChatEntry = { text: message } as TextPart;
      setChatHistory([...chatHistory, { role: "user", parts: [newChatEntry] }]);

      chat
         .sendMessage(message)
         .then(res => {
            let mikoRes = res.response.candidates![0].content;
            console.log(mikoRes);

            setChatHistory([...chatHistory, mikoRes]);
         })
         .catch(err => {
            console.error(err);
         })
         .finally(() => {
            setTyping(false);
         });
   }

   return (
      <>
         <ModalConfig showModal={showModal} setShowModal={setShowModal} setChat={setChat} />
         <main className="flex min-h-screen max-h-screen bg-shrine-pink bg-cover bg-opacity-50 bg-no-repeat bg-neutral-800 flex-col items-center w-full px-6 py-4 sm:px-10 sm:py-4">
            <ChatHeader setShowModal={setShowModal} />
            <ChatMessageList typing={typing} messages={chatHistory} />
            <ChatInput message={message} setMessage={setMessage} submit={() => handleSubmit()} />
         </main>
      </>
   );
}
