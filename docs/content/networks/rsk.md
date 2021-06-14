---
title: RSK indexing & querying data API
order: 7
hidden: false
featuredImage: ./images/RSK.png
description: Support for RSK network
---

![Recipe logo](./images/RSK.png)

# RSK Network

## Introduction

[RSK](https://www.rsk.co/) is the first general purpose smart contract platform secured by the Bitcoin Network.
RSK’s Contracts goal is to add value and functionality to the bitcoin Contracts ecosystem by enabling smart contracts, near instant Contracts payments, and higher scalabiity.
RSK Blockchain is connected to Bitcoin through Merged
Contracts Mining and a two-way peg also known as the bridge.

The RSK blockchain is highly decentralised. RSK is merge-mined with Bitcoin, and has a hashpower that is second only to Bitcoin. As such, it is believed to be the most secure and censorship resistant smart contract platform. Refer to [RSK Stats](https://stats.rsk.co/) for the live value of the RSK hash rate.

### Quick facts

<TableWrap>

|Property|Value|
|---|---|
|RSK Mainnet chainId|`30`|
|RSK Testnet chainId|`31`|
|RSK Blockchain Explorer|https://explorer.rsk.co/|
|Block time|https://stats.rsk.co/|

</TableWrap>


<!-- ### Quickstart overview video
<YouTube id="qhibXxKANWE"/> -->


## Supported endpoints

<Aside>

All [**Class A**](https://www.covalenthq.com/docs/api/#tag--Class-A) endpoints are supported for the RSK mainnet and testnet. You can query either network via the unified API by changing the `chainId`.

</Aside>

<Definitions>

- `api.covalenthq.com/v1/{chainId}/address/{address}/balances_v2/`

  - Get token balances for `address`. Return a list of all ERC20 and NFT token balances including ERC721 and ERC1155 along with their current spot prices.

- `api.covalenthq.com/v1/{chainId}/address/{address}/transactions_v2/`

  - Retrieve all transactions for `address` including their decoded log events. This endpoint does a deep-crawl of the blockchain to retrieve all kinds of transactions that references the address.

- `api.covalenthq.com/v1/{chainId}/address/{address}/transfers_v2/`

  - Get ERC20 token transfers for `address` along with historical token prices.

- `api.covalenthq.com/v1/{chainId}/tokens/{contract_address}/token_holders/`

  - Return a paginated list of token holders `contract_address` as of any historical block height.

- `api.covalenthq.com/v1/{chainId}/events/address/{contract_address}/`

  - Return a paginated list of decoded log events emitted by a particular smart contract.

- `api.covalenthq.com/v1/{chainId}/events/topics/{topic}/`
  - Return a paginated list of decoded log events with one or more topic hashes separated by a comma.

</Definitions>


<a target="_blank" class="Button Button-is-docs-primary" href="https://www.covalenthq.com/docs/api/">Go to Covalent's API Reference</a>

--- 