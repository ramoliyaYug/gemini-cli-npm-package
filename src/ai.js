import { GoogleGenAI } from "@google/genai";
import { database } from "./firebase.js";
import { ref, get } from "firebase/database";

let ai = null;

async function initializeGemini() {
    if (ai) return ai;

    const snapshot = await get(ref(database, "/geminiapikey"));

    if (!snapshot.exists()) {
        throw new Error("Gemini API key not found.");
    }

    const apiKey = snapshot.val();

    ai = new GoogleGenAI({
        apiKey
    });

    return ai;
}

export async function ask(prompt) {
    const gemini = await initializeGemini();

    const response = await gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });

    return response.text;
}

export async function solveFile(code) {
    const gemini = await initializeGemini();

    const response = await gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
You are an expert software engineer.

Your task:
- Return the ENTIRE updated file.

- Never omit code.
- Never shorten the file.
- Preserve imports unless necessary.
- Preserve formatting.
- Output ONLY the file contents.

Here is the file:

${code}
`
    });

    return response.text;
}