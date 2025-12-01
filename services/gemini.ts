import { GoogleGenAI, Type } from "@google/genai";
import { RoomType, DesignStyle } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Define the response schema for structured output
const renovationIdeaSchema = {
  type: Type.OBJECT,
  properties: {
    ideas: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          estimatedCostRange: { type: Type.STRING },
          materialSuggestions: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["title", "description", "estimatedCostRange", "materialSuggestions"]
      }
    },
    summary: { type: Type.STRING }
  },
  required: ["ideas", "summary"]
};

export const generateRenovationIdeas = async (
  room: RoomType,
  style: DesignStyle,
  budget: string
) => {
  const prompt = `
    I am a homeowner looking to renovate my ${room}.
    I prefer a ${style} design style.
    My estimated budget is roughly ${budget}.
    
    Please provide 3 distinct, creative, and professional renovation concepts that fit this criteria.
    Include specific material suggestions that match the style.
    Be realistic about what can be achieved with the budget.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: renovationIdeaSchema,
        systemInstruction: "You are an expert interior designer and construction consultant for a high-end renovation firm named Colosseum Construction. Your tone is professional, encouraging, and knowledgeable.",
      }
    });

    const text = response.text;
    if (!text) return null;
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating renovation ideas:", error);
    throw error;
  }
};