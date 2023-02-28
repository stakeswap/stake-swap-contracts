# lsa-contracts

Liquid staking aggregator contracts

## Development

1. install [foundry](https://book.getfoundry.sh/getting-started/installation)
2. install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
3. clone this repository
   ```bash
   git clone https://github.com/4000d/lsa-contracts.git --recurse-submodules --remote-submodules
   ```
4. install foundry packages:
   ```bash
   forge install
   git submodule update --init --recursive
   ```
5. install npm packages:
   ```bash
   yarn install
   ```
6. run `make` to compile contract and generate typechain bindings
   ```bash
   make
   ```
7. run `make test` for unit testing
   ```bash
   make test
   ```

## AMM

### Users

1. Trader: 거래
2. Liquidity Provider: 유동성 제공
3. Staker: 유동성 제공 후 LP토큰 스태이킹

### Process

stake할 때

- 50%
