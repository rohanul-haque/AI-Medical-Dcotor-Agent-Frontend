"use client";

import stethoscope from "@/assets/stethoscope.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/navLink";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const { setTheme, theme } = useTheme();

  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-300/60 backdrop-blur-md dark:border-gray-700/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={stethoscope} alt="logo" width={36} height={36} />
          <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:text-2xl dark:text-gray-300">
            <span className="text-green-500">Medi</span>Voice AI
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`text-gray-700 transition hover:text-green-500 dark:text-gray-300 dark:hover:text-green-500 ${
                  pathName === link.href
                    ? "font-medium text-green-500 dark:text-green-500"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-2">
          {theme === "light" ? (
            <Button
              onClick={() => setTheme("dark")}
              className="cursor-pointer"
              variant="ghost"
              size="lg"
            >
              <Sun />
            </Button>
          ) : (
            <Button
              onClick={() => setTheme("light")}
              className="cursor-pointer"
              variant="ghost"
              size="lg"
            >
              <Moon />
            </Button>
          )}

          <Button
            size="lg"
            className="hidden cursor-pointer bg-green-500 hover:bg-green-600 lg:block dark:text-white"
            onClick={() => router.push("/login")}
          >
            Create Account
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="cursor-pointer lg:hidden">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-50">
              <SheetHeader className="border-b border-b-gray-300/60 dark:border-gray-700/60">
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src={stethoscope}
                      alt="logo"
                      width={32}
                      height={32}
                    />
                    <span className="text-lg font-semibold">
                      <span className="text-green-500">Medi</span>Voice AI
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Links */}
              <ul className="flex flex-col gap-4 px-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className={`text-gray-700 transition hover:text-green-500 dark:text-gray-300 dark:hover:text-green-500 ${
                        pathName === link.href
                          ? "font-medium text-green-500"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-2 px-4">
                <Button
                  size={"lg"}
                  className="w-full cursor-pointer bg-green-500 hover:bg-green-600 dark:text-white"
                  onClick={() => router.push("/login")}
                >
                  Create Account
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
