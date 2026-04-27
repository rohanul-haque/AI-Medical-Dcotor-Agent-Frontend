import testimonial_1 from "@/assets/testimonial-1.jpg";
import testimonial_2 from "@/assets/testimonial-2.jpg";
import testimonial_3 from "@/assets/testimonial-3.jpg";
import testimonial_4 from "@/assets/testimonial-4.jpg";
import AppLayout from "@/layout/AppLayout";
import { Star } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const testimonials = [
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

const Testimonial = () => {
  return (
    <section id="testimonials" className="dark:bg-gray-950">
      <AppLayout>
        {/* section title */}
        <SectionTitle
          badge="Testimonials"
          heading="Users Say"
          description=" Trusted by doctors, clinics, and patients worldwide."
        />

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:border-green-500 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-500"
            >
              {/* Stars */}
              <div className="flex gap-1 text-green-500">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                “{item.review}”
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AppLayout>
    </section>
  );
};

export default Testimonial;
