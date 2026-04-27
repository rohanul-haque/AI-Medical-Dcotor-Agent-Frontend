import { Service } from "@/types/types";
import { Brain, Clock, FileText, Mic, ShieldCheck, Zap } from "lucide-react";

export const services: Service[] = [
  {
    id: 1,
    title: "Voice Consultation",
    description:
      "Speak naturally with AI doctors. No typing required — just describe your symptoms out loud.",
    icon: Mic,
  },
  {
    id: 2,
    title: "Instant AI Suggestions",
    description:
      "Get diagnosis insights and treatment guidance within seconds, powered by advanced AI.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Secure & Private",
    description:
      "All consultations are end-to-end encrypted. Your medical data stays fully confidential.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Consultation Reports",
    description:
      "Receive detailed reports after each session with symptoms, insights, and next steps.",
    icon: FileText,
  },
  {
    id: 5,
    title: "Smart Doctor Matching",
    description:
      "AI recommends the most suitable specialist based on your symptoms and health data.",
    icon: Brain,
  },
  {
    id: 6,
    title: "24/7 Availability",
    description:
      "AI doctors are always available — no appointments, no waiting, no delays.",
    icon: Clock,
  },
];
