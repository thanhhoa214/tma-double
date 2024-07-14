import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         * Account
         */
        export interface Account {
            /**
             * Balance
             */
            balance: string;
            /**
             * Code
             */
            code: /* Code */ string | null;
            /**
             * Data
             */
            data: /* Data */ string | null;
            /**
             * Last Transaction Lt
             */
            last_transaction_lt: /* Last Transaction Lt */ string | null;
            /**
             * Last Transaction Hash
             */
            last_transaction_hash: /* Last Transaction Hash */ string | null;
            /**
             * Frozen Hash
             */
            frozen_hash: /* Frozen Hash */ string | null;
            status: /* AccountStatus */ AccountStatus;
        }
        /**
         * AccountState
         */
        export interface AccountState {
            /**
             * Hash
             */
            hash: string;
            /**
             * Balance
             */
            balance: /* Balance */ string | null;
            account_status: /* AccountStatus */ AccountStatus | null;
            /**
             * Frozen Hash
             */
            frozen_hash: /* Frozen Hash */ string | null;
            /**
             * Code Hash
             */
            code_hash: /* Code Hash */ string | null;
            /**
             * Data Hash
             */
            data_hash: /* Data Hash */ string | null;
        }
        /**
         * AccountStatus
         */
        export type AccountStatus = "uninit" | "frozen" | "active" | "nonexist";
        /**
         * AddressBookEntry
         */
        export interface AddressBookEntry {
            /**
             * User Friendly
             */
            user_friendly: string;
        }
        /**
         * BinaryComment
         */
        export interface BinaryComment {
            /**
             * Type
             */
            type?: "binary_comment";
            /**
             * Hex Comment
             */
            hex_comment: string;
        }
        /**
         * Block
         */
        export interface Block {
            /**
             * Workchain
             */
            workchain: number;
            /**
             * Shard
             */
            shard: string;
            /**
             * Seqno
             */
            seqno: number;
            /**
             * Root Hash
             */
            root_hash: string;
            /**
             * File Hash
             */
            file_hash: string;
            /**
             * Global Id
             */
            global_id: number;
            /**
             * Version
             */
            version: number;
            /**
             * After Merge
             */
            after_merge: boolean;
            /**
             * Before Split
             */
            before_split: boolean;
            /**
             * After Split
             */
            after_split: boolean;
            /**
             * Want Merge
             */
            want_merge: boolean;
            /**
             * Want Split
             */
            want_split: boolean;
            /**
             * Key Block
             */
            key_block: boolean;
            /**
             * Vert Seqno Incr
             */
            vert_seqno_incr: boolean;
            /**
             * Flags
             */
            flags: number;
            /**
             * Gen Utime
             */
            gen_utime: string;
            /**
             * Start Lt
             */
            start_lt: string;
            /**
             * End Lt
             */
            end_lt: string;
            /**
             * Validator List Hash Short
             */
            validator_list_hash_short: number;
            /**
             * Gen Catchain Seqno
             */
            gen_catchain_seqno: number;
            /**
             * Min Ref Mc Seqno
             */
            min_ref_mc_seqno: number;
            /**
             * Prev Key Block Seqno
             */
            prev_key_block_seqno: number;
            /**
             * Vert Seqno
             */
            vert_seqno: number;
            /**
             * Master Ref Seqno
             */
            master_ref_seqno: /* Master Ref Seqno */ number | null;
            /**
             * Rand Seed
             */
            rand_seed: string;
            /**
             * Created By
             */
            created_by: string;
            /**
             * Tx Count
             */
            tx_count: /* Tx Count */ number | null;
            masterchain_block_ref: /* BlockReference */ BlockReference | null;
            /**
             * Prev Blocks
             */
            prev_blocks: /* BlockReference */ BlockReference[];
        }
        /**
         * BlockList
         */
        export interface BlockList {
            /**
             * Blocks
             */
            blocks: /* Block */ Block[];
        }
        /**
         * BlockReference
         */
        export interface BlockReference {
            /**
             * Workchain
             */
            workchain: number;
            /**
             * Shard
             */
            shard: string;
            /**
             * Seqno
             */
            seqno: number;
        }
        /**
         * EstimateFeeRequest
         */
        export interface EstimateFeeRequest {
            /**
             * Address
             */
            address: string;
            /**
             * Body
             */
            body: string;
            /**
             * Init Code
             */
            init_code?: /* Init Code */ string | null;
            /**
             * Init Data
             */
            init_data?: /* Init Data */ string | null;
            /**
             * Ignore Chksig
             */
            ignore_chksig?: boolean;
        }
        /**
         * EstimateFeeResponse
         */
        export interface EstimateFeeResponse {
            source_fees: /* Fee */ Fee;
            /**
             * Destination Fees
             */
            destination_fees: /* Fee */ Fee[];
        }
        /**
         * ExternalMessage
         * Message in base64 boc serialized format.
         */
        export interface ExternalMessage {
            /**
             * Boc
             * example:
             * te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg
             */
            boc: string;
        }
        /**
         * Fee
         */
        export interface Fee {
            /**
             * In Fwd Fee
             */
            in_fwd_fee: number;
            /**
             * Storage Fee
             */
            storage_fee: number;
            /**
             * Gas Fee
             */
            gas_fee: number;
            /**
             * Fwd Fee
             */
            fwd_fee: number;
        }
        /**
         * GetMethodParameter
         */
        export interface GetMethodParameterInput {
            type: /* GetMethodParameterType */ GetMethodParameterType;
            /**
             * Value
             */
            value: /* Value */ /* GetMethodParameter */ GetMethodParameterInput[] | string | null;
        }
        /**
         * GetMethodParameter
         */
        export interface GetMethodParameterOutput {
            type: /* GetMethodParameterType */ GetMethodParameterType;
            /**
             * Value
             */
            value: /* Value */ /* GetMethodParameter */ GetMethodParameterOutput[] | string | null;
        }
        /**
         * GetMethodParameterType
         */
        export type GetMethodParameterType = "cell" | "slice" | "num" | "list" | "tuple" | "unsupported_type";
        /**
         * HTTPValidationError
         */
        export interface HTTPValidationError {
            /**
             * Detail
             */
            detail?: /* ValidationError */ ValidationError[];
        }
        /**
         * JettonBurn
         */
        export interface JettonBurn {
            /**
             * Query Id
             */
            query_id: string;
            /**
             * Owner
             */
            owner: string;
            /**
             * Jetton Master
             */
            jetton_master: string;
            /**
             * Transaction Hash
             */
            transaction_hash: string;
            /**
             * Transaction Lt
             */
            transaction_lt: string;
            /**
             * Transaction Now
             */
            transaction_now: number;
            /**
             * Amount
             */
            amount: string;
            /**
             * Response Destination
             */
            response_destination: /* Response Destination */ string | null;
            /**
             * Custom Payload
             */
            custom_payload: /* Custom Payload */ string | null;
        }
        /**
         * JettonBurnList
         */
        export interface JettonBurnList {
            /**
             * Jetton Burns
             */
            jetton_burns: /* JettonBurn */ JettonBurn[];
        }
        /**
         * JettonMaster
         */
        export interface JettonMaster {
            /**
             * Address
             */
            address: string;
            /**
             * Total Supply
             */
            total_supply: string;
            /**
             * Mintable
             */
            mintable: boolean;
            /**
             * Admin Address
             */
            admin_address: /* Admin Address */ string | null;
            /**
             * Last Transaction Lt
             */
            last_transaction_lt: string;
            /**
             * Jetton Wallet Code Hash
             */
            jetton_wallet_code_hash: string;
            /**
             * Jetton Content
             */
            jetton_content: any;
            /**
             * Code Hash
             */
            code_hash: string;
            /**
             * Data Hash
             */
            data_hash: string;
        }
        /**
         * JettonMasterList
         */
        export interface JettonMasterList {
            /**
             * Jetton Masters
             */
            jetton_masters: /* JettonMaster */ JettonMaster[];
        }
        /**
         * JettonTransfer
         */
        export interface JettonTransfer {
            /**
             * Query Id
             */
            query_id: string;
            /**
             * Source
             */
            source: /* Source */ string | null;
            /**
             * Destination
             */
            destination: /* Destination */ string | null;
            /**
             * Amount
             */
            amount: string;
            /**
             * Source Wallet
             */
            source_wallet: string;
            /**
             * Jetton Master
             */
            jetton_master: string;
            /**
             * Transaction Hash
             */
            transaction_hash: string;
            /**
             * Transaction Lt
             */
            transaction_lt: string;
            /**
             * Transaction Now
             */
            transaction_now: number;
            /**
             * Response Destination
             */
            response_destination: /* Response Destination */ string | null;
            /**
             * Custom Payload
             */
            custom_payload: /* Custom Payload */ string | null;
            /**
             * Forward Ton Amount
             */
            forward_ton_amount: /* Forward Ton Amount */ string | null;
            /**
             * Forward Payload
             */
            forward_payload: /* Forward Payload */ string | null;
        }
        /**
         * JettonTransferList
         */
        export interface JettonTransferList {
            /**
             * Jetton Transfers
             */
            jetton_transfers: /* JettonTransfer */ JettonTransfer[];
        }
        /**
         * JettonWallet
         */
        export interface JettonWallet {
            /**
             * Address
             */
            address: string;
            /**
             * Balance
             */
            balance: string;
            /**
             * Owner
             */
            owner: string;
            /**
             * Jetton
             */
            jetton: string;
            /**
             * Last Transaction Lt
             */
            last_transaction_lt: string;
            /**
             * Code Hash
             */
            code_hash: string;
            /**
             * Data Hash
             */
            data_hash: string;
        }
        /**
         * JettonWalletList
         */
        export interface JettonWalletList {
            /**
             * Jetton Wallets
             */
            jetton_wallets: /* JettonWallet */ JettonWallet[];
        }
        /**
         * MasterchainInfo
         */
        export interface MasterchainInfo {
            last: /* Block */ Block;
            first: /* Block */ Block;
        }
        /**
         * Message
         */
        export interface Message {
            /**
             * Hash
             */
            hash: string;
            /**
             * Source
             */
            source: /* Source */ string | null;
            /**
             * Destination
             */
            destination: /* Destination */ string | null;
            /**
             * Value
             */
            value: /* Value */ string | null;
            /**
             * Fwd Fee
             */
            fwd_fee: /* Fwd Fee */ string | null;
            /**
             * Ihr Fee
             */
            ihr_fee: /* Ihr Fee */ string | null;
            /**
             * Created Lt
             */
            created_lt: /* Created Lt */ string | null;
            /**
             * Created At
             */
            created_at: /* Created At */ string | null;
            /**
             * Opcode
             */
            opcode: /* Opcode */ string | null;
            /**
             * Ihr Disabled
             */
            ihr_disabled: /* Ihr Disabled */ boolean | null;
            /**
             * Bounce
             */
            bounce: /* Bounce */ boolean | null;
            /**
             * Bounced
             */
            bounced: /* Bounced */ boolean | null;
            /**
             * Import Fee
             */
            import_fee: /* Import Fee */ string | null;
            message_content: /* MessageContent */ MessageContent | null;
            init_state: /* MessageInitState */ MessageInitState | null;
        }
        /**
         * MessageContent
         */
        export interface MessageContent {
            /**
             * Hash
             */
            hash: string;
            /**
             * Body
             */
            body: string;
            /**
             * Decoded
             */
            decoded: /* Decoded */ /* Decoded */ (/* TextComment */ TextComment | /* BinaryComment */ BinaryComment) | null;
        }
        /**
         * MessageInitState
         */
        export interface MessageInitState {
            /**
             * Hash
             */
            hash: string;
            /**
             * Body
             */
            body: string;
        }
        /**
         * MessageList
         */
        export interface MessageList {
            /**
             * Messages
             */
            messages: /* Message */ Message[];
        }
        /**
         * NFTCollection
         */
        export interface NFTCollection {
            /**
             * Address
             */
            address: string;
            /**
             * Owner Address
             */
            owner_address: /* Owner Address */ string | null;
            /**
             * Last Transaction Lt
             */
            last_transaction_lt: string;
            /**
             * Next Item Index
             */
            next_item_index: string;
            /**
             * Collection Content
             */
            collection_content: any;
            /**
             * Code Hash
             */
            code_hash: string;
            /**
             * Data Hash
             */
            data_hash: string;
        }
        /**
         * NFTCollectionList
         */
        export interface NFTCollectionList {
            /**
             * Nft Collections
             */
            nft_collections: /* NFTCollection */ NFTCollection[];
        }
        /**
         * NFTItem
         */
        export interface NFTItem {
            /**
             * Address
             */
            address: string;
            /**
             * Collection Address
             */
            collection_address: /* Collection Address */ string | null;
            /**
             * Owner Address
             */
            owner_address: /* Owner Address */ string | null;
            /**
             * Init
             */
            init: boolean;
            /**
             * Index
             */
            index: string;
            /**
             * Last Transaction Lt
             */
            last_transaction_lt: string;
            /**
             * Code Hash
             */
            code_hash: string;
            /**
             * Data Hash
             */
            data_hash: string;
            /**
             * Content
             */
            content: any;
            collection: /* NFTCollection */ NFTCollection | null;
        }
        /**
         * NFTItemList
         */
        export interface NFTItemList {
            /**
             * Nft Items
             */
            nft_items: /* NFTItem */ NFTItem[];
        }
        /**
         * NFTTransfer
         */
        export interface NFTTransfer {
            /**
             * Query Id
             */
            query_id: string;
            /**
             * Nft Address
             */
            nft_address: string;
            /**
             * Transaction Hash
             */
            transaction_hash: string;
            /**
             * Transaction Lt
             */
            transaction_lt: string;
            /**
             * Transaction Now
             */
            transaction_now: number;
            /**
             * Old Owner
             */
            old_owner: string;
            /**
             * New Owner
             */
            new_owner: string;
            /**
             * Response Destination
             */
            response_destination: /* Response Destination */ string | null;
            /**
             * Custom Payload
             */
            custom_payload: /* Custom Payload */ string | null;
            /**
             * Forward Amount
             */
            forward_amount: string;
            /**
             * Forward Payload
             */
            forward_payload: /* Forward Payload */ string | null;
        }
        /**
         * NFTTransferList
         */
        export interface NFTTransferList {
            /**
             * Nft Transfers
             */
            nft_transfers: /* NFTTransfer */ NFTTransfer[];
        }
        /**
         * RunGetMethodRequest
         */
        export interface RunGetMethodRequest {
            /**
             * Address
             */
            address: string;
            /**
             * Method
             */
            method: string;
            /**
             * Stack
             */
            stack: /* GetMethodParameter */ GetMethodParameterInput[];
        }
        /**
         * RunGetMethodResponse
         */
        export interface RunGetMethodResponse {
            /**
             * Gas Used
             */
            gas_used: number;
            /**
             * Exit Code
             */
            exit_code: number;
            /**
             * Stack
             */
            stack: /* GetMethodParameter */ GetMethodParameterOutput[];
        }
        /**
         * SentMessage
         */
        export interface SentMessage {
            /**
             * Message Hash
             * Hash of sent message in hex format
             * example:
             * 383E348617141E35BC25ED9CD0EDEC2A4EAF6413948BF1FB7F865CEFE8C2CD44
             */
            message_hash: string;
        }
        /**
         * TextComment
         */
        export interface TextComment {
            /**
             * Type
             */
            type?: "text_comment";
            /**
             * Comment
             */
            comment: string;
        }
        /**
         * Transaction
         */
        export interface Transaction {
            /**
             * Account
             */
            account: string;
            /**
             * Hash
             */
            hash: string;
            /**
             * Lt
             */
            lt: string;
            /**
             * Now
             */
            now: number;
            orig_status: /* AccountStatus */ AccountStatus;
            end_status: /* AccountStatus */ AccountStatus;
            /**
             * Total Fees
             */
            total_fees: string;
            /**
             * Prev Trans Hash
             */
            prev_trans_hash: string;
            /**
             * Prev Trans Lt
             */
            prev_trans_lt: string;
            /**
             * Description
             */
            description: any;
            block_ref: /* BlockReference */ BlockReference | null;
            in_msg: /* Message */ Message | null;
            /**
             * Out Msgs
             */
            out_msgs: /* Message */ Message[];
            account_state_before: /* AccountState */ AccountState | null;
            account_state_after: /* AccountState */ AccountState | null;
            /**
             * Mc Block Seqno
             */
            mc_block_seqno: /* Mc Block Seqno */ number | null;
        }
        /**
         * TransactionList
         */
        export interface TransactionList {
            /**
             * Transactions
             */
            transactions: /* Transaction */ Transaction[];
            /**
             * Address Book
             */
            address_book: {
                [name: string]: /* AddressBookEntry */ AddressBookEntry;
            };
        }
        /**
         * ValidationError
         */
        export interface ValidationError {
            /**
             * Location
             */
            loc: (string | number)[];
            /**
             * Message
             */
            msg: string;
            /**
             * Error Type
             */
            type: string;
        }
        /**
         * WalletInfo
         */
        export interface WalletInfo {
            /**
             * Balance
             */
            balance: string;
            /**
             * Wallet Type
             */
            wallet_type: /* Wallet Type */ string | null;
            /**
             * Seqno
             */
            seqno: /* Seqno */ number | null;
            /**
             * Wallet Id
             */
            wallet_id: /* Wallet Id */ number | null;
            /**
             * Last Transaction Lt
             */
            last_transaction_lt: /* Last Transaction Lt */ string | null;
            /**
             * Last Transaction Hash
             */
            last_transaction_hash: /* Last Transaction Hash */ string | null;
            status: /* AccountStatus */ AccountStatus;
        }
    }
}
declare namespace Paths {
    namespace EstimateFeeApiV3EstimateFeePost {
        /**
         * Run Get Method Request
         * EstimateFee request body
         */
        export interface RequestBody {
            /**
             * Address
             */
            address: string;
            /**
             * Body
             */
            body: string;
            /**
             * Init Code
             */
            init_code?: /* Init Code */ string | null;
            /**
             * Init Data
             */
            init_data?: /* Init Data */ string | null;
            /**
             * Ignore Chksig
             */
            ignore_chksig?: boolean;
        }
        namespace Responses {
            export type $200 = /* EstimateFeeResponse */ Components.Schemas.EstimateFeeResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetAccountInformationApiV3AccountGet {
        namespace Parameters {
            /**
             * Address
             * Account address. Can be sent in raw or user-friendly form.
             */
            export type Address = string;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Account address. Can be sent in raw or user-friendly form.
             */
            Parameters.Address;
        }
        namespace Responses {
            export type $200 = /* Account */ Components.Schemas.Account;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetAddressBookApiV3AddressBookGet {
        namespace Parameters {
            /**
             * Address
             * List of addresses in any form. Max: 1024
             */
            export type Address = string[];
        }
        export interface QueryParameters {
            address: /**
             * Address
             * List of addresses in any form. Max: 1024
             */
            Parameters.Address;
        }
        namespace Responses {
            /**
             * Response Get Address Book Api V3 Addressbook Get
             */
            export interface $200 {
                [name: string]: /* AddressBookEntry */ Components.Schemas.AddressBookEntry;
            }
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetAdjacentTransactionsApiV3AdjacentTransactionsGet {
        namespace Parameters {
            /**
             * Direction
             * Direction transactions by lt.
             */
            export type Direction = /**
             * Direction
             * Direction transactions by lt.
             */
            ("in" | "out" | "both") | (null | null | null);
            /**
             * Hash
             * Transaction hash. Acceptable in hex, base64 and base64url forms.
             */
            export type Hash = string;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Sort
             * Sort transactions by lt.
             */
            export type Sort = "none" | "asc" | "desc";
        }
        export interface QueryParameters {
            hash: /**
             * Hash
             * Transaction hash. Acceptable in hex, base64 and base64url forms.
             */
            Parameters.Hash;
            direction?: /**
             * Direction
             * Direction transactions by lt.
             */
            Parameters.Direction;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
            sort?: /**
             * Sort
             * Sort transactions by lt.
             */
            Parameters.Sort;
        }
        namespace Responses {
            export type $200 = /* TransactionList */ Components.Schemas.TransactionList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetBlocksApiV3BlocksGet {
        namespace Parameters {
            /**
             * End Lt
             * Query blocks with `lt <= end_lt`
             */
            export type EndLt = /**
             * End Lt
             * Query blocks with `lt <= end_lt`
             */
            number | null;
            /**
             * End Utime
             * Query blocks with generation UTC timestamp **before** given timestamp
             */
            export type EndUtime = /**
             * End Utime
             * Query blocks with generation UTC timestamp **before** given timestamp
             */
            number | null;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Seqno
             * Block block seqno. Must be sent with *workchain* and *shard*.
             */
            export type Seqno = /**
             * Seqno
             * Block block seqno. Must be sent with *workchain* and *shard*.
             */
            number | null;
            /**
             * Shard
             * Block shard id. Must be sent with *workchain*. Example: `8000000000000000`
             */
            export type Shard = /**
             * Shard
             * Block shard id. Must be sent with *workchain*. Example: `8000000000000000`
             */
            string | null;
            /**
             * Sort
             * Sort results by UTC timestamp.
             */
            export type Sort = "asc" | "desc";
            /**
             * Start Lt
             * Query blocks with `lt >= start_lt`
             */
            export type StartLt = /**
             * Start Lt
             * Query blocks with `lt >= start_lt`
             */
            number | null;
            /**
             * Start Utime
             * Query blocks with generation UTC timestamp **after** given timestamp.
             */
            export type StartUtime = /**
             * Start Utime
             * Query blocks with generation UTC timestamp **after** given timestamp.
             */
            number | null;
            /**
             * Workchain
             * Block workchain.
             */
            export type Workchain = /**
             * Workchain
             * Block workchain.
             */
            number | null;
        }
        export interface QueryParameters {
            workchain?: /**
             * Workchain
             * Block workchain.
             */
            Parameters.Workchain;
            shard?: /**
             * Shard
             * Block shard id. Must be sent with *workchain*. Example: `8000000000000000`
             */
            Parameters.Shard;
            seqno?: /**
             * Seqno
             * Block block seqno. Must be sent with *workchain* and *shard*.
             */
            Parameters.Seqno;
            start_utime?: /**
             * Start Utime
             * Query blocks with generation UTC timestamp **after** given timestamp.
             */
            Parameters.StartUtime;
            end_utime?: /**
             * End Utime
             * Query blocks with generation UTC timestamp **before** given timestamp
             */
            Parameters.EndUtime;
            start_lt?: /**
             * Start Lt
             * Query blocks with `lt >= start_lt`
             */
            Parameters.StartLt;
            end_lt?: /**
             * End Lt
             * Query blocks with `lt <= end_lt`
             */
            Parameters.EndLt;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
            sort?: /**
             * Sort
             * Sort results by UTC timestamp.
             */
            Parameters.Sort;
        }
        namespace Responses {
            export type $200 = /* BlockList */ Components.Schemas.BlockList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetJettonBurnsApiV3JettonBurnsGet {
        namespace Parameters {
            /**
             * Address
             * Account address. Must be sent in hex, base64 and base64url forms.
             */
            export type Address = /**
             * Address
             * Account address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            export type EndLt = /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            number | null;
            /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            export type EndUtime = /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            number | null;
            /**
             * Jetton Master
             * Jetton master address. Must be sent in hex, base64 and base64url forms.
             */
            export type JettonMaster = /**
             * Jetton Master
             * Jetton master address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Jetton Wallet
             * Jetton wallet address. Must be sent in hex, base64 and base64url forms.
             */
            export type JettonWallet = /**
             * Jetton Wallet
             * Jetton wallet address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Sort
             * Sort transactions by lt.
             */
            export type Sort = "asc" | "desc";
            /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            export type StartLt = /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            number | null;
            /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            export type StartUtime = /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            number | null;
        }
        export interface QueryParameters {
            address?: /**
             * Address
             * Account address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.Address;
            jetton_wallet?: /**
             * Jetton Wallet
             * Jetton wallet address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.JettonWallet;
            jetton_master?: /**
             * Jetton Master
             * Jetton master address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.JettonMaster;
            start_utime?: /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            Parameters.StartUtime;
            end_utime?: /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            Parameters.EndUtime;
            start_lt?: /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            Parameters.StartLt;
            end_lt?: /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            Parameters.EndLt;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
            sort?: /**
             * Sort
             * Sort transactions by lt.
             */
            Parameters.Sort;
        }
        namespace Responses {
            export type $200 = /* JettonBurnList */ Components.Schemas.JettonBurnList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetJettonMastersApiV3JettonMastersGet {
        namespace Parameters {
            /**
             * Address
             * Jetton Master address. Must be sent in hex, base64 and base64url forms.
             */
            export type Address = string;
            /**
             * Admin Address
             * Address of Jetton Master's admin. Must be sent in hex, base64 and base64url forms.
             */
            export type AdminAddress = string;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
        }
        export interface QueryParameters {
            address?: /**
             * Address
             * Jetton Master address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.Address;
            admin_address?: /**
             * Admin Address
             * Address of Jetton Master's admin. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.AdminAddress;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
        }
        namespace Responses {
            export type $200 = /* JettonMasterList */ Components.Schemas.JettonMasterList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetJettonTransfersApiV3JettonTransfersGet {
        namespace Parameters {
            /**
             * Address
             * Account address. Must be sent in hex, base64 and base64url forms.
             */
            export type Address = /**
             * Address
             * Account address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Direction
             * Direction transactions by lt.
             */
            export type Direction = /**
             * Direction
             * Direction transactions by lt.
             */
            ("in" | "out" | "both") | (null | null | null);
            /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            export type EndLt = /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            number | null;
            /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            export type EndUtime = /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            number | null;
            /**
             * Jetton Master
             * Jetton master address. Must be sent in hex, base64 and base64url forms.
             */
            export type JettonMaster = /**
             * Jetton Master
             * Jetton master address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Jetton Wallet
             * Jetton wallet address. Must be sent in hex, base64 and base64url forms.
             */
            export type JettonWallet = /**
             * Jetton Wallet
             * Jetton wallet address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Sort
             * Sort transactions by lt.
             */
            export type Sort = "none" | "asc" | "desc";
            /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            export type StartLt = /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            number | null;
            /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            export type StartUtime = /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            number | null;
        }
        export interface QueryParameters {
            address?: /**
             * Address
             * Account address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.Address;
            jetton_wallet?: /**
             * Jetton Wallet
             * Jetton wallet address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.JettonWallet;
            jetton_master?: /**
             * Jetton Master
             * Jetton master address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.JettonMaster;
            direction?: /**
             * Direction
             * Direction transactions by lt.
             */
            Parameters.Direction;
            start_utime?: /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            Parameters.StartUtime;
            end_utime?: /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            Parameters.EndUtime;
            start_lt?: /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            Parameters.StartLt;
            end_lt?: /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            Parameters.EndLt;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
            sort?: /**
             * Sort
             * Sort transactions by lt.
             */
            Parameters.Sort;
        }
        namespace Responses {
            export type $200 = /* JettonTransferList */ Components.Schemas.JettonTransferList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetJettonWalletsApiV3JettonWalletsGet {
        namespace Parameters {
            /**
             * Address
             * Jetton wallet address. Must be sent in hex, base64 and base64url forms.
             */
            export type Address = string;
            /**
             * Jetton Address
             * Jetton Master. Must be sent in hex, base64 and base64url forms.
             */
            export type JettonAddress = string;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Owner Address
             * Address of Jetton wallet's owner. Must be sent in hex, base64 and base64url forms.
             */
            export type OwnerAddress = string;
        }
        export interface QueryParameters {
            address?: /**
             * Address
             * Jetton wallet address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.Address;
            owner_address?: /**
             * Owner Address
             * Address of Jetton wallet's owner. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.OwnerAddress;
            jetton_address?: /**
             * Jetton Address
             * Jetton Master. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.JettonAddress;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
        }
        namespace Responses {
            export type $200 = /* JettonWalletList */ Components.Schemas.JettonWalletList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetMasterchainBlockShardsApiV3MasterchainBlockShardsGet {
        namespace Parameters {
            /**
             * Include Mc Block
             * Include masterchain block
             */
            export type IncludeMcBlock = boolean;
            /**
             * Seqno
             * Masterchain block seqno
             */
            export type Seqno = number;
        }
        export interface QueryParameters {
            seqno: /**
             * Seqno
             * Masterchain block seqno
             */
            Parameters.Seqno;
            include_mc_block?: /**
             * Include Mc Block
             * Include masterchain block
             */
            Parameters.IncludeMcBlock;
        }
        namespace Responses {
            export type $200 = /* BlockList */ Components.Schemas.BlockList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetMasterchainInfoApiV3MasterchainInfoGet {
        namespace Responses {
            export type $200 = /* MasterchainInfo */ Components.Schemas.MasterchainInfo;
        }
    }
    namespace GetMessagesApiV3MessagesGet {
        namespace Parameters {
            /**
             * Body Hash
             * Message body hash. Acceptable in hex, base64 and base64url forms.
             */
            export type BodyHash = /**
             * Body Hash
             * Message body hash. Acceptable in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Destination
             * The destination account address. Can be sent in hex, base64 or base64url form. Use value `null` to get log messages.
             */
            export type Destination = /**
             * Destination
             * The destination account address. Can be sent in hex, base64 or base64url form. Use value `null` to get log messages.
             */
            string | null;
            /**
             * Hash
             * Message hash. Acceptable in hex, base64 and base64url forms.
             */
            export type Hash = string;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Source
             * The source account address. Can be sent in hex, base64 or base64url form. Use value `null` to get external messages.
             */
            export type Source = /**
             * Source
             * The source account address. Can be sent in hex, base64 or base64url form. Use value `null` to get external messages.
             */
            string | null;
        }
        export interface QueryParameters {
            hash?: /**
             * Hash
             * Message hash. Acceptable in hex, base64 and base64url forms.
             */
            Parameters.Hash;
            source?: /**
             * Source
             * The source account address. Can be sent in hex, base64 or base64url form. Use value `null` to get external messages.
             */
            Parameters.Source;
            destination?: /**
             * Destination
             * The destination account address. Can be sent in hex, base64 or base64url form. Use value `null` to get log messages.
             */
            Parameters.Destination;
            body_hash?: /**
             * Body Hash
             * Message body hash. Acceptable in hex, base64 and base64url forms.
             */
            Parameters.BodyHash;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
        }
        namespace Responses {
            export type $200 = /* MessageList */ Components.Schemas.MessageList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetNftCollectionsApiV3NftCollectionsGet {
        namespace Parameters {
            /**
             * Collection Address
             * NFT collection address. Must be sent in hex, base64 and base64url forms.
             */
            export type CollectionAddress = /**
             * Collection Address
             * NFT collection address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Owner Address
             * Address of NFT collection owner. Must be sent in hex, base64 and base64url forms.
             */
            export type OwnerAddress = /**
             * Owner Address
             * Address of NFT collection owner. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
        }
        export interface QueryParameters {
            collection_address?: /**
             * Collection Address
             * NFT collection address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.CollectionAddress;
            owner_address?: /**
             * Owner Address
             * Address of NFT collection owner. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.OwnerAddress;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
        }
        namespace Responses {
            export type $200 = /* NFTCollectionList */ Components.Schemas.NFTCollectionList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetNftItemsApiV3NftItemsGet {
        namespace Parameters {
            /**
             * Address
             * NFT address. Must be sent in hex, base64 and base64url forms.
             */
            export type Address = /**
             * Address
             * NFT address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Collection Address
             * NFT collection address. Must be sent in hex, base64 and base64url forms.
             */
            export type CollectionAddress = /**
             * Collection Address
             * NFT collection address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Index
             * NFT Item index. Use it together with collection address.
             */
            export type Index = /**
             * Index
             * NFT Item index. Use it together with collection address.
             */
            string | null;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Owner Address
             * Address of NFT owner. Must be sent in hex, base64 and base64url forms.
             */
            export type OwnerAddress = /**
             * Owner Address
             * Address of NFT owner. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
        }
        export interface QueryParameters {
            address?: /**
             * Address
             * NFT address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.Address;
            owner_address?: /**
             * Owner Address
             * Address of NFT owner. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.OwnerAddress;
            collection_address?: /**
             * Collection Address
             * NFT collection address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.CollectionAddress;
            index?: /**
             * Index
             * NFT Item index. Use it together with collection address.
             */
            Parameters.Index;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
        }
        namespace Responses {
            export type $200 = /* NFTItemList */ Components.Schemas.NFTItemList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetNftTransfersApiV3NftTransfersGet {
        namespace Parameters {
            /**
             * Address
             * Address of NFT owner. Must be sent in hex, base64 and base64url forms.
             */
            export type Address = /**
             * Address
             * Address of NFT owner. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Collection Address
             * NFT collection address. Must be sent in hex, base64 and base64url forms.
             */
            export type CollectionAddress = /**
             * Collection Address
             * NFT collection address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Direction
             * Direction transactions by lt.
             */
            export type Direction = /**
             * Direction
             * Direction transactions by lt.
             */
            ("in" | "out" | "both") | (null | null | null);
            /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            export type EndLt = /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            number | null;
            /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            export type EndUtime = /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            number | null;
            /**
             * Item Address
             * NFT item address. Must be sent in hex, base64 and base64url forms.
             */
            export type ItemAddress = /**
             * Item Address
             * NFT item address. Must be sent in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Sort
             * Sort transactions by lt.
             */
            export type Sort = "asc" | "desc";
            /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            export type StartLt = /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            number | null;
            /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            export type StartUtime = /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            number | null;
        }
        export interface QueryParameters {
            address?: /**
             * Address
             * Address of NFT owner. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.Address;
            item_address?: /**
             * Item Address
             * NFT item address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.ItemAddress;
            collection_address?: /**
             * Collection Address
             * NFT collection address. Must be sent in hex, base64 and base64url forms.
             */
            Parameters.CollectionAddress;
            direction?: /**
             * Direction
             * Direction transactions by lt.
             */
            Parameters.Direction;
            start_utime?: /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            Parameters.StartUtime;
            end_utime?: /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            Parameters.EndUtime;
            start_lt?: /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            Parameters.StartLt;
            end_lt?: /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            Parameters.EndLt;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
            sort?: /**
             * Sort
             * Sort transactions by lt.
             */
            Parameters.Sort;
        }
        namespace Responses {
            export type $200 = /* NFTTransferList */ Components.Schemas.NFTTransferList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetNotcoinHoldersApiV3NotcoinHoldersGet {
        namespace Parameters {
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
        }
        export interface QueryParameters {
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetShardsByMasterchainBlockApiV3MasterchainBlockShardStateGet {
        namespace Parameters {
            /**
             * Seqno
             * Masterchain block seqno
             */
            export type Seqno = number;
        }
        export interface QueryParameters {
            seqno: /**
             * Seqno
             * Masterchain block seqno
             */
            Parameters.Seqno;
        }
        namespace Responses {
            export type $200 = /* BlockList */ Components.Schemas.BlockList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetTransactionsApiV3TransactionsGet {
        namespace Parameters {
            /**
             * Account
             * List of account addresses to get transactions. Can be sent in hex, base64 or base64url form.
             */
            export type Account = string[];
            /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            export type EndLt = /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            number | null;
            /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            export type EndUtime = /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            number | null;
            /**
             * Exclude Account
             * Exclude transactions on specified account addresses
             */
            export type ExcludeAccount = string[];
            /**
             * Hash
             * Transaction hash. Acceptable in hex, base64 and base64url forms.
             */
            export type Hash = /**
             * Hash
             * Transaction hash. Acceptable in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Lt
             * Transaction lt.
             */
            export type Lt = /**
             * Lt
             * Transaction lt.
             */
            number | null;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Seqno
             * Block block seqno. Must be sent with *workchain* and *shard*. Must be sent in hex form.
             */
            export type Seqno = /**
             * Seqno
             * Block block seqno. Must be sent with *workchain* and *shard*. Must be sent in hex form.
             */
            number | null;
            /**
             * Shard
             * Block shard id. Must be sent with *workchain*. Example: `8000000000000000`
             */
            export type Shard = /**
             * Shard
             * Block shard id. Must be sent with *workchain*. Example: `8000000000000000`
             */
            string | null;
            /**
             * Sort
             * Sort transactions by lt.
             */
            export type Sort = "asc" | "desc";
            /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            export type StartLt = /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            number | null;
            /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            export type StartUtime = /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            number | null;
            /**
             * Workchain
             * Block workchain.
             */
            export type Workchain = /**
             * Workchain
             * Block workchain.
             */
            number | null;
        }
        export interface QueryParameters {
            workchain?: /**
             * Workchain
             * Block workchain.
             */
            Parameters.Workchain;
            shard?: /**
             * Shard
             * Block shard id. Must be sent with *workchain*. Example: `8000000000000000`
             */
            Parameters.Shard;
            seqno?: /**
             * Seqno
             * Block block seqno. Must be sent with *workchain* and *shard*. Must be sent in hex form.
             */
            Parameters.Seqno;
            account?: /**
             * Account
             * List of account addresses to get transactions. Can be sent in hex, base64 or base64url form.
             */
            Parameters.Account;
            exclude_account?: /**
             * Exclude Account
             * Exclude transactions on specified account addresses
             */
            Parameters.ExcludeAccount;
            hash?: /**
             * Hash
             * Transaction hash. Acceptable in hex, base64 and base64url forms.
             */
            Parameters.Hash;
            lt?: /**
             * Lt
             * Transaction lt.
             */
            Parameters.Lt;
            start_utime?: /**
             * Start Utime
             * Query transactions with generation UTC timestamp **after** given timestamp.
             */
            Parameters.StartUtime;
            end_utime?: /**
             * End Utime
             * Query transactions with generation UTC timestamp **before** given timestamp
             */
            Parameters.EndUtime;
            start_lt?: /**
             * Start Lt
             * Query transactions with `lt >= start_lt`
             */
            Parameters.StartLt;
            end_lt?: /**
             * End Lt
             * Query transactions with `lt <= end_lt`
             */
            Parameters.EndLt;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
            sort?: /**
             * Sort
             * Sort transactions by lt.
             */
            Parameters.Sort;
        }
        namespace Responses {
            export type $200 = /* TransactionList */ Components.Schemas.TransactionList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetTransactionsByMasterchainBlockApiV3TransactionsByMasterchainBlockGet {
        namespace Parameters {
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
            /**
             * Seqno
             * Masterchain block seqno
             */
            export type Seqno = number;
            /**
             * Sort
             * Sort transactions by lt.
             */
            export type Sort = "none" | "asc" | "desc";
        }
        export interface QueryParameters {
            seqno: /**
             * Seqno
             * Masterchain block seqno
             */
            Parameters.Seqno;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
            sort?: /**
             * Sort
             * Sort transactions by lt.
             */
            Parameters.Sort;
        }
        namespace Responses {
            export type $200 = /* TransactionList */ Components.Schemas.TransactionList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetTransactionsByMessageApiV3TransactionsByMessageGet {
        namespace Parameters {
            /**
             * Direction
             * Message direction.
             */
            export type Direction = /**
             * Direction
             * Message direction.
             */
            ("in" | "out") | (null | null);
            /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            export type Limit = number;
            /**
             * Msg Hash
             * Message hash. Acceptable in hex, base64 and base64url forms.
             */
            export type MsgHash = /**
             * Msg Hash
             * Message hash. Acceptable in hex, base64 and base64url forms.
             */
            string | null;
            /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            export type Offset = number;
        }
        export interface QueryParameters {
            direction: /**
             * Direction
             * Message direction.
             */
            Parameters.Direction;
            msg_hash: /**
             * Msg Hash
             * Message hash. Acceptable in hex, base64 and base64url forms.
             */
            Parameters.MsgHash;
            limit?: /**
             * Limit
             * Limit number of queried rows. Use with *offset* to batch read.
             */
            Parameters.Limit;
            offset?: /**
             * Offset
             * Skip first N rows. Use with *limit* to batch read.
             */
            Parameters.Offset;
        }
        namespace Responses {
            export type $200 = /* TransactionList */ Components.Schemas.TransactionList;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetWalletInformationApiV3WalletGet {
        namespace Parameters {
            /**
             * Address
             * Smart contract address. Can be sent in raw or user-friendly form.
             */
            export type Address = string;
        }
        export interface QueryParameters {
            address: /**
             * Address
             * Smart contract address. Can be sent in raw or user-friendly form.
             */
            Parameters.Address;
        }
        namespace Responses {
            export type $200 = /* WalletInfo */ Components.Schemas.WalletInfo;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace RunGetMethodApiV3RunGetMethodPost {
        /**
         * Run Get Method Request
         * RunGetMethod request body
         */
        export interface RequestBody {
            /**
             * Address
             */
            address: string;
            /**
             * Method
             */
            method: string;
            /**
             * Stack
             */
            stack: /* GetMethodParameter */ Components.Schemas.GetMethodParameterInput[];
        }
        namespace Responses {
            export type $200 = /* RunGetMethodResponse */ Components.Schemas.RunGetMethodResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace SendMessageApiV3MessagePost {
        /**
         * Message
         * Message in boc base64 format.
         */
        export interface RequestBody {
            /**
             * Boc
             * example:
             * te6ccgECBQEAARUAAkWIAWTtae+KgtbrX26Bep8JSq8lFLfGOoyGR/xwdjfvpvEaHg
             */
            boc: string;
        }
        namespace Responses {
            export type $200 = /* SentMessage */ Components.Schemas.SentMessage;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
}

export interface OperationMethods {
  /**
   * get_masterchain_info_api_v3_masterchainInfo_get - Get Masterchain Info
   */
  'get_masterchain_info_api_v3_masterchainInfo_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMasterchainInfoApiV3MasterchainInfoGet.Responses.$200>
  /**
   * get_blocks_api_v3_blocks_get - Get Blocks
   * 
   * Returns blocks by specified filters.
   */
  'get_blocks_api_v3_blocks_get'(
    parameters?: Parameters<Paths.GetBlocksApiV3BlocksGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlocksApiV3BlocksGet.Responses.$200>
  /**
   * get_shards_by_masterchain_block_api_v3_masterchainBlockShardState_get - Get Shards By Masterchain Block
   */
  'get_shards_by_masterchain_block_api_v3_masterchainBlockShardState_get'(
    parameters?: Parameters<Paths.GetShardsByMasterchainBlockApiV3MasterchainBlockShardStateGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetShardsByMasterchainBlockApiV3MasterchainBlockShardStateGet.Responses.$200>
  /**
   * get_address_book_api_v3_addressBook_get - Get Address Book
   * 
   * Returns an address book for given address list.
   */
  'get_address_book_api_v3_addressBook_get'(
    parameters?: Parameters<Paths.GetAddressBookApiV3AddressBookGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAddressBookApiV3AddressBookGet.Responses.$200>
  /**
   * get_masterchain_block_shards_api_v3_masterchainBlockShards_get - Get Masterchain Block Shards
   * 
   * Returns all worchain blocks, that appeared after previous masterchain block.
   * 
   * **Note:** this method is not equivalent with [/api/v2/shards](https://toncenter.com/api/v2/#/blocks/get_shards_shards_get).
   */
  'get_masterchain_block_shards_api_v3_masterchainBlockShards_get'(
    parameters?: Parameters<Paths.GetMasterchainBlockShardsApiV3MasterchainBlockShardsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMasterchainBlockShardsApiV3MasterchainBlockShardsGet.Responses.$200>
  /**
   * get_transactions_api_v3_transactions_get - Get Transactions
   * 
   * Get transactions by specified filters.
   */
  'get_transactions_api_v3_transactions_get'(
    parameters?: Parameters<Paths.GetTransactionsApiV3TransactionsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransactionsApiV3TransactionsGet.Responses.$200>
  /**
   * get_transactions_by_masterchain_block_api_v3_transactionsByMasterchainBlock_get - Get Transactions By Masterchain Block
   * 
   * Returns transactions from masterchain block and from all shards.
   */
  'get_transactions_by_masterchain_block_api_v3_transactionsByMasterchainBlock_get'(
    parameters?: Parameters<Paths.GetTransactionsByMasterchainBlockApiV3TransactionsByMasterchainBlockGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransactionsByMasterchainBlockApiV3TransactionsByMasterchainBlockGet.Responses.$200>
  /**
   * get_transactions_by_message_api_v3_transactionsByMessage_get - Get Transactions By Message
   * 
   * Get transactions whose inbound/outbound message has the specified hash. This endpoint returns list of Transaction objects
   * since collisions of message hashes can occur.
   */
  'get_transactions_by_message_api_v3_transactionsByMessage_get'(
    parameters?: Parameters<Paths.GetTransactionsByMessageApiV3TransactionsByMessageGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransactionsByMessageApiV3TransactionsByMessageGet.Responses.$200>
  /**
   * get_adjacent_transactions_api_v3_adjacentTransactions_get - Get Adjacent Transactions
   * 
   * Get parent and/or children for specified transaction.
   */
  'get_adjacent_transactions_api_v3_adjacentTransactions_get'(
    parameters?: Parameters<Paths.GetAdjacentTransactionsApiV3AdjacentTransactionsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAdjacentTransactionsApiV3AdjacentTransactionsGet.Responses.$200>
  /**
   * get_messages_api_v3_messages_get - Get Messages
   * 
   * Get messages by specified filters.
   */
  'get_messages_api_v3_messages_get'(
    parameters?: Parameters<Paths.GetMessagesApiV3MessagesGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMessagesApiV3MessagesGet.Responses.$200>
  /**
   * get_nft_collections_api_v3_nft_collections_get - Get Nft Collections
   * 
   * Get NFT collections.
   */
  'get_nft_collections_api_v3_nft_collections_get'(
    parameters?: Parameters<Paths.GetNftCollectionsApiV3NftCollectionsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetNftCollectionsApiV3NftCollectionsGet.Responses.$200>
  /**
   * get_nft_items_api_v3_nft_items_get - Get Nft Items
   * 
   * Get NFT items.
   */
  'get_nft_items_api_v3_nft_items_get'(
    parameters?: Parameters<Paths.GetNftItemsApiV3NftItemsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetNftItemsApiV3NftItemsGet.Responses.$200>
  /**
   * get_nft_transfers_api_v3_nft_transfers_get - Get Nft Transfers
   * 
   * Get NFT transfers by specified filters.
   */
  'get_nft_transfers_api_v3_nft_transfers_get'(
    parameters?: Parameters<Paths.GetNftTransfersApiV3NftTransfersGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetNftTransfersApiV3NftTransfersGet.Responses.$200>
  /**
   * get_jetton_masters_api_v3_jetton_masters_get - Get Jetton Masters
   * 
   * Get Jetton masters by specified filters.
   */
  'get_jetton_masters_api_v3_jetton_masters_get'(
    parameters?: Parameters<Paths.GetJettonMastersApiV3JettonMastersGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetJettonMastersApiV3JettonMastersGet.Responses.$200>
  /**
   * get_jetton_wallets_api_v3_jetton_wallets_get - Get Jetton Wallets
   * 
   * Get Jetton wallets by specified filters.
   */
  'get_jetton_wallets_api_v3_jetton_wallets_get'(
    parameters?: Parameters<Paths.GetJettonWalletsApiV3JettonWalletsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetJettonWalletsApiV3JettonWalletsGet.Responses.$200>
  /**
   * get_jetton_transfers_api_v3_jetton_transfers_get - Get Jetton Transfers
   * 
   * Get Jetton transfers by specified filters.
   */
  'get_jetton_transfers_api_v3_jetton_transfers_get'(
    parameters?: Parameters<Paths.GetJettonTransfersApiV3JettonTransfersGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetJettonTransfersApiV3JettonTransfersGet.Responses.$200>
  /**
   * get_jetton_burns_api_v3_jetton_burns_get - Get Jetton Burns
   * 
   * Get Jetton burns by specified filters.
   */
  'get_jetton_burns_api_v3_jetton_burns_get'(
    parameters?: Parameters<Paths.GetJettonBurnsApiV3JettonBurnsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetJettonBurnsApiV3JettonBurnsGet.Responses.$200>
  /**
   * send_message_api_v3_message_post - Send Message
   * 
   * Send external message to TON network.
   */
  'send_message_api_v3_message_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SendMessageApiV3MessagePost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendMessageApiV3MessagePost.Responses.$200>
  /**
   * run_get_method_api_v3_runGetMethod_post - Run Get Method
   * 
   * Run get method of smart contract. Stack supports only `num`, `cell` and `slice` types:
   * ```
   * [
   *     {
   *         "type": "num",
   *         "value": "0x12a"
   *     },
   *     {
   *         "type": "cell",
   *         "value": "te6..." // base64 encoded boc with cell
   *     },
   *     {
   *         "type": "slice",
   *         "value": "te6..." // base64 encoded boc with slice
   *     }
   * ]
   * ```
   */
  'run_get_method_api_v3_runGetMethod_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.RunGetMethodApiV3RunGetMethodPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RunGetMethodApiV3RunGetMethodPost.Responses.$200>
  /**
   * estimate_fee_api_v3_estimateFee_post - Estimate Fee
   * 
   * Estimate fee for external message.
   */
  'estimate_fee_api_v3_estimateFee_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EstimateFeeApiV3EstimateFeePost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EstimateFeeApiV3EstimateFeePost.Responses.$200>
  /**
   * get_account_information_api_v3_account_get - Get Account Information
   * 
   * Get smart contract information.
   */
  'get_account_information_api_v3_account_get'(
    parameters?: Parameters<Paths.GetAccountInformationApiV3AccountGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAccountInformationApiV3AccountGet.Responses.$200>
  /**
   * get_wallet_information_api_v3_wallet_get - Get Wallet Information
   * 
   * Get wallet smart contract information. The following wallets are supported: `v1r1`, `v1r2`, `v1r3`, `v2r1`, `v2r2`, `v3r1`, `v3r2`, `v4r1`, `v4r2`.
   * In case the account is not a wallet error code 409 is returned.
   */
  'get_wallet_information_api_v3_wallet_get'(
    parameters?: Parameters<Paths.GetWalletInformationApiV3WalletGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWalletInformationApiV3WalletGet.Responses.$200>
  /**
   * get_notcoin_holders_api_v3_notcoin_holders_get - Get Notcoin Holders
   * 
   * Get Notcoin voucher holders
   */
  'get_notcoin_holders_api_v3_notcoin_holders_get'(
    parameters?: Parameters<Paths.GetNotcoinHoldersApiV3NotcoinHoldersGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetNotcoinHoldersApiV3NotcoinHoldersGet.Responses.$200>
}

export interface PathsDictionary {
  ['/api/v3/masterchainInfo']: {
    /**
     * get_masterchain_info_api_v3_masterchainInfo_get - Get Masterchain Info
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMasterchainInfoApiV3MasterchainInfoGet.Responses.$200>
  }
  ['/api/v3/blocks']: {
    /**
     * get_blocks_api_v3_blocks_get - Get Blocks
     * 
     * Returns blocks by specified filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlocksApiV3BlocksGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlocksApiV3BlocksGet.Responses.$200>
  }
  ['/api/v3/masterchainBlockShardState']: {
    /**
     * get_shards_by_masterchain_block_api_v3_masterchainBlockShardState_get - Get Shards By Masterchain Block
     */
    'get'(
      parameters?: Parameters<Paths.GetShardsByMasterchainBlockApiV3MasterchainBlockShardStateGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetShardsByMasterchainBlockApiV3MasterchainBlockShardStateGet.Responses.$200>
  }
  ['/api/v3/addressBook']: {
    /**
     * get_address_book_api_v3_addressBook_get - Get Address Book
     * 
     * Returns an address book for given address list.
     */
    'get'(
      parameters?: Parameters<Paths.GetAddressBookApiV3AddressBookGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAddressBookApiV3AddressBookGet.Responses.$200>
  }
  ['/api/v3/masterchainBlockShards']: {
    /**
     * get_masterchain_block_shards_api_v3_masterchainBlockShards_get - Get Masterchain Block Shards
     * 
     * Returns all worchain blocks, that appeared after previous masterchain block.
     * 
     * **Note:** this method is not equivalent with [/api/v2/shards](https://toncenter.com/api/v2/#/blocks/get_shards_shards_get).
     */
    'get'(
      parameters?: Parameters<Paths.GetMasterchainBlockShardsApiV3MasterchainBlockShardsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMasterchainBlockShardsApiV3MasterchainBlockShardsGet.Responses.$200>
  }
  ['/api/v3/transactions']: {
    /**
     * get_transactions_api_v3_transactions_get - Get Transactions
     * 
     * Get transactions by specified filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetTransactionsApiV3TransactionsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransactionsApiV3TransactionsGet.Responses.$200>
  }
  ['/api/v3/transactionsByMasterchainBlock']: {
    /**
     * get_transactions_by_masterchain_block_api_v3_transactionsByMasterchainBlock_get - Get Transactions By Masterchain Block
     * 
     * Returns transactions from masterchain block and from all shards.
     */
    'get'(
      parameters?: Parameters<Paths.GetTransactionsByMasterchainBlockApiV3TransactionsByMasterchainBlockGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransactionsByMasterchainBlockApiV3TransactionsByMasterchainBlockGet.Responses.$200>
  }
  ['/api/v3/transactionsByMessage']: {
    /**
     * get_transactions_by_message_api_v3_transactionsByMessage_get - Get Transactions By Message
     * 
     * Get transactions whose inbound/outbound message has the specified hash. This endpoint returns list of Transaction objects
     * since collisions of message hashes can occur.
     */
    'get'(
      parameters?: Parameters<Paths.GetTransactionsByMessageApiV3TransactionsByMessageGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransactionsByMessageApiV3TransactionsByMessageGet.Responses.$200>
  }
  ['/api/v3/adjacentTransactions']: {
    /**
     * get_adjacent_transactions_api_v3_adjacentTransactions_get - Get Adjacent Transactions
     * 
     * Get parent and/or children for specified transaction.
     */
    'get'(
      parameters?: Parameters<Paths.GetAdjacentTransactionsApiV3AdjacentTransactionsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAdjacentTransactionsApiV3AdjacentTransactionsGet.Responses.$200>
  }
  ['/api/v3/messages']: {
    /**
     * get_messages_api_v3_messages_get - Get Messages
     * 
     * Get messages by specified filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetMessagesApiV3MessagesGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMessagesApiV3MessagesGet.Responses.$200>
  }
  ['/api/v3/nft/collections']: {
    /**
     * get_nft_collections_api_v3_nft_collections_get - Get Nft Collections
     * 
     * Get NFT collections.
     */
    'get'(
      parameters?: Parameters<Paths.GetNftCollectionsApiV3NftCollectionsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetNftCollectionsApiV3NftCollectionsGet.Responses.$200>
  }
  ['/api/v3/nft/items']: {
    /**
     * get_nft_items_api_v3_nft_items_get - Get Nft Items
     * 
     * Get NFT items.
     */
    'get'(
      parameters?: Parameters<Paths.GetNftItemsApiV3NftItemsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetNftItemsApiV3NftItemsGet.Responses.$200>
  }
  ['/api/v3/nft/transfers']: {
    /**
     * get_nft_transfers_api_v3_nft_transfers_get - Get Nft Transfers
     * 
     * Get NFT transfers by specified filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetNftTransfersApiV3NftTransfersGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetNftTransfersApiV3NftTransfersGet.Responses.$200>
  }
  ['/api/v3/jetton/masters']: {
    /**
     * get_jetton_masters_api_v3_jetton_masters_get - Get Jetton Masters
     * 
     * Get Jetton masters by specified filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetJettonMastersApiV3JettonMastersGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetJettonMastersApiV3JettonMastersGet.Responses.$200>
  }
  ['/api/v3/jetton/wallets']: {
    /**
     * get_jetton_wallets_api_v3_jetton_wallets_get - Get Jetton Wallets
     * 
     * Get Jetton wallets by specified filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetJettonWalletsApiV3JettonWalletsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetJettonWalletsApiV3JettonWalletsGet.Responses.$200>
  }
  ['/api/v3/jetton/transfers']: {
    /**
     * get_jetton_transfers_api_v3_jetton_transfers_get - Get Jetton Transfers
     * 
     * Get Jetton transfers by specified filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetJettonTransfersApiV3JettonTransfersGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetJettonTransfersApiV3JettonTransfersGet.Responses.$200>
  }
  ['/api/v3/jetton/burns']: {
    /**
     * get_jetton_burns_api_v3_jetton_burns_get - Get Jetton Burns
     * 
     * Get Jetton burns by specified filters.
     */
    'get'(
      parameters?: Parameters<Paths.GetJettonBurnsApiV3JettonBurnsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetJettonBurnsApiV3JettonBurnsGet.Responses.$200>
  }
  ['/api/v3/message']: {
    /**
     * send_message_api_v3_message_post - Send Message
     * 
     * Send external message to TON network.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SendMessageApiV3MessagePost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendMessageApiV3MessagePost.Responses.$200>
  }
  ['/api/v3/runGetMethod']: {
    /**
     * run_get_method_api_v3_runGetMethod_post - Run Get Method
     * 
     * Run get method of smart contract. Stack supports only `num`, `cell` and `slice` types:
     * ```
     * [
     *     {
     *         "type": "num",
     *         "value": "0x12a"
     *     },
     *     {
     *         "type": "cell",
     *         "value": "te6..." // base64 encoded boc with cell
     *     },
     *     {
     *         "type": "slice",
     *         "value": "te6..." // base64 encoded boc with slice
     *     }
     * ]
     * ```
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.RunGetMethodApiV3RunGetMethodPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RunGetMethodApiV3RunGetMethodPost.Responses.$200>
  }
  ['/api/v3/estimateFee']: {
    /**
     * estimate_fee_api_v3_estimateFee_post - Estimate Fee
     * 
     * Estimate fee for external message.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EstimateFeeApiV3EstimateFeePost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EstimateFeeApiV3EstimateFeePost.Responses.$200>
  }
  ['/api/v3/account']: {
    /**
     * get_account_information_api_v3_account_get - Get Account Information
     * 
     * Get smart contract information.
     */
    'get'(
      parameters?: Parameters<Paths.GetAccountInformationApiV3AccountGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAccountInformationApiV3AccountGet.Responses.$200>
  }
  ['/api/v3/wallet']: {
    /**
     * get_wallet_information_api_v3_wallet_get - Get Wallet Information
     * 
     * Get wallet smart contract information. The following wallets are supported: `v1r1`, `v1r2`, `v1r3`, `v2r1`, `v2r2`, `v3r1`, `v3r2`, `v4r1`, `v4r2`.
     * In case the account is not a wallet error code 409 is returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetWalletInformationApiV3WalletGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWalletInformationApiV3WalletGet.Responses.$200>
  }
  ['/api/v3/notcoin_holders']: {
    /**
     * get_notcoin_holders_api_v3_notcoin_holders_get - Get Notcoin Holders
     * 
     * Get Notcoin voucher holders
     */
    'get'(
      parameters?: Parameters<Paths.GetNotcoinHoldersApiV3NotcoinHoldersGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetNotcoinHoldersApiV3NotcoinHoldersGet.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

