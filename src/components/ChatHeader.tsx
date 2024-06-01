import configIcon from "@/assets/icons/config-icon.svg";
import historyIcon from "@/assets/icons/history-icon.svg"
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface ChatHeaderProps{
   setShowModal: Dispatch<SetStateAction<boolean>>
}

export const ChatHeader = ({setShowModal}: ChatHeaderProps) => {
   return (
      <header className="container fixed left-0 top-0 z-10 w-fit bg-transparent">
         <div className="p-4 space-y-4 flex flex-col items-center">
            <button onClick={()=>setShowModal(true)}>
               <Image src={configIcon} alt="Ícone de engrenagem simbolizando configurações" />
            </button>
            <button>
               <Image src={historyIcon} alt="icone de caderno simbolizando histórico da conversa" />
            </button>
         </div>
      </header>
   );
};
