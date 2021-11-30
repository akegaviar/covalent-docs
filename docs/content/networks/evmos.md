---
title: EVMOS Mainnet & Testnet
order: 15
hidden: false
featuredImage: ./images/Evmos.png
description: Evmos is an application-agnostic Cosmos chain that will be interoperable with the Ethereum mainnet.
---

![EVMOS network banner](./images/Evmos.png)

# EVMOS

## Introduction

Evmos is an application-agnostic Cosmos chain that will be interoperable with the Ethereum mainnet, EVM-compatible environments, and other BFT chains via IBC, making it easy for users and developers to interact seamlessly between chains. Evmos aims to be the EVM Hub of Cosmos, making it easy for smart contracts to deploy and communicate within the Cosmos ecosystem.

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|EVMOS Mainnet chainId|`9001`|
|EVMOS Testnet chainId|`9000`|
|Cosmos Blockchain Explorer|explorer.evmos.org|
|Block time|~7 seconds|

</TableWrap>


## Supported endpoints

<Aside>

All __Class A__ endpoints are supported for the HECO mainnet and the HECO testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>


<Definitions>

- `api.covalenthq.com/v1/{chainId}/address/{address}/balances_v2/` 
  - Get token balances for `address`. Return a list of all ERC20 and NFT token balances including ERC721 and ERC1155 along with their current spot prices.

- `api.covalenthq.com/v1/{chainId}/address/{address}/transactions_v2/` 
  - Retrieve all transactions for `address` including their decoded log events. This endpoint does a deep-crawl of the blockchain to retrieve all kinds of transactions that references the address.

- `api.covalenthq.com/v1/{chainId}/address/{address}/transfers_v2/` 
  - Get ERC20 token transfers for `address` alongwith historical token prices.

- `api.covalenthq.com/v1/{chainId}/tokens/{contract_address}/token_holders/` 
  - Return a paginated list of token holders `contract_address` as of any historical block height.

- `api.covalenthq.com/v1/{chainId}/events/address/{contract_address}/` 
  - Return a paginated list of decoded log events emitted by a particular smart contract.

- `api.covalenthq.com/v1/{chainId}/events/topics/{topic}/` 
  - Return a paginated list of decoded log events with one or more topic hashes separated by a comma.

</Definitions>



<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 
