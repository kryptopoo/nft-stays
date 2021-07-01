# NFT Stays
The world's first NFT Homestay rental marketplace where users can mint their homestays with specific stay-days as owner digital assets, transfer or sell to others. The seller also easily to launch an auction to sell their NFT homestays.

## Features
The world's first NFT Homestay rental marketplace where users can
- **Mint** their homestays with specific stay-days as owner digital assets (NFT homestays)
- **Sell** the NFT homestays to the market by fixed-price or auction form
- **Buy** the  NFT homestays directly (fixed-price) or **place a bid** to join in the **auction** 
- **Burn** the NFT homestays if they're not necessary anymore
- **Transfer** the  NFT homestays (on-chain/cross-chain) to the friends
The application also leverages the power of Cosmos IBC to be able to transfer ownership of NFT homestays on cross-chains

## Getting Started
1. Start blockchain 'earth' \
`starport serve -c earth.yml -r`\
`vue/sudo npm run serve -- --port 8080 --mode=earth-r`
2. Start blockchain 'mars'\
`starport serve -c mars.yml -r`\
`sudo npm run serve -- --port 8080 --mode=mars-r`
3. Configure relayer\
`starport relayer configure -a \
--source-rpc "http://0.0.0.0:26657" \
--source-faucet "http://0.0.0.0:4500" \
--source-port "nftstays" \
--source-version "nftstays-1" \
--source-gasprice "0.0000025stake" \
--source-prefix "cosmos" \
--target-rpc "http://0.0.0.0:26659" \
--target-faucet "http://0.0.0.0:4501" \
--target-port "nftstays" \
--target-version "nftstays-1" \
--target-gasprice "0.0000025stake" \
--target-prefix "cosmos"`
4. Connect relayer\
`starport relayer connect`
