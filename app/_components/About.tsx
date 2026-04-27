import artificial_healthcare from "@/assets/Artificial-Intelligence-in-Healthcare.jpg";
import { Button } from "@/components/ui/button";
import { features } from "@/data/Feature";
import AppLayout from "@/layout/AppLayout";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-gray-100/50 dark:bg-gray-900/50">
      <AppLayout>
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* LEFT: Image */}
          <div className="relative">
            <Image
              src={artificial_healthcare}
              alt="AI Healthcare"
              className="h-75 w-full rounded-2xl object-cover md:h-105"
              quality={100}
              priority
            />
          </div>

          {/* RIGHT: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-200 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-800">
              About Us
            </div>

            {/* Title */}
            <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              How AI Voice Improves Healthcare Experience
            </h2>

            {/* Description */}
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
              Our platform uses voice-based AI to simplify communication between
              patients and healthcare providers. It reduces waiting time and
              ensures faster access to care.
            </p>

            {/* Features */}
            <div className="mt-4 space-y-3">
              {features.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-5">
              <Button
                size="lg"
                className="flex items-center gap-2 bg-green-500 px-8 hover:bg-green-600 dark:text-white"
              >
                Learn More
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </AppLayout>
    </section>
  );
};

export default About;
