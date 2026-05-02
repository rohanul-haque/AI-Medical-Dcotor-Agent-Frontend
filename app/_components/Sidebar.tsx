"use client";

import { FileText, LayoutDashboard, Settings, Stethoscope } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Doctors",
    href: "/dashboard/doctors",
    icon: Stethoscope,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-full pt-3 pr-3">
      {/* Menu List */}
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-500 hover:text-white"
                } `}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
