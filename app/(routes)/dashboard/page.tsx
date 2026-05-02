import AddNewSessionDialog from "@/app/_components/AddNewSessionDialog";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Stethoscope, UserRound } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6 p-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Dashboard</h2>
        <AddNewSessionDialog />
      </div>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Reports */}
        <Card className="rounded-xl shadow-sm transition hover:shadow-md">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-gray-50">
              <FileText className="text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Reports</p>
              <h3 className="text-2xl font-semibold">8</h3>
            </div>
          </CardContent>
        </Card>

        {/* Consultations */}
        <Card className="rounded-xl shadow-sm transition hover:shadow-md">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-gray-50">
              <Stethoscope className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Consultations</p>
              <h3 className="text-2xl font-semibold">5</h3>
            </div>
          </CardContent>
        </Card>

        {/* Doctors Available */}
        <Card className="rounded-xl shadow-sm transition hover:shadow-md">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-gray-50">
              <UserRound className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Doctors Available</p>
              <h3 className="text-2xl font-semibold">24</h3>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
