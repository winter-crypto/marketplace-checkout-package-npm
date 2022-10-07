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

#### YOUR PROJECT ID

Get this from the Winter team :)

#### PRODUCTION

false if you're testing in sandbox, true when you go live!

#### showModal

this toggles true / false based on the state of your "Pay with Card" button
