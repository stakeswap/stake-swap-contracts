/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BalancerV2Swap,
  BalancerV2SwapInterface,
} from "../../../../src/lib/balancer-v2/BalancerV2Swap";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "toToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fromTokenAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
    ],
    name: "BalancerV2_swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
  "0x60808060405234610016576110cc908161001c8239f35b600080fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c8063020b627d146101ad57806323c34a64146109c45780634aa07e64146109a95780634bc0dcb61461098e578063565d3e6e146109735780635a33bbbe1461020c578063698e07961461095857806380f907c41461026657806389a302711461024b578063aa6430c614610230578063ad5c464814610215578063be78e8d91461020c578063c1fe3e48146101f1578063c9ac8c8e146101d6578063ca8aa0e4146101bb578063cbc74de7146101ad578063ce06961414610192578063e0bab4c414610177578063ebdfda5e1461015c578063f2cd3a12146101395763f781b24e0361000e5734610134576000366003190112610134576020610122610f04565b6040516001600160a01b039091168152f35b600080fd5b34610134576000366003190112610134576020610154610d83565b604051908152f35b34610134576000366003190112610134576020610122610ca8565b34610134576000366003190112610134576020610122610aaa565b34610134576000366003190112610134576020610122610d42565b506101b66109df565b61000e565b34610134576000366003190112610134576020610122610d01565b34610134576000366003190112610134576020610122610c67565b34610134576000366003190112610134576020610122610b5c565b506101b6610a06565b34610134576000366003190112610134576020610122610a4d565b34610134576000366003190112610134576020610122610ecb565b34610134576000366003190112610134576020610122610b03565b6080366003190112610134576004356001600160a01b0381168103610134576024356001600160a01b0381168103610134576102a0610d42565b91604051926102ae84610f59565b6001845260005b6020808210156102f857604051602092916102cf82610f3d565b6000825260008183015260006040830152606060008184015260808301528288010152016102b5565b5050919060405161030881610f3d565b60643581526000602082015260016040820152604435606082015260405180602081011067ffffffffffffffff602083011117610621576020810160405260008152608082015261035885610fb3565b5261036284610fb3565b506040519161037083610f75565b6002835260403660208501376001600160a01b03821661038f84610fb3565b526001600160a01b03166103a283610fd6565b52604051906103b082610f75565b6002825260403660208401376001600160ff1b03806103ce84610fb3565b526103d883610fd6565b526000906001600160a01b0381166106e557505034915b60405180608081011067ffffffffffffffff608083011117610621579492919060808601604052308652600060208701523060408701526000606087015260405195869463945bcec960e01b865261012486016000600488015261012060248801528151809152610144906020828901928260051b8a01019301916000905b82821061067e57505050506003198682030160448701526020808451928381520193019060005b81811061065c57505081516001600160a01b03908116606488015260208084015115156084890152604084015190911660a4880152606090920151151560c4870152506003198583030160e4860152825180835291810192019060005b8181106106435750504261010485015250600093908390039183916001600160a01b03165af190811561063757600091610584575b50600061053382610fd6565b5112156105735761054390610fd6565b51600160ff1b811461055d57602090600003604051908152f35b634e487b7160e01b600052601160045260246000fd5b61057e602091610fd6565b51610154565b90503d806000833e6105968183610f91565b8101906020818303126101345780519067ffffffffffffffff821161013457019080601f830112156101345781519167ffffffffffffffff8311610621578260051b90604051936105ea6020840186610f91565b845260208085019282010192831161013457602001905b8282106106115750505081610527565b8151815260209182019101610601565b634e487b7160e01b600052604160045260246000fd5b6040513d6000823e3d90fd5b82518452879550602093840193909201916001016104f2565b82516001600160a01b0316855289975060209485019490920191600101610495565b919360206106d181926001949698999a9b9c6101431990820301865260808951805183528481015185840152604081015160408401526060810151606084015201519060a0908160808201520190610fe6565b9601920192018a989796959493919261046e565b6044939193351580156108de575b1561087a5760405163095ea7b360e01b60208201526001600160a01b0386166024820152604480358183015281529067ffffffffffffffff6080830190811190831117610621576080820160405261074d60808301610f59565b602060808301527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a08301526000808351602085018260018060a01b0386165af13d1561086b573d9067ffffffffffffffff82116106215760806107df94604051936107c46020601f19601f8401160186610f91565b84523d6000602086013e5b01926001600160a01b0316611026565b8051806107ee575b50506103ef565b81602091810103126101345760200151801590811503610134576108135785806107e7565b60405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b916107df9260806060926107cf565b60405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608490fd5b50604051636eb1769f60e11b81523060048201526001600160a01b0386811660248301526020908290604490829086165afa90811561063757600091610926575b50156106f3565b90506020813d602011610950575b8161094160209383610f91565b8101031261013457518761091f565b3d9150610934565b34610134576000366003190112610134576020610122610e92565b34610134576000366003190112610134576020610122610c0e565b34610134576000366003190112610134576020610122610e0d565b34610134576000366003190112610134576020610122610bb5565b34610134576000366003190112610134576020610154610dc8565b50346101345760003660031901126101345760206109fb610e6c565b60405190600f0b8152f35b50346101345760003660031901126101345760206109fb610e46565b60609060208152601060208201526f1d5b9adb9bdddb8818da185a5b881a5960821b60408201520190565b60014614610a925760054614610a7a5760405162461bcd60e51b815280610a7660048201610a22565b0390fd5b73b4fbf271143f4fbf7b91a5ded31805e42b2208d690565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290565b60014614610aeb5760054614610ad35760405162461bcd60e51b815280610a7660048201610a22565b7373967c6a0904aa032c103b4104747e88c566b1a290565b736b175474e89094c44da98b954eedeac495271d0f90565b60014614610b445760054614610b2c5760405162461bcd60e51b815280610a7660048201610a22565b732f3a40a3db8a7e3d09b0adfefbce4f6f8192755790565b73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4890565b60014614610b9d5760054614610b855760405162461bcd60e51b815280610a7660048201610a22565b731643e812ae58766192cf7d2cf9567df2c37e9b7f90565b73ae7ab96520de3a18e5e111b5eaab095312d7fe8490565b60014614610bf65760054614610bde5760405162461bcd60e51b815280610a7660048201610a22565b736320cd32aa674d2898a68ec82e869385fc5f7e2f90565b737f39c581f595b53c5cb19bd0b3f8da6c935e2ca090565b60014614610c4f5760054614610c375760405162461bcd60e51b815280610a7660048201610a22565b733e04888b1c07a9805861c19551f7ed53145bd8d490565b735e8422345238f34275888049021821e8e08caa1f90565b60014614610c905760054614610c375760405162461bcd60e51b815280610a7660048201610a22565b73ac3e018457b222d93114458476f3e3416abbe38f90565b60014614610ce95760054614610cd15760405162461bcd60e51b815280610a7660048201610a22565b736421d1ca6cd35852362806a2ded2a49b6fa8bef590565b73bafa44efe7901e04e39dad13167d089c559c113890565b60014614610d2a5760054614610d2a5760405162461bcd60e51b815280610a7660048201610a22565b73ae78736cd615f374d3085123a210448e74fc639390565b60014614610d6b5760054614610d6b5760405162461bcd60e51b815280610a7660048201610a22565b73ba12222222228d8ba445958a75a0704d566bf2c890565b60014614610da45760405162461bcd60e51b815280610a7660048201610a22565b7f32296969ef14eb0c6d29669c550d4a044913023000020000000000000000008090565b60014614610de95760405162461bcd60e51b815280610a7660048201610a22565b7f1e19cf2d73a72ef1332c882f20534b6519be027600020000000000000000011290565b60014614610e2e5760405162461bcd60e51b815280610a7660048201610a22565b73dc24316b9ae028f1497c275eb9192a3ea0f6702290565b60014614610e675760405162461bcd60e51b815280610a7660048201610a22565b600090565b60014614610e8d5760405162461bcd60e51b815280610a7660048201610a22565b600190565b60014614610eb35760405162461bcd60e51b815280610a7660048201610a22565b7306325440d014e39736583c165c2963ba99faf14e90565b60014614610eec5760405162461bcd60e51b815280610a7660048201610a22565b73a1f8a6807c402e4a15ef4eba36528a3fed24e57790565b60014614610f255760405162461bcd60e51b815280610a7660048201610a22565b73f43211935c781d5ca1a41d2041f397b8a7366c7a90565b60a0810190811067ffffffffffffffff82111761062157604052565b6040810190811067ffffffffffffffff82111761062157604052565b6060810190811067ffffffffffffffff82111761062157604052565b90601f8019910116810190811067ffffffffffffffff82111761062157604052565b805115610fc05760200190565b634e487b7160e01b600052603260045260246000fd5b805160011015610fc05760400190565b919082519283825260005b848110611012575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610ff1565b91929015611088575081511561103a575090565b3b156110435790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b82519091501561109b5750805190602001fd5b60405162461bcd60e51b815260206004820152908190610a76906024830190610fe656fea164736f6c6343000811000a";

type BalancerV2SwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerV2SwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerV2Swap__factory extends ContractFactory {
  constructor(...args: BalancerV2SwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BalancerV2Swap> {
    return super.deploy(overrides || {}) as Promise<BalancerV2Swap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BalancerV2Swap {
    return super.attach(address) as BalancerV2Swap;
  }
  override connect(signer: Signer): BalancerV2Swap__factory {
    return super.connect(signer) as BalancerV2Swap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerV2SwapInterface {
    return new utils.Interface(_abi) as BalancerV2SwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerV2Swap {
    return new Contract(address, _abi, signerOrProvider) as BalancerV2Swap;
  }
}
