import { steps } from "@/data/Steps";
import AppLayout from "@/layout/AppLayout";
import SectionTitle from "./SectionTitle";

const HowItWorks = () => {
  return (
    <section className="bg-gray-100/50 dark:bg-gray-900/50">
      <AppLayout>
        {/* Header */}
        <SectionTitle
          badge="How It Works"
          heading="Simple Process, Smart Results"
          description="Experience seamless AI-powered healthcare in just a few easy steps."
        />

        {/* Steps */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className="group relative cursor-pointer rounded-xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:scale-105 hover:border-green-500 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-500"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                  {i + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </AppLayout>
    </section>
  );
};

export default HowItWorks;
