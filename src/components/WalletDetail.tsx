import {
  SendTransactionRequest,
  useTonAddress,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import { useState } from "react";
import { DOUBLEIT_CONTRACT_ADDRESS } from "../environment";

// In this example, we are using a predefined smart contract state initialization (`stateInit`)
// to interact with an "EchoContract". This contract is designed to send the value back to the sender,
// serving as a testing tool to prevent users from accidentally spending money.
const defaultTx: SendTransactionRequest = {
  // The transaction is valid for 10 minutes from now, in unix epoch seconds.
  validUntil: Math.floor(Date.now() / 1000) + 600,
  messages: [
    {
      address: DOUBLEIT_CONTRACT_ADDRESS,
      // Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
      amount: "5000000",
    },
  ],
};

export default function WalletDetail() {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const [tonConnectUi] = useTonConnectUI();
  const [tx] = useState(defaultTx);

  return (
    <div className="send-tx-form">
      <h3>Configure and send transaction</h3>
      <strong>
        {userFriendlyAddress} (<code>{rawAddress}</code>)
      </strong>

      <code className="max-w-full">{JSON.stringify(defaultTx)}</code>

      {rawAddress ? (
        <button onClick={() => tonConnectUi.sendTransaction(tx)}>
          Send transaction
        </button>
      ) : (
        <button onClick={() => tonConnectUi.openModal()}>
          Connect wallet to send the transaction
        </button>
      )}
    </div>
  );
}
