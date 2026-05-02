"use client";

import login_illustrator from "@/assets/login.svg";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import axiosInstance from "@/utils/axios";
import axios from "axios";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const loginHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      if (data.success) {
        setEmail("");
        setPassword("");

        toast.success(data.message);
        router.push("/dashboard");
      }
    } catch (error: unknown) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Login failed");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-4 py-10 md:py-0 dark:bg-gray-950">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white md:grid-cols-2 dark:border-gray-800 dark:bg-gray-900">
        {/* Illustration */}
        <div className="hidden items-center justify-center bg-gray-50 p-8 md:flex dark:bg-gray-800">
          <Image
            src={login_illustrator}
            alt="Login Illustration"
            className="h-auto w-full max-w-md"
            priority
          />
        </div>

        {/* RIGHT: Form */}
        <div className="p-6 sm:p-8 md:p-10">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
            Login to your <span className="text-green-500">MediVoice AI</span>{" "}
            account
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Enter your email and password to continue
          </p>

          {/* Form */}
          <form onSubmit={loginHandler} className="mt-8 space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label>Email</Label>
              <InputGroup>
                <InputGroupInput
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <InputGroupAddon>
                  <Lock size={18} />
                </InputGroupAddon>
              </InputGroup>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end text-sm">
              <Link
                href="/forgot-password"
                className="text-green-600 transition hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              size={"lg"}
              disabled={loading}
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
            <span className="text-xs text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
          </div>

          {/* Google Login */}
          <Button
            variant="outline"
            className="flex w-full items-center justify-center gap-3 py-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FcGoogle size={20} />
            Continue with Google
          </Button>

          {/* Signup */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-green-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
