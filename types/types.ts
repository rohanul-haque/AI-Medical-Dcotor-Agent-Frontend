import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export type NavLink = {
  id: number;
  name: string;
  href: string;
};

export type Testimonial = {
  name: string;
  role: string;
  image: StaticImageData;
  review: string;
};

export type Feature = {
  id: number;
  title: string;
};

export type Step = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};
