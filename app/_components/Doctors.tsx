"use client";

import { Button } from "@/components/ui/button";
import { AIDoctorAgents } from "@/data/list";
import AppLayout from "@/layout/AppLayout";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Doctors = () => {
  return (
    <section id="doctors" className="dark:bg-gray-950">
      <AppLayout>
        {/* Heading */}
        <SectionTitle
          badge="Our Doctors"
          heading="Meet Our AI Specialists"
          description="Highly trained AI-powered doctors ready to assist you 24/7 with smart and instant healthcare support."
        />

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {AIDoctorAgents.map((doc) => (
            <div
              key={doc.id}
              className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:scale-105 hover:border-green-500 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-500"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.specialist}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {doc.specialist}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {doc.description}
                </p>

                {/* CTA */}
                <Button
                  className="mt-3 w-full cursor-pointer bg-green-500 hover:bg-green-600"
                  size={"lg"}
                >
                  Book Appointment
                  <ArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </AppLayout>
    </section>
  );
};

export default Doctors;
