import { genAiConfig } from "@/lib/genAiConfig";
import { ChatSession, GoogleGenerativeAI } from "@google/generative-ai";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DynamicImageSelector } from "./DynamicImageSelector";

interface ConfigModalProps {
   showModal: boolean;
   setShowModal: Dispatch<SetStateAction<boolean>>;
   setChat: Dispatch<SetStateAction<ChatSession | undefined>>;
}
export const ConfigModal = ({ showModal, setShowModal, setChat }: ConfigModalProps) => {
   const [mikoState, setMikoState] = useState<boolean>(false);
   const [showTab, setShowTab] = useState<1 | 2 | 3>(1);
   const apiKey = process.env.NEXT_PUBLIC_API_KEY;

   useEffect(() => {
      return () => {
         console.log("modal desconstruído");
      };
   }, []);

   function handleGenAi() {
      const genAI = new GoogleGenerativeAI(apiKey!);
      const model = genAI.getGenerativeModel(genAiConfig());

      setChat(model.startChat({ history: [] }));
      setShowModal(false);
   }

   function handleClose() {
      const close = confirm("Atenção, vc está saindo sem configurar sua Ai (eu acho)\nEstá certo disso?");
      close && setShowModal(false);
   }

   return (
      <dialog id="my_modal_5" className={`modal ${showModal && "modal-open"} modal-bottom sm:modal-middle`}>
         <div className="modal-box p-0 h-full space-y-6 flex flex-col items-center bg-stone-800">
            <header className="flex flex-col items-center flex-[0.2]">
               <p className="py-4">Mikonfig</p>
               <ul className="steps steps-horizontal cursor-pointer">
                  <li
                     onClick={() => {
                        setShowTab(1);
                     }}
                     className={`step pointer  ${showTab > 0 && "step-accent"}`}>
                     Miko
                  </li>
                  <li
                     onClick={() => {
                        setShowTab(2);
                     }}
                     className={`step pointer ${showTab > 1 && "step-accent"}`}>
                     Você
                  </li>
                  <li
                     onClick={() => {
                        setShowTab(3);
                     }}
                     className={`step pointer ${showTab > 2 && "step-accent"}`}>
                     Ai
                  </li>
               </ul>
            </header>
            <div role="tablist" className="tabs flex flex-1 w-full">
               <div
                  role="tabpanel"
                  className={`tab-content flex flex-1 flex-col items-center h-full p-0 ${showTab != 1 && "hidden"}`}>
                  <div className="fixed z-10 flex flex-1 flex-col items-center w-full">
                     <h2>Sua Experiência Miko</h2>
                  </div>
                  <div className="flex h-full w-full relative -z-0 overflow-clip">
                     <DynamicImageSelector
                        onClick={() => setMikoState(state => !state)}
                        changeHandler={!mikoState}
                        bgImage="bg-base-miko"
                        title="Miko Base"
                        desciption="Conversar, ou conhecer o santuário sem outras preocupações..."
                     />
                     <DynamicImageSelector
                        onClick={() => setMikoState(state => !state)}
                        changeHandler={mikoState}
                        bgImage="bg-shogun-event"
                        title="Miko Evento"
                        desciption="Eventos são acontecimentos aleatórios ou causados por suas ações.  Outras vezes são aleatórios, esteja pronto."
                     />
                  </div>
               </div>

               <div
                  role="tabpanel"
                  className={`tab-content flex-1 flex flex-col items-center justify-center p-6 ${showTab != 2 && "hidden"
                     }`}>
                  Soon
               </div>

               <div
                  role="tabpanel"
                  className={`tab-content flex-1 flex flex-col items-center justify-evenly rounded-box p-6 ${showTab != 3 && "hidden"
                     }`}>
                  Suas Configurações
                  <h2
                     className={`text-center ${mikoState ? "text-rose-200 border-purple-800 p-2" : "text-purple-600 border-slate-300 p-2"
                        }`}>
                     {mikoState ? "Miko com Evento" : "Miko Base"}
                  </h2>
                  <div className="modal-action">
                     <button onClick={handleGenAi} className="btn">
                        Gerar Chat
                     </button>
                  </div>
               </div>
            </div>

         </div>
         <form method="dialog" onClick={handleClose} className="modal-backdrop backdrop-blur-[4px]">
            <button>close</button>
         </form>
      </dialog>
   );
};
