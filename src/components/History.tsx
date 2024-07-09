import { toUserFriendlyAddress, useTonWallet } from "@tonconnect/ui-react";
import { CheckCircle, Copy } from "lucide-react";
import { useState } from "react";
import ReactTimeago from "react-timeago";
import { useCopyToClipboard } from "usehooks-ts";
import { ONE_TON } from "../constants";
import { DOUBLEIT_CONTRACT_ADDRESS } from "../environment";
import { Transaction, useTransactions } from "../hooks/useTransactions";
import { shortenAddress, walletAddressToEmoji } from "../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useToast } from "./ui/use-toast";
import tonviewerSvg from "/tonviewer.svg";

export default function History() {
  const wallet = useTonWallet();
  const shortFriendlyAddress =
    wallet && shortenAddress(toUserFriendlyAddress(wallet.account.address));
  const { txs } = useTransactions(DOUBLEIT_CONTRACT_ADDRESS);
  const [selectedTab, setSelectedTab] = useState<"all" | "mine">("all");

  return (
    <Tabs value={selectedTab} defaultValue="all" className="w-full">
      <TabsList className="flex w-fit mx-auto">
        <TabsTrigger value="all" onClick={() => setSelectedTab("all")}>
          All bets
        </TabsTrigger>
        {shortFriendlyAddress && (
          <TabsTrigger value="mine" onClick={() => setSelectedTab("mine")}>
            My bets
          </TabsTrigger>
        )}
      </TabsList>
      <TabsContent value={selectedTab}>
        <ul className="space-y-2 mt-4 pl-1 pr-3 max-h-64 overflow-auto">
          {txs
            ? txs.map((tx) => (
                <HistoryItem
                  transaction={tx}
                  key={tx.hash}
                  onlyMine={selectedTab === "mine"}
                />
              ))
            : Array.from({ length: 5 }).map((_, i) => (
                <li className="w-full flex items-center space-x-4" key={i}>
                  <Skeleton className="h-12 w-12 rounded-full shrink-0" />
                  <div className="w-full space-y-2">
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                </li>
              ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}

export function HistoryItem({
  transaction,
  onlyMine = false,
}: {
  transaction: Transaction;
  onlyMine?: boolean;
}) {
  const wallet = useTonWallet();
  const [, copyToClipboard] = useCopyToClipboard();
  const { toast } = useToast();

  if (onlyMine && transaction.account !== wallet?.account.address) return;

  const inValue = +transaction.in_msg.value;
  const outValue = +transaction.out_msgs[0]?.value || 0;
  const wonAmount = outValue - inValue;

  return (
    <li className="w-full flex items-center space-x-4">
      <Avatar>
        <AvatarFallback className="text-2xl">
          {walletAddressToEmoji(transaction.account)}
        </AvatarFallback>
      </Avatar>
      <div className="w-full flex flex-col justify-center text-sm">
        <p className="-ml-1">
          <code
            className="font-sans font-semibold hover:bg-foreground/10 active:bg-foreground/20 px-2 py-1 rounded-md group cursor-pointer hover:mr-1"
            onClick={() => {
              copyToClipboard(transaction.account);
              toast({
                description: (
                  <p>
                    <CheckCircle size={18} className="inline-block mr-1" />{" "}
                    Address was copied to clipboard
                  </p>
                ),
              });
            }}
          >
            {shortenAddress(toUserFriendlyAddress(transaction.account))}
            <Copy
              size={12}
              className="ml-2 mb-1 hidden group-hover:inline-block"
            />
          </code>
          {wonAmount > 0 ? (
            <span className="text-green-500">won</span>
          ) : (
            <span className="text-red-400">lost</span>
          )}{" "}
          <strong>{Math.abs(wonAmount) / ONE_TON} TON</strong>
        </p>
        <p className="text-foreground/50">
          <ReactTimeago date={transaction.now * 1000} />
        </p>
      </div>
      <a
        href={`https://testnet.tonviewer.com/transaction/${transaction.hash}`}
        target="_blank"
      >
        <Avatar className="h-10 w-10 p-2 bg-foreground/5 hover:bg-foreground/10">
          <AvatarImage src={tonviewerSvg} />
          <AvatarFallback>TV</AvatarFallback>
        </Avatar>
      </a>
    </li>
  );
}
