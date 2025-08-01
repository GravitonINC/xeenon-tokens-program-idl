# @graviton-inc/xeenon-tokens-program-idl

TypeScript IDL (Interface Definition Language) for the Xeenon Tokens Program on Solana.

## Overview

This package provides the complete IDL definition for the Xeenon Tokens Program, a Solana program that enables token trading, borrowing, staking, and rewards distribution. The IDL is available in both JSON format and TypeScript types for easy integration with Solana development tools.

## Features

- **Complete IDL Definition**: Full interface definition for all program instructions, accounts, events, and types
- **TypeScript Support**: Strongly typed definitions for all program structures
- **Solana Integration**: Compatible with Anchor, Solana Web3.js, and other Solana development tools
- **Rewards System**: Support for creator and staker rewards distribution
- **Trading Operations**: Buy/sell operations with exact cash/token amounts
- **Borrowing System**: Collateralized borrowing with debt management
- **Market Management**: Market creation, configuration, and period management

## Installation

```bash
npm install @graviton-inc/xeenon-tokens-program-idl
```

or

```bash
yarn add @graviton-inc/xeenon-tokens-program-idl
```

## Usage

### Basic Import

```typescript
import { idl, Tokens } from '@graviton-inc/xeenon-tokens-program-idl';

// Use the IDL with Anchor
const program = new Program<Tokens>(idl, programId, provider);

// Use the TypeScript types
const marketAccount: Tokens['accounts'][0] = // ... your market account
```

### Program ID

The Xeenon Tokens Program ID is:
```
XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf
```

### Key Instructions

#### Market Operations
- `initXeenonPosition`: Create a user position in a market, required to stake and borrow

#### Trading Operations
- `buyWithExactCashIn`: Buy tokens with exact cash amount
- `sellWithExactTokenIn`: Sell tokens for exact cash amount

#### Staking & Borrowing
- `depositToken`: Deposit tokens to stake
- `withdrawToken`: Withdraw staked tokens
- `borrow`: Borrow against staked collateral
- `repay`: Repay borrowed amount

#### Rewards
- `claimCreatorRewards`: Claim rewards for market creators
- `claimStakerRewards`: Claim rewards for stakers
- `accruePositionRewards`: Accrue rewards for positions for previous period. Needs to be called before depositToken, withdrawToken, or claimStakerRewards for every period that has passed and the position has been active.

### Account Types

#### Core Accounts
- `xeenonMarket`: Main market account with trading and staking data
- `xeenonMarketGroup`: Market group configuration
- `xeenonPosition`: User position in a market
- `xeenonMarketPeriod`: Period-specific rewards of a market

#### Mayflower Integration
- `marketMeta`: Market metadata and configuration
- `marketLinear`: Linear market state and price curve
- `personalPosition`: User's personal position data

### Event Types

The program emits various events for tracking operations:

- `marketCreatedEvent`: Market creation
- `depositEvent`: Token deposits
- `withdrawEvent`: Token withdrawals
- `borrowEvent`: Borrowing operations
- `repayEvent`: Repayment operations
- `buyWithExactCashInEvent`: Buy operations
- `sellWithExactTokenInEvent`: Sell operations
- `claimCreatorRewardsEvent`: Creator reward claims
- `claimStakerRewardsEvent`: Staker reward claims
- `marketPeriodClosedEvent`: Period closure
- `floorRaisedEvent`: Floor price updates

### Error Codes

The program includes comprehensive error handling:

- `6000`: Insufficient Staked Balance
- `6001`: Insufficient Global Staked Balance
- `6002`: Invalid Mint Percentage Options
- `6003`: Invalid Creator Rewards Share Percentage
- `6004`: Invalid Closing Period
- `6005`: Borrow Power Exceeded
- `6006`: Insufficient Debt to Repay
- `6007`: Cannot withdraw collateral with outstanding debt
- `6008`: Invalid Period Provided
- `6009`: Invalid Next Period Provided
- `6010`: Period is not closed
- `6011`: Position period does not match market period
- `6012`: No rewards to claim
- `6013`: Arithmetic overflow

## Development

### Building

```bash
yarn build
```

### Project Structure

```
src/
├── index.ts          # Main exports
├── tokens.ts         # TypeScript type definitions
└── tokens.json       # Raw IDL JSON
```

### TypeScript Configuration

The project uses TypeScript 5.5.4 with strict type checking. The build process generates both JavaScript and TypeScript declaration files.

## Integration Examples

### With Anchor Framework

```typescript
import { Program, AnchorProvider } from '@coral-xyz/anchor';
import { idl, Tokens } from '@graviton-inc/xeenon-tokens-program-idl';

const provider = AnchorProvider.env();
const program = new Program<Tokens>(idl, programId, provider);

// Initialize a market
await program.methods
  .initXeenonMarket({
    name: "My Token",
    symbol: "MTK",
    uri: "https://example.com/metadata.json",
    creatorRewardsSharePercentage: 10
  })
  .accounts({
    payer: wallet.publicKey,
    // ... other required accounts
  })
  .rpc();
```

### With Solana Web3.js

```typescript
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { idl } from '@graviton-inc/xeenon-tokens-program-idl';

// Create instruction from IDL
const instruction = await program.methods
  .depositToken(new BN(1000000))
  .accounts({
    payer: wallet.publicKey,
    // ... other accounts
  })
  .instruction();

const transaction = new Transaction().add(instruction);
```

## License

MIT License.

## Support

For questions and support, please create an issue in this repository.

## Related Links

- [Xeenon Platform](https://xeenon.xyz)
- [Solana Documentation](https://docs.solana.com)
- [Anchor Framework](https://www.anchor-lang.com)
