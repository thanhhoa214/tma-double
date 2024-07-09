import { toUserFriendlyAddress } from "@tonconnect/ui-react";
import { CheckCircle, Copy } from "lucide-react";
import { useCopyToClipboard } from "usehooks-ts";
import { shortenAddress, walletAddressToEmoji } from "../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useToast } from "./ui/use-toast";

const sampleAddress = `0:0000000000000000000000000000000000000000000000000000000000000000`;

export default function History() {
  const [, copyToClipboard] = useCopyToClipboard();
  const { toast } = useToast();

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="flex w-fit mx-auto">
        <TabsTrigger value="all">All bets</TabsTrigger>
        <TabsTrigger value="my">My bets</TabsTrigger>
        <TabsTrigger value="winrate">My winrate</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <ul className="space-y-2 mt-4">
          <li className="w-full flex items-center space-x-4">
            <Avatar>
              <AvatarFallback className="text-2xl">
                {walletAddressToEmoji(sampleAddress)}
              </AvatarFallback>
            </Avatar>
            <div className="w-full flex flex-col justify-center text-sm">
              <p className="-ml-1">
                <code
                  className="font-sans font-semibold hover:bg-foreground/10 active:bg-foreground/20 px-2 py-1 rounded-md group cursor-pointer"
                  onClick={() => {
                    copyToClipboard(sampleAddress);
                    toast({
                      description: (
                        <p>
                          <CheckCircle
                            size={18}
                            className="inline-block mr-1"
                          />{" "}
                          Address was copied to clipboard
                        </p>
                      ),
                    });
                  }}
                >
                  {shortenAddress(toUserFriendlyAddress(sampleAddress))}
                  <Copy
                    size={12}
                    className="ml-2 mb-1 hidden group-hover:inline-block"
                  />
                </code>{" "}
                <span className="text-red-300">lost</span>{" "}
                <strong>{2.0} TON</strong>
              </p>
              <p className="text-foreground/50">Yesterday, 21-01-2024</p>
            </div>
            <a href={`https://tonviewer.com/${sampleAddress}`} target="_blank">
              <Avatar className="h-10 w-10 p-2 bg-foreground/5 hover:bg-foreground/10">
                <AvatarImage src="/tonviewer.svg" />
                <AvatarFallback>TV</AvatarFallback>
              </Avatar>
            </a>
          </li>
          <li className="w-full flex items-center space-x-4">
            <Avatar>
              <AvatarFallback className="text-2xl">
                {walletAddressToEmoji("asdsd")}
              </AvatarFallback>
            </Avatar>
            <div className="w-full flex flex-col justify-center text-sm">
              <p className="-ml-1">
                <code className="font-sans font-semibold bg-foreground/10 px-2 py-0.5 rounded-md">
                  {shortenAddress(toUserFriendlyAddress(sampleAddress))}
                </code>{" "}
                <span className="text-green-500">won</span>{" "}
                <strong>{2.0} TON</strong>
              </p>
              <p className="text-foreground/50">Yesterday, 21-01-2024</p>
            </div>
            <a href={`https://tonviewer.com/${sampleAddress}`} target="_blank">
              <Avatar className="h-10 w-10 p-2 bg-foreground/5 hover:bg-foreground/10">
                <AvatarImage src="/tonviewer.svg" />
                <AvatarFallback>TV</AvatarFallback>
              </Avatar>
            </a>
          </li>
          <li className="w-full flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full shrink-0" />
            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-full" />
            </div>
            <Skeleton className="h-10 w-10 rounded-full shrink-0" />
          </li>
        </ul>
      </TabsContent>
      <TabsContent value="my">Change your password here.</TabsContent>
    </Tabs>
  );
}
