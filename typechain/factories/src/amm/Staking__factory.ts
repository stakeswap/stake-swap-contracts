/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Staking, StakingInterface } from "../../../src/amm/Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_aggregator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
    ],
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
    name: "BalancerV2Vault",
    outputs: [
      {
        internalType: "contract BalancerV2VaultInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BalancerV2_rETH_ETH_POOL_ID",
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
    name: "BalancerV2_wstETH_WETH_POOL_ID",
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
    name: "Curve_frxETH_ETH_POOL_ADDRESS",
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
    name: "Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS",
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
    name: "Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Curve_stETH_ETH_POOL_ADDRESS",
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
    name: "Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS",
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
    name: "Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAI",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    inputs: [],
    name: "USDC",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "contract WETHInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "aggregator",
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
    name: "frxETH",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "frxETHMinter",
    outputs: [
      {
        internalType: "contract frxETHMinter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lp",
        type: "uint256",
      },
    ],
    name: "getEffectiveETHAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalEffectiveETHAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "pair",
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
    name: "rETH",
    outputs: [
      {
        internalType: "contract IrETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sfrxETH",
    outputs: [
      {
        internalType: "contract sfrxETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stETH",
    outputs: [
      {
        internalType: "contract ILido",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lp",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
    ],
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [
      {
        internalType: "uint256",
        name: "lp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolETHAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardToStaker",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wstETH",
    outputs: [
      {
        internalType: "contract IWstETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60e03462000173576001600160401b039062001d4990601f38839003908101601f1916820190848211838310176200015d578083916040958694855283398101031262000173576200005f6020620000578362000194565b920162000194565b916001600055600a60208251620000768162000178565b82815201692ab734b9bbb0b8102b1960b11b815220906001602082516200009d8162000178565b82815201603160f81b8152209080519160208301937f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f85528284015260608301524660808301523060a083015260a0825260c0820195828710908711176200015d578590525190206004553360805260a05260c052611b9f9081620001aa823960805181610591015260a05181818161079101528181610b5e01528181610ecd01526114fe015260c051818181610669015281816106e70152610ac70152f35b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b038211176200015d57604052565b51906001600160a01b0382168203620001735756fe60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c908163020b627d1461051257816306fdde031461101d578163095ea7b314610ff357816318160ddd14610fd457816321c4994014610fa957816323b872dd14610f1957816323c34a6414610efc578163245a7bfc14610eb85781632e17de7814610a8c57816330adf81f14610a51578163313ce56714610a355781633644e51514610a135781634aa07e64146109f65781634bc0dcb6146109d9578163565d3e6e146109bc5781635a33bbbe146105dd578163698e07961461099f57816370a08231146109675781637ecebe001461092f57816389a302711461091257816395d89b41146108d0578163a694fc3a14610698578163a8aa1b3114610654578163a9059cbb14610623578163aa6430c614610606578163ad5c4648146105e9578163be78e8d9146105dd578163c1fe3e48146105c0578163c45a01551461057c578163c9ac8c8e1461055f578163ca8aa0e414610542578163ca96cc2214610525578163cbc74de714610512578163ce069614146104f5578163d505accf146102b957508063dd62ed3e1461026c578063e0bab4c414610250578063ebdfda5e14610234578063f2cd3a12146102115763f781b24e03610011573461020d578160031936011261020d576020906101fc611b59565b90516001600160a01b039091168152f35b5080fd5b503461020d578160031936011261020d5760209061022d6119d8565b9051908152f35b503461020d578160031936011261020d576020906101fc6118fd565b503461020d578160031936011261020d576020906101fc6116ff565b503461020d578060031936011261020d57602091610288611137565b8261029161114d565b6001600160a01b03928316845260038652922091166000908152908352819020549051908152f35b8391503461020d5760e036600319011261020d576102d5611137565b6102dd61114d565b906044359260643560843560ff81168091036104f1574282106104b95782546001600160a01b03858116808a5260056020528a8a20805491959294919391929060001985146104a657908493929160018e960190558451938760208601967f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98852860152868b1660608601528b608086015260a085015260c084015260c0835260e0830167ffffffffffffffff948482108683111761049157818e528451902061010085019261190160f01b8452610102860152610122850152604281526101608401948186109086111761047c57848d52519020835261018082015260a4356101a082015260c4356101c090910152878052602090889060809060015afa1561047257865116908115159182610468575b505015610425575061042293945061117f565b80f35b606490602087519162461bcd60e51b8352820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e4154555245000000006044820152fd5b149050878061040f565b87513d88823e3d90fd5b604188634e487b7160e01b6000525260246000fd5b604189634e487b7160e01b6000525260246000fd5b634e487b7160e01b8c526011885260248cfd5b875162461bcd60e51b81526020818501526012602482015271155b9a5cddd85c158c8e881156141254915160721b6044820152606490fd5b8680fd5b50503461020d578160031936011261020d576020906101fc611997565b5050505061051e61105f565b3880610011565b50503461020d578160031936011261020d5760209061022d6114e9565b50503461020d578160031936011261020d576020906101fc611956565b50503461020d578160031936011261020d576020906101fc6118bc565b50503461020d578160031936011261020d57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50503461020d578160031936011261020d576020906101fc6117b1565b5050505061051e611163565b50503461020d578160031936011261020d576020906101fc6116a6565b50503461020d578160031936011261020d576020906101fc611b20565b50503461020d578060031936011261020d5760209061064d610643611137565b60243590336111d6565b5160018152f35b50503461020d578160031936011261020d57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b905082346108cd57602090816003193601126108cd5782356106b8611275565b84516323b872dd60e01b84820152336024820152306044820152606480820183905281526001600160a01b03917f000000000000000000000000000000000000000000000000000000000000000083169160a0810167ffffffffffffffff81118282101761047c5786926107338795936024938c52846112e3565b8951948593849263393127a160e01b84528b8401525af180156108c35790849161089a575b505047938415610868579280929185943384526006835287842061077d878254611252565b9055875180978193630d0e30db60e41b83527f0000000000000000000000000000000000000000000000000000000000000000165af193841561085c578194610827575b506001906107d08583546115d8565b8255338152600283526107e685878320546115d8565b33825260028452868220558551858152817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef853393a3558351928352820152f35b9093508181813d8311610855575b61083f81836110cc565b8101031261085057519260016107c1565b600080fd5b503d610835565b508451903d90823e3d90fd5b855162461bcd60e51b8152908101849052600c60248201526b16915493d7d1115413d4d25560a21b6044820152606490fd5b813d83116108bc575b6108ad81836110cc565b81010312610850578286610758565b503d6108a3565b86513d85823e3d90fd5b80fd5b50503461020d578160031936011261020d57805161090e916108f1826110b0565b60068252652aa72496ab1960d11b602083015251918291826110ee565b0390f35b50503461020d578160031936011261020d576020906101fc611758565b50503461020d57602036600319011261020d5760209181906001600160a01b03610957611137565b1681526005845220549051908152f35b50503461020d57602036600319011261020d5760209181906001600160a01b0361098f611137565b1681526002845220549051908152f35b50503461020d578160031936011261020d576020906101fc611ae7565b50503461020d578160031936011261020d576020906101fc611863565b50503461020d578160031936011261020d576020906101fc611a62565b50503461020d578160031936011261020d576020906101fc61180a565b905034610a315782600319360112610a315760209250549051908152f35b8280fd5b50503461020d578160031936011261020d576020905160128152f35b50503461020d578160031936011261020d57602090517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98152f35b905034610a3157602080600319360112610eb457813592610aab611275565b80516370a0823160e01b815230818501526001600160a01b03937f00000000000000000000000000000000000000000000000000000000000000009391858516919060249084818381875afa908115610eaa579089918b91610e73575b50610b1f91610b16916114a9565b600154906114bc565b97338a5260068552858a205460028652868b20549082821115610e3b5790839291878b8e999897968b51809b819363db006a7560e01b8352888b8401527f0000000000000000000000000000000000000000000000000000000000000000165af1978815610e31578d98610dfa575b5090610b9d83610ba2936114a9565b6114bc565b9788871115610dc057610bb589886114dc565b9980610bbf6116a6565b168d813b156108cd578b91878c5180948193630d0e30db60e41b83525af18015610db457610d95575b50908c87610c2f8297969594610bfc6116a6565b168d8d5194858094819363a9059cbb60e01b998a84528d840160209093929193604081019460018060a01b031681520152565b03925af18015610d8b5786808e81948294610d5e575b50818115610d55575b3390f115610d4b5788518781019190915233838201908152602081018d9052859291610c9191610c8b90829060400103601f1981018352826110cc565b876112e3565b33825260028752610ca5818a842054611629565b3383526002885289832055610cbc81600154611629565b60015588519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef873392a3833b15610a315787918388519586948593639efed7c160e01b85528401525af18015610d4157610d2d575b5060016080975582519586528501528301526060820152f35b610d378891611086565b6104f15738610d14565b84513d8a823e3d90fd5b88513d86823e3d90fd5b506108fc610c4e565b610d7d908d803d10610d84575b610d7581836110cc565b8101906112cb565b5038610c45565b503d610d6b565b8a513d88823e3d90fd5b90879d610da8610c2f9796959493611086565b9d509091929394610be8565b8e8b51903d90823e3d90fd5b875162461bcd60e51b815280850187905260158185015274139151d05512559157d4d51052d157d49155d05491605a1b6044820152606490fd5b919097508682813d8311610e2a575b610e1381836110cc565b81010312610e2657905196610b9d610b8e565b8c80fd5b503d610e09565b89513d8f823e3d90fd5b875162461bcd60e51b815280860188905260138186015272494e53554646494349454e545f53484152455360681b6044820152606490fd5b809250868092503d8311610ea3575b610e8c81836110cc565b81010312610e9f57518890610b1f610b08565b8980fd5b503d610e82565b86513d8c823e3d90fd5b8380fd5b50503461020d578160031936011261020d57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50503461020d578160031936011261020d5760209061022d611a1d565b50503461020d57606036600319011261020d5761064d610f37611137565b610f3f61114d565b6044359160018060a01b038116808752856020976003895281812033825289526000198282205403610f74575b5050506111d6565b828152600389528181203382528952610f908683832054611629565b9281526003895281812033825289522055388581610f6c565b8284346108cd5760203660031901126108cd575061022d610b1660209335610fcf6114e9565b6114a9565b50503461020d578160031936011261020d576020906001549051908152f35b50503461020d578060031936011261020d5760209061064d611013611137565b602435903361117f565b50503461020d578160031936011261020d57805161090e9161103e826110b0565b600a8252692ab734b9bbb0b8102b1960b11b602083015251918291826110ee565b503461085057600036600319011261085057602061107b611ac1565b60405190600f0b8152f35b67ffffffffffffffff811161109a57604052565b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761109a57604052565b90601f8019910116810190811067ffffffffffffffff82111761109a57604052565b6020808252825181830181905290939260005b82811061112357505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501611101565b600435906001600160a01b038216820361085057565b602435906001600160a01b038216820361085057565b503461085057600036600319011261085057602061107b611a9b565b909160207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259160018060a01b03809416938460005260038352604060002095169485600052825280604060002055604051908152a3565b909160207fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9160018060a01b03809416936000958587526002845261121f836040892054611629565b8688526002855260408820551694858152604061123f83828420546115d8565b91878152600285522055604051908152a3565b9190820180921161125f57565b634e487b7160e01b600052601160045260246000fd5b600260005414611286576002600055565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b90816020910312610850575180151581036108505790565b6040516001600160a01b039091169291906112fd816110b0565b6020918282527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564838301526000808285829451910182895af13d15611408573d9567ffffffffffffffff87116113f4576113789495966040519061136a88601f19601f84011601836110cc565b81528093873d92013e611414565b8051908161138557505050565b82806113959383010191016112cb565b1561139d5750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b634e487b7160e01b83526041600452602483fd5b61137893949591506060915b919290156114765750815115611428575090565b3b156114315790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156114895750805190602001fd5b60405162461bcd60e51b81529081906114a590600483016110ee565b0390fd5b8181029291811591840414171561125f57565b81156114c6570490565b634e487b7160e01b600052601260045260246000fd5b9190820391821161125f57565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906020908181602481865afa801561159e5782916000916115aa575b5060246040518095819363266d6a8360e11b835260048301525afa90811561159e57600091611572575b50905090565b82813d8311611597575b61158681836110cc565b810103126108cd575051803861156c565b503d61157c565b6040513d6000823e3d90fd5b9182813d83116115d1575b6115bf81836110cc565b810103126108cd575081905138611542565b503d6115b5565b91906115e49083611252565b9182106115ed57565b60405162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b6044820152606490fd5b919061163590836114dc565b91821161163e57565b60405162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b6044820152606490fd5b60609060208152601060208201526f1d5b9adb9bdddb8818da185a5b881a5960821b60408201520190565b600146146116e757600546146116cf5760405162461bcd60e51b8152806114a56004820161167b565b73b4fbf271143f4fbf7b91a5ded31805e42b2208d690565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290565b6001461461174057600546146117285760405162461bcd60e51b8152806114a56004820161167b565b7373967c6a0904aa032c103b4104747e88c566b1a290565b736b175474e89094c44da98b954eedeac495271d0f90565b6001461461179957600546146117815760405162461bcd60e51b8152806114a56004820161167b565b732f3a40a3db8a7e3d09b0adfefbce4f6f8192755790565b73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4890565b600146146117f257600546146117da5760405162461bcd60e51b8152806114a56004820161167b565b731643e812ae58766192cf7d2cf9567df2c37e9b7f90565b73ae7ab96520de3a18e5e111b5eaab095312d7fe8490565b6001461461184b57600546146118335760405162461bcd60e51b8152806114a56004820161167b565b736320cd32aa674d2898a68ec82e869385fc5f7e2f90565b737f39c581f595b53c5cb19bd0b3f8da6c935e2ca090565b600146146118a4576005461461188c5760405162461bcd60e51b8152806114a56004820161167b565b733e04888b1c07a9805861c19551f7ed53145bd8d490565b735e8422345238f34275888049021821e8e08caa1f90565b600146146118e5576005461461188c5760405162461bcd60e51b8152806114a56004820161167b565b73ac3e018457b222d93114458476f3e3416abbe38f90565b6001461461193e57600546146119265760405162461bcd60e51b8152806114a56004820161167b565b736421d1ca6cd35852362806a2ded2a49b6fa8bef590565b73bafa44efe7901e04e39dad13167d089c559c113890565b6001461461197f576005461461197f5760405162461bcd60e51b8152806114a56004820161167b565b73ae78736cd615f374d3085123a210448e74fc639390565b600146146119c057600546146119c05760405162461bcd60e51b8152806114a56004820161167b565b73ba12222222228d8ba445958a75a0704d566bf2c890565b600146146119f95760405162461bcd60e51b8152806114a56004820161167b565b7f32296969ef14eb0c6d29669c550d4a044913023000020000000000000000008090565b60014614611a3e5760405162461bcd60e51b8152806114a56004820161167b565b7f1e19cf2d73a72ef1332c882f20534b6519be027600020000000000000000011290565b60014614611a835760405162461bcd60e51b8152806114a56004820161167b565b73dc24316b9ae028f1497c275eb9192a3ea0f6702290565b60014614611abc5760405162461bcd60e51b8152806114a56004820161167b565b600090565b60014614611ae25760405162461bcd60e51b8152806114a56004820161167b565b600190565b60014614611b085760405162461bcd60e51b8152806114a56004820161167b565b7306325440d014e39736583c165c2963ba99faf14e90565b60014614611b415760405162461bcd60e51b8152806114a56004820161167b565b73a1f8a6807c402e4a15ef4eba36528a3fed24e57790565b60014614611b7a5760405162461bcd60e51b8152806114a56004820161167b565b73f43211935c781d5ca1a41d2041f397b8a7366c7a9056fea164736f6c6343000811000a";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _aggregator: PromiseOrValue<string>,
    _pair: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Staking> {
    return super.deploy(
      _aggregator,
      _pair,
      overrides || {}
    ) as Promise<Staking>;
  }
  override getDeployTransaction(
    _aggregator: PromiseOrValue<string>,
    _pair: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_aggregator, _pair, overrides || {});
  }
  override attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  override connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
