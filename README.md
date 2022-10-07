# @usewinter/checkout

:rocket::rocket: React package to integrate Winter checkout :rocket::rocket:

Installation

```
npm i winter-marketplace-checkout

OR

yarn add winter-marketplace-checkout
```

Usage in your react app

```
import { WinterCheckout } from 'winter-marketplace-checkout';


      <WinterCheckout
        showModal={showWinterModal}
        contractAddress={"0xef2d92168835eb485d79733a0274fc5866025c17"}
        tokenId={"134"}
        production={true}
        // Will only source orders from this marketplace - Don't pass in this var if you are an aggregator
        orderSource={'{{MARKETPLACE_URL}}'}
        // For analytics purposes this will show us which marketplace the purchase came through
        fillSource={'{{MARKETPLACE_URL}}'}
        onClose={() => {
          setShowWinterModal(false);
        }}
      />
```

### Params:

#### showModal

A boolean that determines if the checkout is open

#### contractAddress

The contract address of the NFT that you want to see

#### tokenId

The token id of the NFT that you want to see

#### production

If true it points to mainnet. If false it points to goerli.

#### orderSource

Will only source orders from this marketplace - don't pass in this var if you are an aggregator that facilitates purchases to other marketplaces

#### fillSource

For analytics purposes this will show us which marketplace the purchase came through

#### onClose

This the function that will be called when people try to close the modal
