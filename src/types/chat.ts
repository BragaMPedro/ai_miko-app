import { Dispatch, SetStateAction } from "react";

export interface ChatConponentProps {
   setShowModal: Dispatch<SetStateAction<boolean>>;
}

export interface ChatHistoryProps {
   id: string;
   role: "user" | "model" | "system";
   content: ChatContentProps;
}

export interface ChatContentProps {
   text: string;
   thoughts?: string;
   user?: any;
}
