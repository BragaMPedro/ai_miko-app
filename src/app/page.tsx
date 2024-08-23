"use client";
import { ChatComponent } from "@/components/ChatComponent";
import { ModalConfig } from "@/components/ModalConfig";
import { useState } from "react";

export default function Home() {
   const [showModal, setShowModal] = useState<boolean>(true);

   return (
      <main className="bg-shrine-pink bg-cover bg-center bg-no-repeat min-w-full max-h-full">
         <ModalConfig showModal={showModal} setShowModal={setShowModal} />
         <ChatComponent setShowModal={setShowModal}/>
      </main>
   );
}
