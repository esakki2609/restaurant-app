import { GoogleGenAI } from "@google/genai";


const GEMINI_API_KEY = "AIzaSyCvqW_lAVPiNKsvkA-BNtoE_0k83flAKnw"

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const geminiHAndler = async (messages) => {

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: messages,
    });
    console.log("ResposeText", response.text);

    console.log("APIKEY", messages,)

    return response.text
}
export default geminiHAndler
