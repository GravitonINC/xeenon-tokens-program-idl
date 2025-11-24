/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `./tokens.json`.
 */
export type Tokens = {
  "address": "XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf",
  "metadata": {
    "name": "tokens",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Xeenon Tokens Program"
  },
  "instructions": [
    {
      "name": "accruePositionRewards",
      "discriminator": [
        219,
        70,
        53,
        102,
        88,
        139,
        148,
        166
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "xeenonMarket",
          "relations": [
            "xeenonPosition"
          ]
        },
        {
          "name": "xeenonPosition",
          "writable": true
        },
        {
          "name": "marketPeriod"
        }
      ],
      "args": [
        {
          "name": "period",
          "type": "u16"
        }
      ]
    },
    {
      "name": "borrow",
      "discriminator": [
        228,
        253,
        131,
        202,
        207,
        116,
        89,
        18
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "xeenonMarket",
          "writable": true,
          "relations": [
            "xeenonPosition"
          ]
        },
        {
          "name": "mayflowerMarketMeta"
        },
        {
          "name": "mayflowerMarket",
          "writable": true
        },
        {
          "name": "xeenonPosition",
          "writable": true
        },
        {
          "name": "mayflowerPersonalPosition",
          "docs": [
            "Mayflower personal position owned by Xeenon market"
          ],
          "writable": true
        },
        {
          "name": "payerTokenAccount",
          "docs": [
            "The token account to deposit the base token to"
          ],
          "writable": true
        },
        {
          "name": "liqVaultMain",
          "docs": [
            "Liquidity vault for the market"
          ],
          "writable": true
        },
        {
          "name": "mayflowerTenant"
        },
        {
          "name": "mayflowerMarketGroup"
        },
        {
          "name": "revEscrowGroup",
          "docs": [
            "Account to hold the revenue for the market group"
          ],
          "writable": true
        },
        {
          "name": "revEscrowTenant",
          "docs": [
            "Account to hold the revenue for the tenant"
          ],
          "writable": true
        },
        {
          "name": "mintMain",
          "docs": [
            "Token used as a reserve for the market"
          ]
        },
        {
          "name": "tokenProgramMain"
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyWithExactCashIn",
      "discriminator": [
        53,
        248,
        95,
        20,
        54,
        162,
        146,
        247
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "xeenonMarket"
        },
        {
          "name": "mayflowerTenant"
        },
        {
          "name": "mayflowerMarketGroup"
        },
        {
          "name": "mayflowerMarketMeta"
        },
        {
          "name": "mayflowerMarket",
          "writable": true
        },
        {
          "name": "mintToken",
          "writable": true
        },
        {
          "name": "mintMain"
        },
        {
          "name": "tokenDst",
          "writable": true
        },
        {
          "name": "mainAta",
          "writable": true
        },
        {
          "name": "liqVaultMain",
          "writable": true
        },
        {
          "name": "revEscrowGroup",
          "docs": [
            "Account to hold the revenue for the market group"
          ],
          "writable": true
        },
        {
          "name": "revEscrowTenant",
          "docs": [
            "Account to hold the revenue for the tenant"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgramMain"
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        }
      ],
      "args": [
        {
          "name": "cashIn",
          "type": "u64"
        },
        {
          "name": "minTokenOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "changeMarketCreatorRewardsShare",
      "discriminator": [
        41,
        250,
        239,
        184,
        106,
        50,
        225,
        123
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "superAdmin",
          "docs": [
            "Super admin of the program"
          ],
          "signer": true,
          "address": "XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf"
        },
        {
          "name": "xeenonMarket",
          "docs": [
            "Market to change rewards share"
          ],
          "writable": true
        },
        {
          "name": "xeenonMarketGroup"
        }
      ],
      "args": [
        {
          "name": "newRewardsShare",
          "type": "u8"
        }
      ]
    },
    {
      "name": "changeMarketGroupFees",
      "discriminator": [
        171,
        243,
        93,
        239,
        75,
        215,
        104,
        167
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "governance",
          "signer": true
        },
        {
          "name": "xeenonMarketGroup",
          "docs": [
            "Market to change fees"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  103,
                  114,
                  111,
                  117,
                  112
                ]
              },
              {
                "kind": "account",
                "path": "mayflowerMarketGroup"
              }
            ]
          }
        },
        {
          "name": "mayflowerMarketGroup",
          "writable": true
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        }
      ],
      "args": [
        {
          "name": "newFees",
          "type": {
            "defined": {
              "name": "fees"
            }
          }
        }
      ]
    },
    {
      "name": "changeMarketGroupOptionsRate",
      "discriminator": [
        23,
        174,
        111,
        180,
        119,
        209,
        97,
        29
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "governance",
          "signer": true
        },
        {
          "name": "xeenonMarketGroup",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "yearlyOptionsAccrualBps",
          "type": "u16"
        }
      ]
    },
    {
      "name": "claimCreatorRewards",
      "discriminator": [
        14,
        215,
        177,
        181,
        221,
        193,
        125,
        85
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mayflowerMarketMeta"
        },
        {
          "name": "mayflowerMarket"
        },
        {
          "name": "xeenonMarket",
          "writable": true
        },
        {
          "name": "mintToken"
        },
        {
          "name": "payerTokenAccount",
          "writable": true
        },
        {
          "name": "marketTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "claimStakerRewards",
      "discriminator": [
        249,
        241,
        43,
        59,
        184,
        196,
        118,
        246
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mayflowerMarketMeta"
        },
        {
          "name": "mayflowerMarket"
        },
        {
          "name": "xeenonMarket",
          "writable": true,
          "relations": [
            "xeenonPosition"
          ]
        },
        {
          "name": "xeenonPosition",
          "writable": true
        },
        {
          "name": "mintToken"
        },
        {
          "name": "payerTokenAccount",
          "writable": true
        },
        {
          "name": "marketTokenAccount",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "closeMarketPeriod",
      "discriminator": [
        96,
        10,
        111,
        113,
        50,
        22,
        31,
        188
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "superAdmin",
          "docs": [
            "Super admin of the program"
          ],
          "signer": true,
          "address": "XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf"
        },
        {
          "name": "xeenonMarket",
          "writable": true
        },
        {
          "name": "xeenonMarketGroup",
          "writable": true
        },
        {
          "name": "mayflowerMarketGroup"
        },
        {
          "name": "closingPeriod",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  112,
                  101,
                  114,
                  105,
                  111,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "xeenonMarket"
              },
              {
                "kind": "account",
                "path": "xeenon_market.current_period",
                "account": "xeenonMarket"
              }
            ]
          }
        },
        {
          "name": "mayflowerMarketMeta",
          "writable": true
        },
        {
          "name": "mintOptions",
          "docs": [
            "Mint used to create options"
          ],
          "writable": true
        },
        {
          "name": "marketOptionsAta",
          "writable": true
        },
        {
          "name": "marketTokenAta",
          "writable": true
        },
        {
          "name": "marketMainAta",
          "writable": true
        },
        {
          "name": "liqVaultMain",
          "writable": true
        },
        {
          "name": "mayflowerTenant"
        },
        {
          "name": "mintMain",
          "docs": [
            "Token used as a reserve for the market"
          ],
          "writable": true
        },
        {
          "name": "mintToken",
          "writable": true
        },
        {
          "name": "revEscrowGroup",
          "writable": true
        },
        {
          "name": "revEscrowTenant",
          "writable": true
        },
        {
          "name": "mayflowerMarket",
          "writable": true
        },
        {
          "name": "tokenProgramMain"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "closeMarketPeriodArgs"
            }
          }
        }
      ]
    },
    {
      "name": "collectRev",
      "discriminator": [
        237,
        19,
        188,
        25,
        211,
        167,
        175,
        194
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "superAdmin",
          "docs": [
            "Super admin of the program"
          ],
          "signer": true,
          "address": "XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf"
        },
        {
          "name": "xeenonMarketGroup",
          "writable": true
        },
        {
          "name": "xeenonMarket"
        },
        {
          "name": "mayflowerMarketGroup"
        },
        {
          "name": "mayflowerMarketMeta"
        },
        {
          "name": "marketMainAta",
          "writable": true
        },
        {
          "name": "mintMain"
        },
        {
          "name": "revEscrowGroup",
          "writable": true
        },
        {
          "name": "tokenProgramMain"
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        }
      ],
      "args": []
    },
    {
      "name": "depositToken",
      "discriminator": [
        11,
        156,
        96,
        218,
        39,
        163,
        180,
        19
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "xeenonMarket",
          "writable": true,
          "relations": [
            "xeenonPosition"
          ]
        },
        {
          "name": "xeenonMarketGroup"
        },
        {
          "name": "mayflowerMarketMeta"
        },
        {
          "name": "mayflowerMarket",
          "writable": true
        },
        {
          "name": "xeenonPosition",
          "writable": true
        },
        {
          "name": "mayflowerPersonalPosition",
          "docs": [
            "Mayflower personal position owned by Xeenon position"
          ],
          "writable": true
        },
        {
          "name": "payerTokenAccount",
          "docs": [
            "The ATA to take the base token from"
          ],
          "writable": true
        },
        {
          "name": "mintToken",
          "docs": [
            "The base token mint"
          ]
        },
        {
          "name": "escrow",
          "docs": [
            "Shared escrow account for the market"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initMarketLinearConfig",
      "discriminator": [
        48,
        183,
        174,
        110,
        52,
        96,
        216,
        176
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "superAdmin",
          "docs": [
            "Super admin of the program"
          ],
          "signer": true,
          "address": "XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf"
        },
        {
          "name": "marketLinearConfig",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "priceCurve",
          "type": {
            "defined": {
              "name": "linearPriceCurveSerialized"
            }
          }
        }
      ]
    },
    {
      "name": "initXeenonMarket",
      "discriminator": [
        71,
        139,
        32,
        41,
        107,
        170,
        199,
        132
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "xeenonMarketGroup",
          "writable": true
        },
        {
          "name": "mayflowerMarketGroup"
        },
        {
          "name": "superAdmin",
          "docs": [
            "Super admin of the program"
          ],
          "signer": true,
          "address": "XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf"
        },
        {
          "name": "seed",
          "docs": [
            "Seed of the market"
          ],
          "signer": true
        },
        {
          "name": "mintToken",
          "docs": [
            "Mint token associated with the market"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "marketLinearConfig"
        },
        {
          "name": "metadata",
          "writable": true
        },
        {
          "name": "mayflowerTenant",
          "docs": [
            "Mayflower tenant for Xeenon"
          ]
        },
        {
          "name": "mayflowerMarket",
          "docs": [
            "PDA for the Mayflower Market to create"
          ],
          "writable": true
        },
        {
          "name": "mayflowerMarketMeta",
          "docs": [
            "PDA for the Mayflower Market Meta to create"
          ],
          "writable": true
        },
        {
          "name": "xeenonMarket",
          "docs": [
            "Market to create"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "mayflowerMarketMeta"
              }
            ]
          }
        },
        {
          "name": "mintMain",
          "docs": [
            "Token used as a reserve for the market"
          ]
        },
        {
          "name": "mintOptions",
          "docs": [
            "Mint used to create options"
          ],
          "writable": true
        },
        {
          "name": "liqVaultMain",
          "docs": [
            "Liquidity vault for the market"
          ],
          "writable": true
        },
        {
          "name": "revEscrowGroup",
          "docs": [
            "Account to hold the revenue for the market group"
          ],
          "writable": true
        },
        {
          "name": "revEscrowTenant",
          "docs": [
            "Account to hold the revenue for the tenant"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgramMain"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "initXeenonMarketParams"
            }
          }
        }
      ]
    },
    {
      "name": "initXeenonMarketGroup",
      "discriminator": [
        80,
        127,
        113,
        83,
        3,
        2,
        24,
        176
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "superAdmin",
          "docs": [
            "Super admin of the program"
          ],
          "signer": true,
          "address": "XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf"
        },
        {
          "name": "seed",
          "docs": [
            "Seed of the market group"
          ],
          "signer": true
        },
        {
          "name": "tenantAdmin",
          "docs": [
            "Seed of the market group"
          ],
          "signer": true
        },
        {
          "name": "mayflowerTenant",
          "docs": [
            "Mayflower tenant for Samsara"
          ]
        },
        {
          "name": "mayflowerMarketGroup",
          "docs": [
            "PDA for the Mayflower Market Group to create"
          ],
          "writable": true
        },
        {
          "name": "xeenonMarketGroup",
          "docs": [
            "Market to create"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  103,
                  114,
                  111,
                  117,
                  112
                ]
              },
              {
                "kind": "account",
                "path": "mayflowerMarketGroup"
              }
            ]
          }
        },
        {
          "name": "governance",
          "docs": [
            "Governance of the market group"
          ]
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initXeenonPosition",
      "discriminator": [
        167,
        127,
        5,
        57,
        220,
        227,
        226,
        28
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "xeenonMarket"
        },
        {
          "name": "xeenonPosition",
          "docs": [
            "Position to create"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "xeenonMarket"
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "mayflowerPersonalPosition",
          "docs": [
            "Mayflower personal position account for the market"
          ],
          "writable": true
        },
        {
          "name": "mintToken"
        },
        {
          "name": "mayflowerMarketMeta",
          "docs": [
            "PDA for the Mayflower Market Meta to create"
          ]
        },
        {
          "name": "escrow",
          "docs": [
            "Shared escrow account for the market"
          ],
          "writable": true
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "repay",
      "discriminator": [
        234,
        103,
        67,
        82,
        208,
        234,
        219,
        166
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "xeenonMarket",
          "writable": true,
          "relations": [
            "xeenonPosition"
          ]
        },
        {
          "name": "mayflowerMarketMeta"
        },
        {
          "name": "mayflowerMarket",
          "writable": true
        },
        {
          "name": "xeenonPosition",
          "writable": true
        },
        {
          "name": "mayflowerPersonalPosition",
          "docs": [
            "Mayflower personal position owned by Xeenon position"
          ],
          "writable": true
        },
        {
          "name": "payerTokenAccount",
          "docs": [
            "The ATA to take the base token from for repayment"
          ],
          "writable": true
        },
        {
          "name": "liqVaultMain",
          "docs": [
            "Liquidity vault for the market"
          ],
          "writable": true
        },
        {
          "name": "mintMain",
          "docs": [
            "Token used as a reserve for the market"
          ],
          "writable": true
        },
        {
          "name": "tokenProgramMain"
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sellWithExactTokenIn",
      "discriminator": [
        27,
        141,
        98,
        109,
        197,
        168,
        104,
        84
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "xeenonMarket"
        },
        {
          "name": "mayflowerTenant"
        },
        {
          "name": "mayflowerMarketGroup"
        },
        {
          "name": "mayflowerMarketMeta"
        },
        {
          "name": "mayflowerMarket",
          "writable": true
        },
        {
          "name": "mintToken",
          "writable": true
        },
        {
          "name": "mintMain"
        },
        {
          "name": "tokenSrc",
          "writable": true
        },
        {
          "name": "mainDst",
          "writable": true
        },
        {
          "name": "liqVaultMain",
          "writable": true
        },
        {
          "name": "revEscrowGroup",
          "docs": [
            "Account to hold the revenue for the market group"
          ],
          "writable": true
        },
        {
          "name": "revEscrowTenant",
          "docs": [
            "Account to hold the revenue for the tenant"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenProgramMain"
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "cashOutMin",
          "type": "u64"
        }
      ]
    },
    {
      "name": "transferMarketCreator",
      "discriminator": [
        187,
        198,
        30,
        8,
        10,
        169,
        72,
        239
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "superAdmin",
          "docs": [
            "Super admin of the program"
          ],
          "signer": true,
          "address": "XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf"
        },
        {
          "name": "xeenonMarket",
          "docs": [
            "Market to change rewards share"
          ],
          "writable": true
        },
        {
          "name": "xeenonMarketGroup"
        }
      ],
      "args": [
        {
          "name": "newRewardsShare",
          "type": "u8"
        }
      ]
    },
    {
      "name": "transferRev",
      "discriminator": [
        85,
        211,
        126,
        165,
        239,
        47,
        137,
        47
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "superAdmin",
          "docs": [
            "Super admin of the program"
          ],
          "signer": true,
          "address": "XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf"
        },
        {
          "name": "xeenonMarket"
        },
        {
          "name": "marketRevSrc",
          "writable": true
        },
        {
          "name": "revDst",
          "writable": true
        },
        {
          "name": "mintMain"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawToken",
      "discriminator": [
        136,
        235,
        181,
        5,
        101,
        109,
        57,
        81
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "xeenonMarket",
          "writable": true,
          "relations": [
            "xeenonPosition"
          ]
        },
        {
          "name": "xeenonMarketGroup"
        },
        {
          "name": "mayflowerMarketMeta"
        },
        {
          "name": "mayflowerMarket",
          "writable": true
        },
        {
          "name": "xeenonPosition",
          "writable": true
        },
        {
          "name": "mayflowerPersonalPosition",
          "docs": [
            "Mayflower personal position owned by Xeenon position"
          ],
          "writable": true
        },
        {
          "name": "payerTokenAccount",
          "docs": [
            "The ATA to take the base token from"
          ],
          "writable": true
        },
        {
          "name": "mintToken",
          "docs": [
            "The base token mint"
          ],
          "writable": true
        },
        {
          "name": "escrow",
          "docs": [
            "Shared escrow account for the market"
          ],
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "xeenonRaiseFloorPreserveAreaChecked",
      "discriminator": [
        75,
        147,
        225,
        192,
        118,
        81,
        54,
        132
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "superAdmin",
          "docs": [
            "Super admin of the program"
          ],
          "signer": true,
          "address": "XEENqbVXt8y94cH7WMwYyQSuDgkvzZTzEzpsWLZu7Jf"
        },
        {
          "name": "xeenonMarketGroup",
          "docs": [
            "Market to change fees"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  103,
                  114,
                  111,
                  117,
                  112
                ]
              },
              {
                "kind": "account",
                "path": "mayflowerMarketGroup"
              }
            ]
          }
        },
        {
          "name": "mayflowerMarketGroup"
        },
        {
          "name": "mayflowerMarketMeta",
          "writable": true
        },
        {
          "name": "mayflowerMarket",
          "writable": true
        },
        {
          "name": "mayflowerProgram",
          "address": "MMkP6WPG4ySTudigPQpKNpranEYBzYRDe8Ua7Dx89Rk"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "raiseFloorPreserveAreaCheckedArgs"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "marketGroup",
      "discriminator": [
        131,
        205,
        141,
        87,
        148,
        210,
        33,
        36
      ]
    },
    {
      "name": "marketLinear",
      "discriminator": [
        133,
        114,
        237,
        100,
        77,
        96,
        120,
        49
      ]
    },
    {
      "name": "marketLinearConfig",
      "discriminator": [
        199,
        220,
        138,
        165,
        40,
        47,
        195,
        203
      ]
    },
    {
      "name": "marketMeta",
      "discriminator": [
        95,
        146,
        205,
        231,
        152,
        205,
        151,
        183
      ]
    },
    {
      "name": "personalPosition",
      "discriminator": [
        40,
        172,
        123,
        89,
        170,
        15,
        56,
        141
      ]
    },
    {
      "name": "xeenonMarket",
      "discriminator": [
        249,
        44,
        25,
        160,
        75,
        241,
        152,
        50
      ]
    },
    {
      "name": "xeenonMarketGroup",
      "discriminator": [
        205,
        199,
        160,
        156,
        193,
        123,
        254,
        131
      ]
    },
    {
      "name": "xeenonMarketPeriod",
      "discriminator": [
        40,
        249,
        228,
        63,
        94,
        218,
        69,
        152
      ]
    },
    {
      "name": "xeenonPosition",
      "discriminator": [
        60,
        223,
        128,
        224,
        146,
        133,
        212,
        93
      ]
    }
  ],
  "events": [
    {
      "name": "borrowEvent",
      "discriminator": [
        86,
        8,
        140,
        206,
        215,
        179,
        118,
        201
      ]
    },
    {
      "name": "buyWithExactCashInEvent",
      "discriminator": [
        104,
        131,
        151,
        167,
        143,
        206,
        98,
        19
      ]
    },
    {
      "name": "changeMarketCreatorRewardsShareEvent",
      "discriminator": [
        53,
        223,
        219,
        12,
        149,
        152,
        13,
        213
      ]
    },
    {
      "name": "claimCreatorRewardsEvent",
      "discriminator": [
        88,
        202,
        199,
        7,
        7,
        14,
        179,
        164
      ]
    },
    {
      "name": "claimStakerRewardsEvent",
      "discriminator": [
        41,
        7,
        166,
        191,
        139,
        194,
        81,
        77
      ]
    },
    {
      "name": "depositEvent",
      "discriminator": [
        120,
        248,
        61,
        83,
        31,
        142,
        107,
        144
      ]
    },
    {
      "name": "floorRaisedEvent",
      "discriminator": [
        180,
        150,
        147,
        252,
        238,
        147,
        174,
        236
      ]
    },
    {
      "name": "marketCreatedEvent",
      "discriminator": [
        130,
        142,
        5,
        16,
        107,
        160,
        73,
        124
      ]
    },
    {
      "name": "marketPeriodClosedEvent",
      "discriminator": [
        173,
        112,
        176,
        168,
        116,
        243,
        167,
        14
      ]
    },
    {
      "name": "repayEvent",
      "discriminator": [
        129,
        213,
        0,
        108,
        218,
        108,
        82,
        140
      ]
    },
    {
      "name": "sellWithExactTokenInEvent",
      "discriminator": [
        133,
        62,
        107,
        103,
        218,
        26,
        67,
        248
      ]
    },
    {
      "name": "transferMarketCreatorEvent",
      "discriminator": [
        250,
        202,
        181,
        67,
        41,
        214,
        168,
        234
      ]
    },
    {
      "name": "withdrawEvent",
      "discriminator": [
        22,
        9,
        133,
        26,
        160,
        44,
        71,
        192
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "insufficientStakedBalance",
      "msg": "Insufficient Staked Balance"
    },
    {
      "code": 6001,
      "name": "insufficientGlobalStakedBalance",
      "msg": "Insufficient Global Staked Balance"
    },
    {
      "code": 6002,
      "name": "invalidMintPercentageOptions",
      "msg": "Invalid Mint Percentage Options"
    },
    {
      "code": 6003,
      "name": "invalidCreatorRewardsSharePercentage",
      "msg": "Invalid Creator Rewards Share Percentage"
    },
    {
      "code": 6004,
      "name": "invalidClosingPeriod",
      "msg": "Invalid Closing Period"
    },
    {
      "code": 6005,
      "name": "borrowPowerExceeded",
      "msg": "Borrow Power Exceeded"
    },
    {
      "code": 6006,
      "name": "insufficientDebt",
      "msg": "Insufficient Debt to Repay"
    },
    {
      "code": 6007,
      "name": "cannotWithdrawCollateralWithDebt",
      "msg": "Cannot withdraw collateral with outstanding debt"
    },
    {
      "code": 6008,
      "name": "invalidPeriodProvided",
      "msg": "Invalid Period Provided"
    },
    {
      "code": 6009,
      "name": "invalidNextPeriodProvided",
      "msg": "Invalid Next Period Provided"
    },
    {
      "code": 6010,
      "name": "periodNotClosed",
      "msg": "Period is not closed"
    },
    {
      "code": 6011,
      "name": "periodMismatch",
      "msg": "Position period does not match market period"
    },
    {
      "code": 6012,
      "name": "noRewardsToClaim",
      "msg": "No rewards to claim"
    },
    {
      "code": 6013,
      "name": "arithmeticOverflow",
      "msg": "Arithmetic overflow"
    }
  ],
  "types": [
    {
      "name": "borrowEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "type": "pubkey"
          },
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "marketDebt",
            "type": "u64"
          },
          {
            "name": "userDebt",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "buyWithExactCashInEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "trader",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "u32"
          },
          {
            "name": "netCashIn",
            "type": "u64"
          },
          {
            "name": "fees",
            "type": "u64"
          },
          {
            "name": "tokenOut",
            "type": "u64"
          },
          {
            "name": "tokenSupply",
            "type": "u64"
          },
          {
            "name": "userBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "changeMarketCreatorRewardsShareEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creatorRewardsSharePercentage",
            "type": "u8"
          },
          {
            "name": "xeenonMarket",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "claimCreatorRewardsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "type": "pubkey"
          },
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "accumulatedClaims",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "userBalance",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "claimStakerRewardsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "type": "pubkey"
          },
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "accumulatedClaims",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "userBalance",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "closeMarketPeriodArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintPercentageOptions",
            "docs": [
              "The percentage of the accrued options that will be created"
            ],
            "type": "u8"
          },
          {
            "name": "closingPeriod",
            "docs": [
              "The period to close, must be equal to the current period"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "decimalSerialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "val",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "depositEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "type": "pubkey"
          },
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "userBalance",
            "type": "u64"
          },
          {
            "name": "userStaked",
            "type": "u64"
          },
          {
            "name": "marketStaked",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "dutchConfigSerialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initBoost",
            "docs": [
              "Initial boost for the dutch auction"
            ],
            "type": "f64"
          },
          {
            "name": "duration",
            "docs": [
              "Duration of the dutch auction in seconds"
            ],
            "type": "u32"
          },
          {
            "name": "curvature",
            "docs": [
              "Curvature of the dutch auction"
            ],
            "type": "f64"
          }
        ]
      }
    },
    {
      "name": "fees",
      "docs": [
        "All fees denominated in micro-basis points (1/10000th of a percent)"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buy",
            "type": "u32"
          },
          {
            "name": "sell",
            "type": "u32"
          },
          {
            "name": "borrow",
            "type": "u32"
          },
          {
            "name": "exerciseOption",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "floorRaisedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "floor",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "newShoulderEnd",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "u32"
          },
          {
            "name": "b2",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "initXeenonMarketParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "creatorRewardsSharePercentage",
            "type": "u8"
          },
          {
            "name": "isGhostCreator",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "linearPriceCurveSerialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "floor",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "m1",
            "docs": [
              "Shoulder slope"
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "m2",
            "docs": [
              "main slope"
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "x2",
            "docs": [
              "Shoulder end"
            ],
            "type": "u64"
          },
          {
            "name": "b2",
            "docs": [
              "Main y-intercept"
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "marketCreatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "marketGroup",
      "docs": [
        "Configuration for a group of markets"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tenant",
            "type": "pubkey"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "proposedAdmin",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "pdaMeta",
            "type": {
              "defined": {
                "name": "pdaMeta"
              }
            }
          },
          {
            "name": "fees",
            "type": {
              "defined": {
                "name": "fees"
              }
            }
          }
        ]
      }
    },
    {
      "name": "marketLinear",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketMeta",
            "docs": [
              "The market_meta for the linear"
            ],
            "type": "pubkey"
          },
          {
            "name": "state",
            "docs": [
              "The state for the market"
            ],
            "type": {
              "defined": {
                "name": "marketState"
              }
            }
          },
          {
            "name": "priceCurve",
            "docs": [
              "The price curve for the market"
            ],
            "type": {
              "defined": {
                "name": "linearPriceCurveSerialized"
              }
            }
          }
        ]
      }
    },
    {
      "name": "marketLinearConfig",
      "docs": [
        "This account is used to store preset values for the market linear config and save ~71 bytes in the transaction to initialize the market linear"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "priceCurve",
            "type": {
              "defined": {
                "name": "linearPriceCurveSerialized"
              }
            }
          }
        ]
      }
    },
    {
      "name": "marketMeta",
      "docs": [
        "Generic metadata for all kinds of markets"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintMain",
            "docs": [
              "Mint for the main backing token (the cash token)"
            ],
            "type": "pubkey"
          },
          {
            "name": "mintToken",
            "docs": [
              "Mint for the token being traded"
            ],
            "type": "pubkey"
          },
          {
            "name": "mintOptions",
            "docs": [
              "Mint for the options token"
            ],
            "type": "pubkey"
          },
          {
            "name": "marketGroup",
            "docs": [
              "The market group for the market"
            ],
            "type": "pubkey"
          },
          {
            "name": "market",
            "docs": [
              "The market for the meta",
              "Must link here in order to ensure that there is a 1:1 relationship between market and market meta"
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenProgramMain",
            "docs": [
              "The program ID for the main token"
            ],
            "type": "pubkey"
          },
          {
            "name": "liqVaultMain",
            "docs": [
              "Vault that holds the liquidity for the main token"
            ],
            "type": "pubkey"
          },
          {
            "name": "revEscrowGroup",
            "docs": [
              "The token account that holds the revenue for the market"
            ],
            "type": "pubkey"
          },
          {
            "name": "revEscrowTenant",
            "docs": [
              "The token account that holds the revenue for the tenant"
            ],
            "type": "pubkey"
          },
          {
            "name": "pdaMeta",
            "docs": [
              "The PDA meta for the market"
            ],
            "type": {
              "defined": {
                "name": "pdaMeta"
              }
            }
          },
          {
            "name": "decimals",
            "docs": [
              "Decimals for the main token"
            ],
            "type": "u8"
          },
          {
            "name": "permissions",
            "type": {
              "defined": {
                "name": "marketPermissions"
              }
            }
          },
          {
            "name": "startTime",
            "docs": [
              "Timestamp of when the market starts"
            ],
            "type": "u32"
          },
          {
            "name": "dutchConfig",
            "docs": [
              "The Dutch auction config for the market"
            ],
            "type": {
              "defined": {
                "name": "dutchConfigSerialized"
              }
            }
          }
        ]
      }
    },
    {
      "name": "marketPeriodClosedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "period",
            "type": "u16"
          },
          {
            "name": "timestamp",
            "type": "u32"
          },
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "stakersIndex",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "stakersAccruedRewardShares",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "stakersRewards",
            "type": "u64"
          },
          {
            "name": "creatorRewards",
            "type": "u64"
          },
          {
            "name": "b2",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "marketPermissions",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "val",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "marketState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenSupply",
            "docs": [
              "The total supply of the token"
            ],
            "type": "u64"
          },
          {
            "name": "totalCashLiquidity",
            "docs": [
              "The total cash liquidity in the market"
            ],
            "type": "u64"
          },
          {
            "name": "totalDebt",
            "docs": [
              "The total debt in the market"
            ],
            "type": "u64"
          },
          {
            "name": "totalCollateral",
            "docs": [
              "The total collateral in the market"
            ],
            "type": "u64"
          },
          {
            "name": "cumulativeRevenueMarket",
            "docs": [
              "The cumulative revenue for the market"
            ],
            "type": "u128"
          },
          {
            "name": "cumulativeRevenueTenant",
            "docs": [
              "The cumulative revenue for the tenant"
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "pdaMeta",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "seed",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "personalPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketMeta",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "escrow",
            "type": "pubkey"
          },
          {
            "name": "depositedTokenBalance",
            "type": "u64"
          },
          {
            "name": "debt",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "raiseFloorPreserveAreaCheckedArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "floorIncreaseRatio",
            "docs": [
              "The ratio of the floor increase (greater than 0.0)"
            ],
            "type": {
              "defined": {
                "name": "decimalSerialized"
              }
            }
          },
          {
            "name": "newShoulderEnd",
            "docs": [
              "The new shoulder end (must be greater than the current shoulder end)"
            ],
            "type": "u64"
          },
          {
            "name": "minLiqRatio",
            "docs": [
              "The minimum liquidity ratio (greater than or equal to 0.0)",
              "This is the ratio of the liqudity after the shoulder end to the liquidity of the shoulder"
            ],
            "type": {
              "defined": {
                "name": "decimalSerialized"
              }
            }
          }
        ]
      }
    },
    {
      "name": "repayEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "type": "pubkey"
          },
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "userDebt",
            "type": "u64"
          },
          {
            "name": "marketDebt",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "sellWithExactTokenInEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "trader",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "u32"
          },
          {
            "name": "actualCashOut",
            "type": "u64"
          },
          {
            "name": "fees",
            "type": "u64"
          },
          {
            "name": "tokenIn",
            "type": "u64"
          },
          {
            "name": "tokenSupply",
            "type": "u64"
          },
          {
            "name": "userBalance",
            "type": "u64"
          },
          {
            "name": "b2",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "transferMarketCreatorEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "newCreator",
            "type": "pubkey"
          },
          {
            "name": "creatorRewardsSharePercentage",
            "type": "u8"
          },
          {
            "name": "xeenonMarket",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "withdrawEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "type": "pubkey"
          },
          {
            "name": "mintToken",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "userBalance",
            "type": "u64"
          },
          {
            "name": "userStaked",
            "type": "u64"
          },
          {
            "name": "marketStaked",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "xeenonMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "xeenonMarketGroup",
            "type": "pubkey"
          },
          {
            "name": "mayflowerMarketMetadata",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "currentPeriod",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "totalDeposited",
            "type": "u64"
          },
          {
            "name": "totalDebt",
            "type": "u64"
          },
          {
            "name": "exercisableOptions",
            "docs": [
              "Accumulated accrued options, they are updated by every deposit and withdrawal of the market",
              "At the end of a period, a percentage of the exercisable options is minted depending of the creator position in the leaderboard (4%-100%). The remaining options are rolled over to the next period."
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "creatorRewardsSharePercentage",
            "docs": [
              "Percentage of the rewards that will be given to the creator. This value can be updated at the beginning of a month."
            ],
            "type": "u8"
          },
          {
            "name": "creatorEarnedRewards",
            "docs": [
              "Amount of tokens that have been given to the creator as rewards and that can be claimed."
            ],
            "type": "u64"
          },
          {
            "name": "creatorClaimedRewards",
            "type": "u64"
          },
          {
            "name": "creatorAccruedRewardShares",
            "docs": [
              "Shares of the period rewards that have been earned by the creator.",
              "It is updated by every deposit and withdrawal of the market or when the creator_rewards_share_percentage is updated.",
              "It is reset to 0.0 when a new period starts."
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "stakersIndexUpdatedTs",
            "type": "u32"
          },
          {
            "name": "stakersIndex",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "stakersAccruedRewardShares",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "bump",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "xeenonMarketGroup",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "governance",
            "type": "pubkey"
          },
          {
            "name": "mayflowerMarketGroup",
            "type": "pubkey"
          },
          {
            "name": "yearlyOptionsAccrualBps",
            "docs": [
              "Annualized rate of accrual of options by market as a percentage of the total staked amount"
            ],
            "type": "u16"
          },
          {
            "name": "bump",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "xeenonMarketPeriod",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "xeenonMarket",
            "type": "pubkey"
          },
          {
            "name": "number",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "stakersIndex",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "stakersAccruedRewardShares",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "totalStakersRewards",
            "docs": [
              "Total stakers rewards minted for the period. This value is calculated at the end of the period:",
              "total_stakers_rewards = market.exercisable_options * mint_percentage_options * total_index / stakers_index",
              "Where total_index is the sum of the stakers_index and the market.creator_accrued_reward_shares",
              "and mint_percentage_options is a percentage or reward rate provided at the end of the period based on the creator position in the leaderboard"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "xeenonPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "xeenonMarket",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "depositedAmount",
            "type": "u64"
          },
          {
            "name": "debt",
            "type": "u64"
          },
          {
            "name": "stagedRewardsShares",
            "docs": [
              "Amount of rewards shares for the last_seen_period that have been accrued but not yet processed"
            ],
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "earnedRewards",
            "type": "u64"
          },
          {
            "name": "claimedRewards",
            "type": "u64"
          },
          {
            "name": "lastSeenPeriodIndex",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "lastSeenPeriod",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "bump",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          }
        ]
      }
    }
  ]
};
