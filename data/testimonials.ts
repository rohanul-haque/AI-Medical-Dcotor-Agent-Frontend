import testimonial_1 from "@/assets/testimonial-1.jpg";
import testimonial_2 from "@/assets/testimonial-2.jpg";
import testimonial_3 from "@/assets/testimonial-3.jpg";
import testimonial_4 from "@/assets/testimonial-4.jpg";
import { Testimonial } from "@/types/types";

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Michael Carter",
    role: "General Physician",
    image: testimonial_1,
    review:
      "This AI voice assistant has completely transformed how we manage patient interactions. It saves time and improves overall efficiency.",
  },
  {
    name: "Emily Johnson",
    role: "Patient",
    image: testimonial_4,
    review:
      "I was able to book my appointment and get instant guidance. The experience felt smooth, fast, and very helpful.",
  },
  {
    name: "David Wilson",
    role: "Clinic Manager",
    image: testimonial_3,
    review:
      "Automation with voice AI reduced our workload significantly. It’s a must-have solution for modern healthcare facilities.",
  },
  {
    name: "Sophia Martinez",
    role: "Healthcare Specialist",
    image: testimonial_2,
    review:
      "The system delivers accurate responses and enhances patient engagement. It truly feels like the future of healthcare.",
  },
];
