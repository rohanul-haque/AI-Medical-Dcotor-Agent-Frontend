import { Step } from "@/types/types";
import { Brain, FileText, Mic } from "lucide-react";

export const steps: Step[] = [
  {
    id: 1,
    title: "Speak Your Symptoms",
    description:
      "Use your voice to describe symptoms naturally — no typing needed.",
    icon: Mic,
  },
  {
    id: 2,
    title: "AI Analyzes Instantly",
    description:
      "Advanced AI processes your input and provides smart health insights.",
    icon: Brain,
  },
  {
    id: 3,
    title: "Get Results & Guidance",
    description: "Receive suggestions, reports, and next steps within seconds.",
    icon: FileText,
  },
];
