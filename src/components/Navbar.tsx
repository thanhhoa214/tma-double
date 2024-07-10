import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import { BicepsFlexed } from "lucide-react";

export default function Navbar() {
  const wallet = useTonWallet();

  return (
    <nav className="w-full flex justify-between items-center">
      <a href="/" className="ml-4">
        <BicepsFlexed size={28} className="inline-block text-orange-600" />
      </a>

      {wallet && (
        <TonConnectButton className="border rounded-xl border-orange-400 overflow-hidden scale-75" />
      )}
    </nav>
  );
}
