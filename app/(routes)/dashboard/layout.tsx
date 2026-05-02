import Navbar from "@/app/_components/Navbar";
import Sidebar from "@/app/_components/Sidebar";
import AppLayout from "@/layout/AppLayout";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Navbar />
      <AppLayout>
        <div className="flex">
          {/* sidebar */}
          <div className="w-full max-w-50 border-r border-r-gray-300">
            <Sidebar />
          </div>
          {/* children */}
          <div className="w-full">{children}</div>
        </div>
      </AppLayout>
    </main>
  );
};

export default DashboardLayout;
