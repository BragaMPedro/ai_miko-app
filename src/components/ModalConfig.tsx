import { Dispatch, SetStateAction } from "react";
interface ModalConfigProps {
   showModal: boolean;
   setShowModal: Dispatch<SetStateAction<boolean>>;
}
export const ModalConfig = ({ showModal, setShowModal }: ModalConfigProps) => {

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
                  <button onClick={handleClose} className="btn">
                     Close
                  </button>
               </form>
            </div>
         </div>
      </dialog>
   );
};
