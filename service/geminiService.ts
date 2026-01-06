
import { GoogleGenAI } from "@google/genai";

export const getMomoAIResponse = async (prompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are Momo AI, the official intelligent assistant of SMAN 2 Tompaso. 
        Your personality is professional, warm, and highly intellectual. 
        You know everything about the school:
        - Motto: Cerdas, Terampil, Bermartabat.
        - Principal: Junus N M Akay, S.Pd, M.Si.
        - Vision 2026: Digital Transformation and Character Excellence.
        - Location: Tompaso, Minahasa, near the Watu Pinabetengan site.
        - School started for the new term on January 7, 2026.
        Always respond in Indonesian unless asked otherwise. Keep answers concise and helpful.`,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Momo AI Error:", error);
    return "Maaf, sistem Momo AI sedang mengalami gangguan teknis. Silakan coba beberapa saat lagi.";
  }
};
