import { ReactNode } from "react";

export interface Message {
  id: string;
  content: ReactNode;
  sender: "user" | "bot";
  suggestedResponse?: string;
  acceptedResponses?: string[];
  renderOnFullScreen?: boolean;
  timestamp: Date;
}

export interface ChatStep {
  id: number;
  title: string;
  icon: ReactNode;
}
