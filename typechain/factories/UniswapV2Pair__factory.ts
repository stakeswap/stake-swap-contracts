/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UniswapV2Pair, UniswapV2PairInterface } from "../UniswapV2Pair";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001600c5534801561001557600080fd5b50604080518082018252600a8152692ab734b9bbb0b8102b1960b11b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fbfcc8ef98ffbf7b6c3fec7bf5185b566b9863e35a9d83acd49ad6824b5969738818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600580546001600160a01b03191633179055612225806101086000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610408578063d505accf1461041b578063dd62ed3e1461042e578063fff6cae91461045957600080fd5b8063ba9a7a56146103d9578063bc25cf77146103e2578063c45a0155146103f557600080fd5b80637ecebe00116100d35780637ecebe001461035957806389afcb441461037957806395d89b41146103a1578063a9059cbb146103c657600080fd5b80636a6278421461031d57806370a08231146103305780637464fc3d1461035057600080fd5b806323b872dd116101665780633644e515116101405780633644e515146102ef578063485cc955146102f85780635909c0d51461030b5780635a3d54931461031457600080fd5b806323b872dd1461029b57806330adf81f146102ae578063313ce567146102d557600080fd5b8063022c0d9f146101ae57806306fdde03146101c35780630902f1ac14610202578063095ea7b3146102365780630dfe16811461025957806318160ddd14610284575b600080fd5b6101c16101bc366004611db7565b610461565b005b6101ec6040518060400160405280600a8152602001692ab734b9bbb0b8102b1960b11b81525081565b6040516101f99190611e71565b60405180910390f35b61020a610967565b604080516001600160701b03948516815293909216602084015263ffffffff16908201526060016101f9565b610249610244366004611ea4565b610991565b60405190151581526020016101f9565b60065461026c906001600160a01b031681565b6040516001600160a01b0390911681526020016101f9565b61028d60005481565b6040519081526020016101f9565b6102496102a9366004611ed0565b6109a8565b61028d7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6102dd601281565b60405160ff90911681526020016101f9565b61028d60035481565b6101c1610306366004611f11565b610a3c565b61028d60095481565b61028d600a5481565b61028d61032b366004611f4a565b610abb565b61028d61033e366004611f4a565b60016020526000908152604090205481565b61028d600b5481565b61028d610367366004611f4a565b60046020526000908152604090205481565b61038c610387366004611f4a565b610d83565b604080519283526020830191909152016101f9565b6101ec604051806040016040528060068152602001652aa72496ab1960d11b81525081565b6102496103d4366004611ea4565b6110e9565b61028d6103e881565b6101c16103f0366004611f4a565b6110f6565b60055461026c906001600160a01b031681565b60075461026c906001600160a01b031681565b6101c1610429366004611f67565b61120a565b61028d61043c366004611f11565b600260209081526000928352604080842090915290825290205481565b6101c161141e565b600c5460011461048c5760405162461bcd60e51b815260040161048390611fde565b60405180910390fd5b6000600c558415158061049f5750600084115b6104f95760405162461bcd60e51b815260206004820152602560248201527f556e697377617056323a20494e53554646494349454e545f4f55545055545f416044820152641353d5539560da1b6064820152608401610483565b600080610504610967565b5091509150816001600160701b0316871080156105295750806001600160701b031686105b61057f5760405162461bcd60e51b815260206004820152602160248201527f556e697377617056323a20494e53554646494349454e545f4c495155494449546044820152605960f81b6064820152608401610483565b60065460075460009182916001600160a01b039182169190811690891682148015906105bd5750806001600160a01b0316896001600160a01b031614155b6106015760405162461bcd60e51b8152602060048201526015602482015274556e697377617056323a20494e56414c49445f544f60581b6044820152606401610483565b8a1561061257610612828a8d611542565b891561062357610623818a8c611542565b8615610690576040516304347a1760e21b81526001600160a01b038a16906310d1e85c9061065d9033908f908f908e908e90600401612009565b600060405180830381600087803b15801561067757600080fd5b505af115801561068b573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa1580156106d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f89190612055565b6040516370a0823160e01b81523060048201529094506001600160a01b038216906370a0823190602401602060405180830381865afa15801561073f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107639190612055565b92505050600089856001600160701b031661077e9190612084565b831161078b5760006107a8565b61079e8a6001600160701b038716612084565b6107a89084612084565b905060006107bf8a6001600160701b038716612084565b83116107cc5760006107e9565b6107df8a6001600160701b038716612084565b6107e99084612084565b905060008211806107fa5750600081115b6108525760405162461bcd60e51b8152602060048201526024808201527f556e697377617056323a20494e53554646494349454e545f494e5055545f414d60448201526313d5539560e21b6064820152608401610483565b600061087461086284600361168d565b61086e876103e861168d565b906116f4565b9050600061088661086284600361168d565b90506108ab620f42406108a56001600160701b038b8116908b1661168d565b9061168d565b6108b5838361168d565b10156108f25760405162461bcd60e51b815260206004820152600c60248201526b556e697377617056323a204b60a01b6044820152606401610483565b50506109008484888861174a565b60408051838152602081018390529081018c9052606081018b90526001600160a01b038a169033907fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229060800160405180910390a350506001600c55505050505050505050565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b600061099e338484611936565b5060015b92915050565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610a27576001600160a01b0384166000908152600260209081526040808320338452909152902054610a0290836116f4565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610a32848484611998565b5060019392505050565b6005546001600160a01b03163314610a8d5760405162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b6044820152606401610483565b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b6000600c54600114610adf5760405162461bcd60e51b815260040161048390611fde565b6000600c81905580610aef610967565b506006546040516370a0823160e01b81523060048201529294509092506000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610b41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b659190612055565b6007546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd79190612055565b90506000610bee836001600160701b0387166116f4565b90506000610c05836001600160701b0387166116f4565b90506000610c138787611a3e565b60008054919250819003610c4d57610c396103e861086e610c34878761168d565b611b7b565b9850610c4860006103e8611beb565b610c94565b610c916001600160701b038916610c64868461168d565b610c6e91906120ad565b6001600160701b038916610c82868561168d565b610c8c91906120ad565b611c7a565b98505b60008911610cf55760405162461bcd60e51b815260206004820152602860248201527f556e697377617056323a20494e53554646494349454e545f4c495155494449546044820152671657d3525395115160c21b6064820152608401610483565b610cff8a8a611beb565b610d0b86868a8a61174a565b8115610d3557600854610d31906001600160701b0380821691600160701b90041661168d565b600b555b604080518581526020810185905233917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a250506001600c5550949695505050505050565b600080600c54600114610da85760405162461bcd60e51b815260040161048390611fde565b6000600c81905580610db8610967565b506006546007546040516370a0823160e01b81523060048201529395509193506001600160a01b039081169291169060009083906370a0823190602401602060405180830381865afa158015610e12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e369190612055565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610e80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea49190612055565b30600090815260016020526040812054919250610ec18888611a3e565b60005490915080610ed2848761168d565b610edc91906120ad565b9a5080610ee9848661168d565b610ef391906120ad565b995060008b118015610f05575060008a115b610f625760405162461bcd60e51b815260206004820152602860248201527f556e697377617056323a20494e53554646494349454e545f4c495155494449546044820152671657d0955493915160c21b6064820152608401610483565b610f6c3084611c92565b610f77878d8d611542565b610f82868d8c611542565b6040516370a0823160e01b81523060048201526001600160a01b038816906370a0823190602401602060405180830381865afa158015610fc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fea9190612055565b6040516370a0823160e01b81523060048201529095506001600160a01b038716906370a0823190602401602060405180830381865afa158015611031573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110559190612055565b935061106385858b8b61174a565b811561108d57600854611089906001600160701b0380821691600160701b90041661168d565b600b555b604080518c8152602081018c90526001600160a01b038e169133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496910160405180910390a35050505050505050506001600c81905550915091565b600061099e338484611998565b600c546001146111185760405162461bcd60e51b815260040161048390611fde565b6000600c556006546007546008546040516370a0823160e01b81523060048201526001600160a01b0393841693909216916111b391849186916111ae916001600160701b039091169084906370a08231906024015b602060405180830381865afa15801561118a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086e9190612055565b611542565b6008546040516370a0823160e01b815230600482015261120091839186916111ae91600160701b9091046001600160701b0316906001600160a01b038516906370a082319060240161116d565b50506001600c5550565b4284101561124f5760405162461bcd60e51b8152602060048201526012602482015271155b9a5cddd85c158c8e881156141254915160721b6044820152606401610483565b6003546001600160a01b038816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b9190876112a2836120c1565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e0016040516020818303038152906040528051906020012060405160200161131b92919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611386573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906113bc5750886001600160a01b0316816001600160a01b0316145b6114085760405162461bcd60e51b815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e4154555245000000006044820152606401610483565b611413898989611936565b505050505050505050565b600c546001146114405760405162461bcd60e51b815260040161048390611fde565b6000600c556006546040516370a0823160e01b815230600482015261153b916001600160a01b0316906370a0823190602401602060405180830381865afa15801561148f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b39190612055565b6007546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156114fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151f9190612055565b6008546001600160701b0380821691600160701b90041661174a565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b179052915160009283928716916115ce91906120da565b6000604051808303816000865af19150503d806000811461160b576040519150601f19603f3d011682016040523d82523d6000602084013e611610565b606091505b509150915081801561163a57508051158061163a57508080602001905181019061163a91906120f6565b6116865760405162461bcd60e51b815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c45440000000000006044820152606401610483565b5050505050565b60008115806116b1575082826116a38183612118565b92506116af90836120ad565b145b6109a25760405162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b6044820152606401610483565b6000826117018382612084565b91508111156109a25760405162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b6044820152606401610483565b6001600160701b03841180159061176857506001600160701b038311155b6117aa5760405162461bcd60e51b8152602060048201526013602482015272556e697377617056323a204f564552464c4f5760681b6044820152606401610483565b60006117bb6401000000004261212f565b6008549091506000906117db90600160e01b900463ffffffff1683612143565b905060008163ffffffff161180156117fb57506001600160701b03841615155b801561180f57506001600160701b03831615155b1561189e578063ffffffff166118378561182886611d1c565b6001600160e01b031690611d35565b6001600160e01b031661184a9190612118565b6009600082825461185b9190612167565b909155505063ffffffff81166118748461182887611d1c565b6001600160e01b03166118879190612118565b600a60008282546118989190612167565b90915550505b6008805463ffffffff8416600160e01b026001600160e01b036001600160701b03898116600160701b9081026001600160e01b03199095168c83161794909417918216831794859055604080519382169282169290921783529290930490911660208201527f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1910160405180910390a1505050505050565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166000908152600160205260409020546119bb90826116f4565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546119ea9082611d4a565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061198b9085815260200190565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ab8919061217a565b600b546001600160a01b038216158015945091925090611b67578015611b62576000611af3610c346001600160701b0388811690881661168d565b90506000611b0083611b7b565b905080821115611b5f576000611b22611b1984846116f4565b6000549061168d565b90506000611b3b83611b3586600561168d565b90611d4a565b90506000611b4982846120ad565b90508015611b5b57611b5b8782611beb565b5050505b50505b611b73565b8015611b73576000600b555b505092915050565b60006003821115611bdc5750806000611b956002836120ad565b611ba0906001612167565b90505b81811015611bd657905080600281611bbb81866120ad565b611bc59190612167565b611bcf91906120ad565b9050611ba3565b50919050565b8115611be6575060015b919050565b600054611bf89082611d4a565b60009081556001600160a01b038316815260016020526040902054611c1d9082611d4a565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611c6e9085815260200190565b60405180910390a35050565b6000818310611c895781611c8b565b825b9392505050565b6001600160a01b038216600090815260016020526040902054611cb590826116f4565b6001600160a01b03831660009081526001602052604081209190915554611cdc90826116f4565b60009081556040518281526001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611c6e565b60006109a2600160701b6001600160701b038416612197565b6000611c8b6001600160701b038316846121c9565b600082611d578382612167565b91508110156109a25760405162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b6044820152606401610483565b6001600160a01b0381168114611db457600080fd5b50565b600080600080600060808688031215611dcf57600080fd5b85359450602086013593506040860135611de881611d9f565b9250606086013567ffffffffffffffff80821115611e0557600080fd5b818801915088601f830112611e1957600080fd5b813581811115611e2857600080fd5b896020828501011115611e3a57600080fd5b9699959850939650602001949392505050565b60005b83811015611e68578181015183820152602001611e50565b50506000910152565b6020815260008251806020840152611e90816040850160208701611e4d565b601f01601f19169190910160400192915050565b60008060408385031215611eb757600080fd5b8235611ec281611d9f565b946020939093013593505050565b600080600060608486031215611ee557600080fd5b8335611ef081611d9f565b92506020840135611f0081611d9f565b929592945050506040919091013590565b60008060408385031215611f2457600080fd5b8235611f2f81611d9f565b91506020830135611f3f81611d9f565b809150509250929050565b600060208284031215611f5c57600080fd5b8135611c8b81611d9f565b600080600080600080600060e0888a031215611f8257600080fd5b8735611f8d81611d9f565b96506020880135611f9d81611d9f565b95506040880135945060608801359350608088013560ff81168114611fc157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b602080825260119082015270155b9a5cddd85c158c8e881313d0d2d151607a1b604082015260600190565b60018060a01b038616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b60006020828403121561206757600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156109a2576109a261206e565b634e487b7160e01b600052601260045260246000fd5b6000826120bc576120bc612097565b500490565b6000600182016120d3576120d361206e565b5060010190565b600082516120ec818460208701611e4d565b9190910192915050565b60006020828403121561210857600080fd5b81518015158114611c8b57600080fd5b80820281158282048414176109a2576109a261206e565b60008261213e5761213e612097565b500690565b63ffffffff8281168282160390808211156121605761216061206e565b5092915050565b808201808211156109a2576109a261206e565b60006020828403121561218c57600080fd5b8151611c8b81611d9f565b6001600160e01b038281168282168181028316929181158285048214176121c0576121c061206e565b50505092915050565b60006001600160e01b03838116806121e3576121e3612097565b9216919091049291505056fea2646970667358221220cb02b7054b9234c188cf091c61d23307f6f91cef64fbe8e4fcdea9aacadb8b8064736f6c63430008110033";

type UniswapV2PairConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV2PairConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2Pair__factory extends ContractFactory {
  constructor(...args: UniswapV2PairConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV2Pair> {
    return super.deploy(overrides || {}) as Promise<UniswapV2Pair>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapV2Pair {
    return super.attach(address) as UniswapV2Pair;
  }
  override connect(signer: Signer): UniswapV2Pair__factory {
    return super.connect(signer) as UniswapV2Pair__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2PairInterface {
    return new utils.Interface(_abi) as UniswapV2PairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Pair {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Pair;
  }
}
