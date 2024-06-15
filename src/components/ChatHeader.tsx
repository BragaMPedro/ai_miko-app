import configIcon from "@/assets/icons/config-icon.svg";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface ChatHeaderProps {
   setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const ChatHeader = ({ setShowModal }: ChatHeaderProps) => {
   return (
      <header className="container fixed top-0 w-full py-4">
         <div>
            <button className="btn btn-circle btn-primary text-left text-white border-none p-0.5 flex items-center" onClick={() => setShowModal(true)}>
               <Image src={configIcon} alt="Ícone de engrenagem simbolizando configurações"/>
            </button>
         </div>
      </header>
   );
};
