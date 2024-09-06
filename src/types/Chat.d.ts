export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  suggestedResponse?: string;
  acceptedResponses?: string[];
  requiedResponse?: boolean;
  timestamp: Date;
}

export interface ChatStep {
  id: number;
  title: string;
}
