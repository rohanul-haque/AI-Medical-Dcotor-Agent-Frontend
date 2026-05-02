"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import axiosInstance from "@/utils/axios";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const AddNewSessionDialog = () => {
  const [note, setNote] = useState<string>("");
  const [suggestedDoctors, setSuggestedDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const isDoctorStep = suggestedDoctors.length > 0;

  const handleOnClickNext = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.post("suggest/doctors", {
        notes: note,
      });

      if (data.success) {
        setSuggestedDoctors(data.doctors);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const startConsultation = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.post("session-chat/create", {
        notes: note,
        selectedDoctor,
      });

      console.log(data);

      if (data.success) {
        router.push(`medical-agent/${data?.sessionChat?.sessionId}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500" size="lg">
          + Consult with Doctor
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-xl font-semibold">
            Add Basic Details
          </DialogTitle>

          <DialogDescription className="text-sm text-gray-600">
            Add your symptoms or any relevant details to help the doctor
            understand your condition better.
          </DialogDescription>
        </DialogHeader>

        {/* Step Content */}
        {!isDoctorStep ? (
          <Textarea
            placeholder="e.g. I have had a fever for 2 days..."
            className="h-35 resize-none"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {suggestedDoctors?.map((doctor, index) => (
              <div
                key={index}
                className={`flex cursor-pointer flex-col items-center rounded-lg border p-2 text-center duration-300 hover:scale-[1.02] ${
                  selectedDoctor?.id === doctor.id ? "border-green-500" : ""
                }`}
                onClick={() => setSelectedDoctor(doctor)}
              >
                <img
                  src={
                    doctor?.image || "http://localhost:8080/images/doctor1.png"
                  }
                  alt={doctor.specialist || "doctor"}
                  className="F h-[50px] w-[50px] rounded-full object-cover"
                />
                <h1 className="text-lg font-medium">{doctor.specialist}</h1>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {doctor.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          {/* Loading Button */}
          {loading && (
            <Button disabled className="bg-green-500">
              Loading...
            </Button>
          )}

          {/* Next Button */}
          {!loading && !isDoctorStep && (
            <Button
              onClick={handleOnClickNext}
              disabled={!note}
              className="flex items-center gap-2 bg-green-500"
            >
              Next <ArrowRight size={16} />
            </Button>
          )}

          {/* Submit Button */}
          {!loading && isDoctorStep && (
            <Button
              onClick={startConsultation}
              disabled={!selectedDoctor}
              className="flex items-center gap-2 bg-green-500"
            >
              Submit <ArrowRight size={16} />
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewSessionDialog;
