"use client";

import signup_illustrator from "@/assets/signup.svg";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-4 py-10 md:py-0 dark:bg-gray-950">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white md:grid-cols-2 dark:border-gray-800 dark:bg-gray-900">
        {/* Form */}
        <div className="p-6 sm:p-8 md:p-10">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
            Create your <span className="text-green-500">MediVoice AI</span>{" "}
            account
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Fill in your details to get started
          </p>

          {/* Form */}
          <form className="mt-8 space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <Label>Full Name</Label>
              <InputGroup>
                <InputGroupInput type="text" placeholder="John Doe" required />
                <InputGroupAddon>
                  <User size={18} />
                </InputGroupAddon>
              </InputGroup>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label>Email</Label>
              <InputGroup>
                <InputGroupInput
                  type="email"
                  placeholder="you@example.com"
                  required
                />
                <InputGroupAddon>
                  <Mail size={18} />
                </InputGroupAddon>
              </InputGroup>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label>Password</Label>
              <InputGroup>
                <InputGroupInput
                  type="password"
                  placeholder="••••••••"
                  required
                />
                <InputGroupAddon>
                  <Lock size={18} />
                </InputGroupAddon>
              </InputGroup>
            </div>

            {/* Submit */}
            <Button
              size={"lg"}
              className="w-full bg-green-500 hover:bg-green-600"
            >
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
            <span className="text-xs text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
          </div>

          {/* Google */}
          <Button
            variant="outline"
            className="flex w-full items-center justify-center gap-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FcGoogle size={20} />
            Continue with Google
          </Button>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-green-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
        {/* Illustration  */}
        <div className="hidden items-center justify-center bg-gray-50 p-8 md:flex dark:bg-gray-800">
          <Image
            src={signup_illustrator}
            alt="Signup Illustration"
            className="h-auto w-full max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;
