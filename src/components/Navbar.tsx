import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import { BicepsFlexed } from "lucide-react";

export default function Navbar() {
  const wallet = useTonWallet();

  return (
    <nav className="w-full flex justify-between items-center">
      <a href="/">
        <BicepsFlexed size={20} className="inline-block text-orange-600" />
      </a>

      {wallet && <TonConnectButton />}
    </nav>
  );
}
