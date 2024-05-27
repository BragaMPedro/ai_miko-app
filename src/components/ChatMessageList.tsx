"use client";
import { ChatHistoryProps } from "@/types/chat";
import { useEffect } from "react";
import Markdown from "react-markdown";

interface ChatMessageListProps {
   chatHistory: ChatHistoryProps[];
   typing: boolean;
}

export const ChatMessageList = ({ chatHistory, typing }: ChatMessageListProps) => {
   useEffect(() => {
      autoScrollToBottom();
   }, [chatHistory.length]);

   function autoScrollToBottom() {
      const anchor = document.getElementById("bottom-anchor");
      console.log("bottom-autoscroll");

      anchor!.scrollIntoView({ behavior: "smooth", block: "end" });
   }

   return (
      <section
         id="chat-history"
         className="container flex-grow mb-10 overflow-y-auto p-4 space-y-8 max-w-5xl max-h-screen scroll-smooth">
         <div className="flex items-start w-full justify-center max-w-lg  text-center">
            <h4 className="text-lg font-bold text-gray-900 capitalize">Um titulo aqui</h4>
         </div>
         {chatHistory.map(({ role, content }, index) => (
            <div key={index} className={`chat min-w-2xl ${role === "user" ? "chat-end" : "chat-start"}`}>
               <div className="chat-header text-black">{role === "user" ? "Traveller" : "Yae Miko"}</div>
               <div
                  id={"chat-bubble-" + index}
                  className={`chat-bubble max-w-[70%] text-white py-4 space-y-2 ${
                     role === "user" ? "bg-gray-400 rounded-tr-none" : "bg-purple-400 rounded-tl-none"
                  }`}>
                  <Markdown>{content.text}</Markdown>
                  {role === "model" && (
                     <div className="collapse collapse-arrow p-[0.02rem] bg-purple-500/35">
                        <input type="checkbox" name="inner_thoughts" />
                        <div className="collapse-title flex items-center px-4 text-sm">spoiler</div>
                        <div className="collapse-content">
                           <Markdown>{"_" + content.inner_thoughts?.trimEnd() + "_"}</Markdown>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         ))}
         {typing && (
            <div className={`chat chat-start`}>
               <div className={`chat-bubble bg-purple-400`}>
                  <span className="loading loading-dots loading-md"></span>
               </div>
            </div>
         )}
         <div id="bottom-anchor" className="mt-6" />
      </section>
   );
};
