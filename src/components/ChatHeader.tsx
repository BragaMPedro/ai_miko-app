import configIcon from "@/assets/icons/config-icon.svg";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface ChatHeaderProps{
   setShowModal: Dispatch<SetStateAction<boolean>>
}

export const ChatHeader = ({setShowModal}: ChatHeaderProps) => {
   return (
      <header className="container fixed top-0 w-full bg-transparent">
         <div className="max-w-5xl text-left py-4">
            <button onClick={()=>setShowModal(true)}>
               <Image src={configIcon} alt="Ícone de engrenagem simbolizando configurações" />
            </button>
         </div>
      </header>
   );
};
