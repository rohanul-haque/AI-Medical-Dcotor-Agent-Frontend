import { services } from "@/data/services";
import AppLayout from "@/layout/AppLayout";
import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <section id="services">
      <AppLayout>
        {/* Header */}
        <SectionTitle
          badge="Our Services"
          heading="Powerful AI Healthcare Features"
          description="We provide advanced AI-driven healthcare solutions to simplify medical interactions and improve patient experience."
        />

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:border-green-500 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-500"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-green-100 p-3 text-green-600 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </AppLayout>
    </section>
  );
};

export default Services;
