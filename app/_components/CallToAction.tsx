import { Button } from "@/components/ui/button";
import AppLayout from "@/layout/AppLayout";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section>
      <AppLayout>
        <div className="rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 p-10 text-center">
          {/* Title */}
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Start Your AI Healthcare Journey Today
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/90">
            Our smarter healthcare with AI-powered voice consultation. Get
            instant insights, connect with doctors, and take control of your
            health.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant={"secondary"} size="lg" className="px-8">
              Get Started
            </Button>

            <Button className="px-8 text-white" size="lg" variant="ghost">
              Learn More <ArrowRight />
            </Button>
          </div>
        </div>
      </AppLayout>
    </section>
  );
};

export default CTA;
