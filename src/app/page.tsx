"use client";
import { ChatComponent } from "@/components/ChatComponent";
import { ModalConfig } from "@/components/ModalConfig";
import { ChatSession, GenerativeModel, } from "@google/generative-ai";
import { useState } from "react";

export default function Home() {
   const [showModal, setShowModal] = useState<boolean>(true);
   const [chat, setChat] = useState<ChatSession>();
   const [model, setModel] = useState<GenerativeModel>();
   return (
      <main className=" bg-shrine-pink bg-cover bg-opacity-50 bg-no-repeat min-w-full max-h-full">
         <ModalConfig showModal={showModal} setShowModal={setShowModal} setChat={setChat} setModel={setModel} />
         <ChatComponent model={model} chat={chat} setShowModal={setShowModal}/>
      </main>
   );
}
