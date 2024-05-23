"use client";
import miko from "@/assets/instructions/miko.json";
import { Content } from "@google/generative-ai";
import { useEffect } from "react";
import Markdown from "react-markdown";

interface ChatMessageListProps {
   messages: Content[];
   typing: boolean;
}

export const ChatMessageList = ({ messages, typing }: ChatMessageListProps) => {
   useEffect(() => {
      autoScrollToBottom();
   }, [messages.length]);

   function autoScrollToBottom() {
      const anchor = document.getElementById("bottom-anchor");
      console.log("bottom-autoscroll");

      anchor!.scrollIntoView({ behavior: "smooth", block: "end" });
   }

   return (
      <section
         id="chat-history"
         className="container flex-grow mb-10 overflow-y-auto p-4 space-y-8 max-w-5xl max-h-screen scroll-smooth">
         <div className="flex items-start w-full justify-center text-center">
            <h4 className="max-w-lg">{miko.model.features[10]}</h4>
         </div>
         {messages.map((message, index) => (
            <div key={index} className={`chat  ${message.role === "user" ? "chat-end" : "chat-start"}`}>
               <div onClick={() => console.log(JSON.parse(message.parts[0].text!))} className="chat-header text-black">
                  {message.role === "user" ? "Traveller" : "Yae Miko"}
               </div>
               <Markdown
                  className={`chat-bubble text-white ${
                     message.role === "user" ? "bg-gray-400 rounded-tr-none" : "bg-purple-400 rounded-tl-none"
                  }`}>
                  {JSON.parse(message.parts[0].text!).response}
               </Markdown>
               <small>{JSON.parse(message.parts[0].text!).internal_monologue}</small>
            </div>
         ))}
         {typing && (
            <div className={`chat chat-start`}>
               <div className={`chat-bubble bg-purple-400`}>
                  <span className="loading loading-dots loading-md"></span>
               </div>
            </div>
         )}
         <div id="bottom-anchor" />
      </section>
   );
};
