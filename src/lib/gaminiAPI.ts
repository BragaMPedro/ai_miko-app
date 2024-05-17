// node --version # Should be >= 18
// npm install @google/generative-ai

import miko from "@/assets/instructions/miko.json";
import { chatHistoryProps } from "@/types/chat";
import {
    GenerationConfig,
    GoogleGenerativeAI,
    HarmBlockThreshold,
    HarmCategory,
    SafetySetting,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = process.env.API_KEY!;

const generationConfig = {
    temperature: 1,
    topK: 64,
    topP: 0.95,
    maxOutputTokens: 8192,
};
const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
   {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
   },
   {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
   },
   {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
   },
];

const model = genaiInit();
const chat = chatInit(JSON.stringify(miko), generationConfig, safetySettings)

export function genaiInit() {
   const genAI = new GoogleGenerativeAI(API_KEY);
   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

   return model;
}

export function chatInit(
   systemInstructions: string,
   generationConfig?: GenerationConfig,
   safetySettings?: SafetySetting[],
   history: [] = []
) {
   return model.startChat({
      generationConfig: generationConfig,
      safetySettings: safetySettings,
      systemInstruction: systemInstructions,
      history: history,
   });
}

export function getChatHistory(){
    return chat.getHistory()
}

export function importChatHistory(history: chatHistoryProps){
    console.log(chat.params)
}

export function postMessage(message: string) {
   return chat.sendMessage(message);
}
