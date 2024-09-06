export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface ChatStep {
  id: number;
  title: string;
}
