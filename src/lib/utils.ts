import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const hexToEmoji = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
];
export function walletAddressToEmoji(walletAddress: string) {
  return hexToEmoji[walletAddress.charCodeAt(0) % 16];
}

export function shortenAddress(address: string) {
  if (address.length < 10) return address; // Return the original address if it's too short to shorten
  const firstPart = address.slice(0, 6);
  const lastPart = address.slice(-4);
  return `${firstPart}...${lastPart}`;
}
