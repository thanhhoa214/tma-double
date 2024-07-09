import { useEffect, useRef, useState } from "react";

export const useTransactions = (address: string) => {
  const [txs, setTxs] = useState<Transaction[]>();
  const pre = useRef<string>();

  useEffect(() => {
    if (pre.current === address) return;
    pre.current = address;

    fetch(
      `https://testnet.toncenter.com/api/v3/transactions?account=${address}`
    )
      .then((r) => r.json())
      .then((response: V3TransactionsResponse) => {
        setTxs(response.transactions);
      });
  }, [address]);
  return { txs };
};

export interface V3TransactionsResponse {
  transactions: Transaction[];
  address_book: { [key: string]: AddressBook };
}

export interface AddressBook {
  user_friendly: string;
}

export interface Transaction {
  account: string;
  hash: string;
  lt: string;
  now: number;
  orig_status: string;
  end_status: Status;
  total_fees: string;
  prev_trans_hash: string;
  prev_trans_lt: string;
  description: Description;
  block_ref: BlockRef;
  in_msg: Msg;
  out_msgs: Msg[];
  account_state_before: AccountState;
  account_state_after: AccountState;
  mc_block_seqno: number;
}

export interface AccountState {
  hash: string;
  balance: null | string;
  account_status: Status | null;
  frozen_hash: null;
  code_hash: CodeHash | null;
  data_hash: DataHash | null;
}

export enum Status {
  Active = "active",
}

export enum CodeHash {
  YMLETzuYhou8W2UDiYaXhyojrJxFZ72LCS8Ckw7So = "yMLe+TzuYhou8w2UDiYa+xhyojrJxFZ72lCS8ckw7so=",
}

export enum DataHash {
  RBhupvKh2MSP5NgQK5GEpAJq5YHaZpbMyqRpxbsS2G = "rBhupvKh2mSP5Ng+qK5GEpAJq5YHaZpbMyqRpxbsS2g=",
}

export interface BlockRef {
  workchain: number;
  shard: string;
  seqno: number;
}

export interface Description {
  type: string;
  bounce?: Bounce;
  aborted: boolean;
  credit_ph: CreditPh;
  destroyed: boolean;
  compute_ph: ComputePh;
  storage_ph: StoragePh;
  credit_first: boolean;
  action?: Action;
}

export interface Action {
  valid: boolean;
  success: boolean;
  no_funds: boolean;
  result_code: number;
  tot_actions: number;
  msgs_created: number;
  spec_actions: number;
  tot_msg_size: MsgSize;
  status_change: string;
  total_fwd_fees?: string;
  skipped_actions: number;
  action_list_hash: string;
  total_action_fees?: string;
}

export interface MsgSize {
  bits: string;
  cells: string;
}

export interface Bounce {
  type: string;
  fwd_fees: string;
  msg_fees: string;
  msg_size: MsgSize;
}

export interface ComputePh {
  mode: number;
  type: string;
  success: boolean;
  gas_fees: string;
  gas_used: string;
  vm_steps: number;
  exit_code: number;
  gas_limit: string;
  msg_state_used: boolean;
  account_activated: boolean;
  vm_init_state_hash: string;
  vm_final_state_hash: string;
}

export interface CreditPh {
  credit: string;
}

export interface StoragePh {
  status_change: string;
  storage_fees_collected: string;
  storage_fees_due?: string;
}

export interface Msg {
  hash: string;
  source: string;
  destination: string;
  value: string;
  fwd_fee: string;
  ihr_fee: string;
  created_lt: string;
  created_at: string;
  opcode: null | string;
  ihr_disabled: boolean;
  bounce: boolean;
  bounced: boolean;
  import_fee: null;
  message_content: MessageContent;
  init_state: InitState | null;
}

export interface InitState {
  hash: string;
  body: string;
}

export interface MessageContent {
  hash: string;
  body: string;
  decoded: Decoded | null;
}

export interface Decoded {
  type: string;
  comment: string;
}
