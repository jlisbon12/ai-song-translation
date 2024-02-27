import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sanitize = (string: string) =>
  string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");