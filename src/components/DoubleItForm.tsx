import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { BicepsFlexed, Wallet } from "lucide-react";
import { FormEventHandler, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";
import { DOUBLEIT_CONTRACT_ADDRESS } from "../environment";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

const oneTon = 1_000_000_000;

export default function DoubleItForm() {
  const predefinedNumbers = [0.5, 1, 5, 10, 50, 100];
  const [amount, setAmount] = useState(1);
  const { width, height } = useWindowSize();
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();
  const [showConfetti, setShowConfetti] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const nanoTon = amount * oneTon;
    const response = await tonConnectUi.sendTransaction({
      validUntil: Math.floor(Date.now() / 1000) + 600,
      messages: [{ address: DOUBLEIT_CONTRACT_ADDRESS, amount: nanoTon + "" }],
    });
    console.log(response);
    setShowConfetti(true);
  };

  return (
    <Card className="bg-orange-950/5 py-2 md:py-4">
      <form onSubmit={onSubmit} className="space-y-5 p-5 text-center">
        <BicepsFlexed size={100} className="inline-block" />
        <p>Double this amount, send to my account 🚀</p>
        <Input
          placeholder="0.0"
          type="number"
          min={0}
          step={1.0}
          value={amount}
          onChange={(e) => setAmount(Math.max(+e.target.value || 0, 0))}
          className="text-center"
        />
        <ul className="space-x-2">
          {predefinedNumbers.map((number) => (
            <Button
              key={number}
              variant="outline"
              type="button"
              onClick={() => setAmount(number)}
              className="p-2 h-8 min-w-8 md:h-10 md:p-3"
            >
              {number}
            </Button>
          ))}
        </ul>
        <div className="*:w-4/5 *:font-semibold *:h-12 *:bg-gradient-to-br *:from-orange-500 *:to-orange-800">
          {wallet ? (
            <Button>Shake</Button>
          ) : (
            <Button type="button" onClick={() => tonConnectUi.openModal()}>
              <Wallet className="mr-2" /> Connect wallet to shake
            </Button>
          )}
        </div>
        {showConfetti && (
          <Confetti width={width} height={height} className="z-50" />
        )}
      </form>
    </Card>
  );
}
