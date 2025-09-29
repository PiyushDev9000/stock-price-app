import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Stock Price Tracker",
  ai: { gemini: { api: process.env.GEMINI_API_KEY } },
});
