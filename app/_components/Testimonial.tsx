import { testimonials } from "@/data/testimonials";
import AppLayout from "@/layout/AppLayout";
import { Star } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Testimonial = () => {
  return (
    <section id="testimonials" className="bg-gray-100/50 dark:bg-gray-900/50">
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
