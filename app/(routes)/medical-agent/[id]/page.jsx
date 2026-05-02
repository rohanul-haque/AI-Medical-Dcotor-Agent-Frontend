"use client";

import Navbar from "@/app/_components/Navbar";
import doctor from "@/assets/doctor1.png";
import { Button } from "@/components/ui/button";
import AppLayout from "@/layout/AppLayout";
import { PhoneCall, PhoneOff } from "lucide-react";
import Image from "next/image";

const CallPage = () => {
  const isConnected = true;

  return (
    <>
      <Navbar />
      <AppLayout>
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium ${
                isConnected
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-500"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isConnected ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
              {isConnected ? "Connected" : "Not Connected"}
            </div>

            <span className="text-sm font-semibold text-gray-600">00:00</span>
          </div>

          {/* Doctor Section */}
          <div className="my-14 flex flex-col items-center justify-center text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 blur-xl"></div>

              <Image
                src={doctor}
                alt="doctor"
                width={110}
                height={110}
                className="relative h-[110px] w-[110px] rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>

            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              General Physician
            </h2>
            <p className="text-sm text-gray-500">AI Medical Voice Agent</p>
          </div>

          {/* Chat Section */}
          <div className="mx-auto max-w-2xl space-y-4">
            {/* Agent Message */}
            <div className="flex justify-start">
              <div className="max-w-xs rounded-2xl rounded-bl-none bg-gray-100 px-4 py-2 text-sm text-gray-700 shadow">
                Hello! How can I help you today?
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-xs rounded-2xl rounded-br-none bg-green-500 px-4 py-2 text-sm text-white shadow">
                I have a headache since morning.
              </div>
            </div>
          </div>

          {/* Call Button */}
          <div className="mt-12 flex justify-center">
            {isConnected ? (
              <Button
                className="flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-white hover:bg-red-600"
                size="lg"
              >
                <PhoneOff size={18} />
                End Call
              </Button>
            ) : (
              <Button
                className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-white hover:bg-green-600"
                size="lg"
              >
                <PhoneCall size={18} />
                Start Call
              </Button>
            )}
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default CallPage;
