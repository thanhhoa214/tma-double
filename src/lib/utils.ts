import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Transaction } from "../hooks/useTransactions";

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
  return hexToEmoji[walletAddress.charCodeAt(walletAddress.length - 1) % 16];
}

export function shortenAddress(address: string) {
  if (address.length < 10) return address; // Return the original address if it's too short to shorten
  const firstPart = address.slice(0, 6);
  const lastPart = address.slice(-4);
  return `${firstPart}...${lastPart}`;
}

export function ignoreCaseEqual(a: string, b: string) {
  return a.toLowerCase() === b.toLowerCase();
}

export function getBetResult(tx: Transaction) {
  const inValue = +tx.in_msg.value;
  const outValue = +tx.out_msgs[0]?.value;
  const wonAmount = outValue - inValue;
  return wonAmount;
}
