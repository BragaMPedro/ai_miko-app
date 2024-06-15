import { Mikonfig } from "@/lib/Mikonfig";
import { ChatSession, GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";
import { Dispatch, SetStateAction, useEffect } from "react";
interface ModalConfigProps {
   showModal: boolean;
   setShowModal: Dispatch<SetStateAction<boolean>>;
   setChat: Dispatch<SetStateAction<ChatSession | undefined>>;
   model: GenerativeModel | undefined;
   setModel: Dispatch<SetStateAction<GenerativeModel | undefined>>;
}
export const ModalConfig = ({ showModal, setShowModal, setChat, model, setModel }: ModalConfigProps) => {
   let apiKey = process.env.NEXT_PUBLIC_API_KEY;

   useEffect(() => {
      return () => {
         console.log("modal desconstruído");
      };
   }, []);

   const mikoChatStyle = [
      {
         bgImage: "bg-base-miko",
         title: "Miko Base",
         desciption: "Conversar, ou conhecer o santuário sem outras preocupações...",
      },
      {
         bgImage: "bg-shogun-event",
         title: "Miko Evento",
         desciption: "Eventos são acontecimentos causados por suas ações. Outras vezes são aleatórios, esteja pronto.",
      },
   ];

   function handleGenAi() {
      /**
       * Inserir manualmente APIKey em caso de erro.
       */
      if (!apiKey) {
         console.log("API check 1 -", Boolean(apiKey));
         const accept = confirm("algo de errado com a ApiKey, você tem ela?");
         if (accept) apiKey = prompt("Por favor insira sua ApiKey:") as string | undefined;
         return;
      }

      let accept = false;
      if (model) {
         console.log("Modelo?", model);

         accept = confirm("Atenção, completar essa ação  vai recomeçar sua Mikonversa.\nDeseja continuar?");
      }

      if ((accept && model) || (!accept && !model)) {
         const genAI = new GoogleGenerativeAI(apiKey);
         const { generationConfig, safetySettings, systemInstruction } = Mikonfig({});

         const newModel = genAI.getGenerativeModel({
            model: "gemini-1.5-flash-latest",
            generationConfig: generationConfig,
            safetySettings: safetySettings,
            systemInstruction: systemInstruction,
         });
         if (newModel) setModel(newModel);

         const chatStart = newModel.startChat({ history: [] });

         setChat(chatStart);
      }
      setShowModal(false);
   }

   function handleClose() {
      const close = confirm("Atenção, vc está saindo sem configurar sua Ai (eu acho)\nEstá certo disso?");
      close && setShowModal(false);
   }

   return (
      <dialog id="config-modal" className={`modal scrollbar-unset ${showModal && "modal-open"}`}>
         <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click the button below to close</p>
            <div className="modal-action">
               <form method="dialog">
                  <button onClick={handleGenAi} className="btn">
                     Close
                  </button>
               </form>
            </div>
         </div>
      </dialog>
   );
};
