"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <div className="text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
          {/* Animated dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-700 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
          </span>

          {/* Text */}
          <span>AI-Powered Healthcare</span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto w-full max-w-3xl text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
          Your AI Voice Assistant for{" "}
          <span className="text-green-500">Smarter Healthcare</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          Automate patient interactions with intelligent voice AI. Instantly
          assess symptoms, schedule appointments, and deliver reliable medical
          assistance — anytime, anywhere.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="cursor-pointer bg-green-500 px-8 hover:bg-green-600"
          >
            Get Started
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer border-gray-300 px-8"
          >
            Learn More <ArrowRight />
          </Button>
        </div>

        {/* Optional Stats / Trust */}
        <div className="mt-16 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <p className="text-sm text-gray-500">Availability</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">99%</h3>
            <p className="text-sm text-gray-500">Accuracy</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
            <p className="text-sm text-gray-500">Patients Served</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <p className="text-sm text-gray-500">Clinics Integrated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
