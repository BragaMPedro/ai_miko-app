import * as guidelines from "@/assets/instructions/instructions 3.5.json";
import { HarmBlockThreshold, HarmCategory, StartChatParams } from "@google/generative-ai";

const { instructions } = guidelines;

interface MikonfigProps{
   params?:{
      encounters?: boolean;
      explicit?: boolean;
   },
   template?: []
}

export const Mikonfig = ({params, template}: MikonfigProps): StartChatParams => {
   return {
      generationConfig: {
         temperature: 1,
         topK: 64,
         topP: 0.95,
         candidateCount: 1,
         maxOutputTokens: 8152,
         responseMimeType: "application/json",
      },
      safetySettings: [
         {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
         },
         {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
         },
         {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_NONE
         },
         {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
         },
      ],
      systemInstruction: instructions
   };
};
