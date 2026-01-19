import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main(prompt) {
  
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash", 
    contents: prompt,               
  });
  return result.response.text();
};

export default main;
