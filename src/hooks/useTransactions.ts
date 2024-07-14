import { useEffect, useRef, useState } from "react";
import { getApiClient } from "../lib/toncenter";
import { Components } from "../toncenter";

export const useTransactions = (address?: string) => {
  const [txs, setTxs] = useState<Components.Schemas.TransactionList>();
  const pre = useRef<string>();

  useEffect(() => {
    if (!address) return;
    if (pre.current === address) return;
    pre.current = address;

    (async () => {
      const client = await getApiClient();
      const response = await client.get_transactions_api_v3_transactions_get({
        account: [address],
      });
      setTxs(response.data);
    })();
  }, [address]);
  return { txs };
};
