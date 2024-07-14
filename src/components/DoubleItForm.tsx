import { useQuery } from "@tanstack/react-query";
import { beginCell, Builder } from "@ton/ton";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { BicepsFlexed, Loader2, Wallet } from "lucide-react";
import { FormEventHandler, useEffect, useState } from "react";
import Confetti from "react-confetti";
import TonWeb from "tonweb";
import { useWindowSize } from "usehooks-ts";
import { DOUBLEIT_CONTRACT_ADDRESS } from "../environment";
import { fetchTransactions } from "../hooks/useTransactions";
import { getBetResult } from "../lib/utils";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

function storeDoubleIt() {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1775589875, 32);
    b_0.storeUint(0, 64);
  };
}

export default function DoubleItForm() {
  const predefinedNumbers = [0.5, 1, 5, 10, 50, 100];
  const [amount, setAmount] = useState(1);
  const { width, height } = useWindowSize();
  const { toast } = useToast();
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();
  const [showConfetti, setShowConfetti] = useState(false);
  const [latestHash, setLatestHash] = useState<string>();
  const txsQuery = useQuery({
    queryKey: ["transactions", DOUBLEIT_CONTRACT_ADDRESS],
    queryFn: () => fetchTransactions(DOUBLEIT_CONTRACT_ADDRESS),
  });

  useEffect(() => {
    if (!latestHash) return;

    const interval = setInterval(async () => {
      if (!wallet) return;
      const response = await fetchTransactions(wallet.account.address);
      const tx = response.transactions.find(
        (tx) => tx.in_msg?.hash === latestHash
      );
      if (tx) {
        const outMsgHash = tx.out_msgs[0]?.hash;
        clearInterval(interval);
        console.log(outMsgHash);

        const contractTxs = await fetchTransactions(DOUBLEIT_CONTRACT_ADDRESS);
        const contractTx = contractTxs?.transactions.find(
          (tx) => tx.in_msg.hash === outMsgHash
        );
        setLatestHash(undefined);
        if (!contractTx) return;
        const result = getBetResult(contractTx);
        if (result > 0) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        } else {
          toast({
            description: `😢 You lost ${Math.abs(
              +TonWeb.utils.fromNano(`${result}`)
            )} the bet`,
            variant: "destructive",
          });
        }
      }
    }, 3000);
  }, [wallet, latestHash, txsQuery, toast]);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!wallet) return;
    if (latestHash) return;
    const nanoTon = TonWeb.utils.toNano(amount);
    const body = beginCell().store(storeDoubleIt()).endCell();

    try {
      const response = await tonConnectUi.sendTransaction({
        validUntil: Math.floor(Date.now() / 1000) + 600,
        messages: [
          {
            address: DOUBLEIT_CONTRACT_ADDRESS,
            amount: nanoTon + "",
            payload: body.toBoc().toString("base64"),
          },
        ],
      });

      const msgBody = TonWeb.utils.base64ToBytes(response.boc);
      const hash = await TonWeb.boc.Cell.fromBoc(msgBody)[0].hash();
      setLatestHash(TonWeb.utils.bytesToBase64(hash));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="bg-orange-950/5 py-2 md:py-4">
      <form onSubmit={onSubmit} className="p-5 text-center">
        <BicepsFlexed size={60} className="inline-block" />
        <p className="text-foreground/70 mb-2 mt-4">
          Double this, send to my account 🚀
        </p>
        <Input
          placeholder="0.0"
          type="number"
          min={0}
          step={0.01}
          value={amount}
          onChange={(e) => setAmount(Math.max(+e.target.value || 0, 0))}
          className="text-center mb-2"
        />
        <ul className="space-x-2 mb-8">
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
        <div className="*:w-4/5 *:font-semibold *:h-12 *:bg-gradient-to-br *:from-orange-500 *:to-orange-800 *:text-lg">
          {wallet ? (
            <Button className="biorhyme-semibold">
              {latestHash ? <Loader2 className="animate-spin" /> : "Shake"}
            </Button>
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
