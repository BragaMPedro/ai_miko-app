import * as guidelines from "@/assets/instructions/instructions.json";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const { intro, workflow, yaeMiko, baseInstructions, adminCommands } = guidelines;

export const genAiConfig = (events: boolean = false) => {
   return {
      model: "gemini-1.5-pro-latest",
      generationConfig: {
         temperature: 1,
         topK: 64,
         topP: 0.95,
         maxOutputTokens: 8192,
         responseMimeType: "application/json",
      },
      safetySettings: [
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
      ],
      systemInstruction:
         intro + workflow + baseInstructions + yaeMiko.model + yaeMiko.scenario + events && yaeMiko.events + adminCommands,
   };
};
