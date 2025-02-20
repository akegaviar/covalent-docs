---
title: PixelProperty
order: 12
hidden: false
featuredImage: /static/images/project-showcase/banners/pixel-property.png
description: A fun and engaging app for artists and marketers to come together and enjoy.
---

![Pixel Property Banner](/static/images/project-showcase/banners/pixel-property.png)

&nbsp;
# Pixel Property

### Preview
https://www.youtube.com/watch?v=v_JpUJR7dlA

<Aside>

“Covalent API is very straight forward and easy to plug in with Axios!”

</Aside>

&nbsp;
### Use of Covalent API
The V1 of PixelProperty has been on mainnet since 2018. The PixelProperty team wanted to make it cross-chain and remove dependency on the Etheruem full node they were running. For historic data, the contract emits a SetColors event when drawing, and one of our features is creating a timelapse. 

A SQLite3 database was created for saving events that have been requested (to reduce re-requests on the API), and it iterates through all the events propagated by the mainnet contract, and saves them into a local database which can then be quickly query when needed.

&nbsp;
### Event
The project was built at [#ETHGlobal - Scaling Ethereum](https://www.covalenthq.com/blog/scaling-ethereum-winners/)

&nbsp;
### Developers

- Carson Roscoe

