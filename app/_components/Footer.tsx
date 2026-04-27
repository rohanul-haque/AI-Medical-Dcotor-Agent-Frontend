import stethoscope from "@/assets/stethoscope.png";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { navLinks } from "@/data/navLink";
import AppLayout from "@/layout/AppLayout";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 pt-16 dark:bg-gray-900">
      <AppLayout>
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src={stethoscope} alt="logo" width={32} height={32} />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                <span className="text-green-600">Medi</span>Voice AI
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm text-gray-600 dark:text-gray-400">
              AI-powered voice assistant for smarter healthcare. Automate
              patient interactions and improve care delivery.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: FaFacebook, label: "Facebook" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaGithub, label: "GitHub" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={i}
                    href="#"
                    aria-label={item.label}
                    className="group flex h-8.75 w-8.75 items-center justify-center rounded-md border border-gray-300 bg-white transition-all duration-300 hover:scale-105 hover:border-green-500 hover:bg-green-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-500 dark:hover:bg-green-900/20"
                  >
                    <Icon
                      className="text-gray-500 transition-all duration-300 group-hover:scale-110 group-hover:text-green-500"
                      size={18}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Menu
            </h3>

            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 transition hover:text-green-500 dark:text-gray-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Stay Updated
            </h3>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Subscribe to get the latest updates and AI healthcare insights.
            </p>

            <form className="mt-5 flex flex-col gap-2 sm:flex-row">
              {/* accessibility */}
              <label htmlFor="email" className="sr-only">
                Email address
              </label>

              <InputGroup className="flex-1 rounded-md">
                <InputGroupInput
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                />
                <InputGroupAddon>
                  <Mail />
                </InputGroupAddon>
              </InputGroup>

              <Button
                type="submit"
                className="rounded-md bg-green-500 hover:bg-green-600 dark:text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t py-6 text-sm text-gray-500 md:flex-row dark:text-gray-400">
          <p>© {new Date().getFullYear()} MediVoice AI. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="hover:text-green-500">Privacy Policy</span>
            <span className="hover:text-green-500">Terms of Service</span>
          </div>
        </div>
      </AppLayout>
    </footer>
  );
};

export default Footer;
