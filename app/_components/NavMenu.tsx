"use client";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navLink";
import { Menu, Sun, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden items-center gap-6 md:flex">
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="text-gray-600 transition hover:text-green-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Sun />
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            Create Account
          </Button>
        </div>
      </div>

      {/* Mobile Button */}
      <button onClick={() => setOpen(true)} className="md:hidden">
        <Menu />
      </button>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute top-0 right-0 h-full w-[260px] bg-white p-5 shadow-lg">
            {/* Close */}
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* Links */}
            <ul className="mt-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-700 hover:text-green-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6 flex flex-col gap-3">
              <Button variant="outline">Toggle Theme</Button>
              <Button className="bg-green-600">Create Account</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavMenu;
