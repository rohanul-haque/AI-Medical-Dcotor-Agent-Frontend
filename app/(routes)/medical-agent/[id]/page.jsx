"use client";

import { Button } from "@/components/ui/button";
import { Mic, MicOff, Phone } from "lucide-react";

const CallPage = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-50">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b bg-white p-4">
        <div>
          <h2 className="text-lg font-semibold">AI Doctor Call</h2>
          <p className="text-sm text-gray-500">
            Connected • 02:14
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Doctor Info */}
      <div className="flex flex-col items-center gap-2 py-6">
        <img
          src="http://localhost:8080/images/doctor1.png"
          className="h-20 w-20 rounded-full object-cover"
          alt="doctor"
        />
        <h3 className="text-lg font-semibold">Cardiologist</h3>
        <p className="text-sm text-gray-500">
          AI Medical Assistant
        </p>
      </div>

      {/* Chat Section */}
      <div className="flex-1 space-y-3 overflow-y-auto px-4 pb-4">
        
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-xs rounded-lg bg-green-500 px-4 py-2 text-white">
            I have chest pain for 2 days
          </div>
        </div>

        {/* Agent message */}
        <div className="flex justify-start">
          <div className="max-w-xs rounded-lg bg-white px-4 py-2 shadow">
            You may need to consult a cardiologist. Any breathing issues?
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-xs rounded-lg bg-green-500 px-4 py-2 text-white">
            Yes, sometimes I feel shortness of breath
          </div>
        </div>

        {/* Agent message */}
        <div className="flex justify-start">
          <div className="max-w-xs rounded-lg bg-white px-4 py-2 shadow">
            I recommend immediate consultation. Please avoid stress.
          </div>
        </div>

      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-center gap-6 border-t bg-white p-4">
        
        {/* Mic Button */}
        <Button className="rounded-full bg-gray-200 text-black">
          <Mic />
        </Button>

        {/* End Call */}
        <Button className="rounded-full bg-red-500 hover:bg-red-600">
          <Phone className="rotate-[135deg]" />
        </Button>

        {/* Mic Off */}
        <Button className="rounded-full bg-gray-200 text-black">
          <MicOff />
        </Button>
      </div>
    </div>
  );
};

export default CallPage;