import { ChatContentProps } from "@/types/chat"
import axios from "axios"

export const gemPy_api = axios.create({
   baseURL: "http://127.0.0.1:5328",
   headers: {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
   }
})

export function postMessage(message:string){
    const prompt = {prompt:message}

    return gemPy_api.post<ChatContentProps>('/chat', prompt)
};