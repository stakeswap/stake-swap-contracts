/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  DepositContract,
  DepositContractInterface,
} from "../../../../../lib/frxETH-public/src/DepositContract.sol/DepositContract";

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
        indexed: false,
        internalType: "bytes",
        name: "pubkey",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "withdrawal_credentials",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "amount",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "index",
        type: "bytes",
      },
    ],
    name: "DepositEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "pubkey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "withdrawal_credentials",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "deposit_data_root",
        type: "bytes32",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "get_deposit_count",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_deposit_root",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x604060808152346101105760005b601f8110610023575051610bfd90816101168239f35b6020808210156100c7576021820154835182810182905280850191909152838152606080820191906001600160401b038311828410176100fa57828652815160005b8181106100e857509184939160008094830191820152039060025afa156100dd5760005190600183018084116100b15710156100c757602282015560001981146100b15760010161000d565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b82513d6000823e3d90fd5b83810180870151908401528501610065565b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a71461026c5750816322895118146101ee57508063621fd130146101ad5763c5f2892f1461005157600080fd5b346101a957816003193601126101a957818060209384918483548084905b8682106100f7575050906100c7605861009567ffffffffffffffff6100d7969516610af2565b876100b285519586938385019889528051938492860191016102f6565b8101878b820152036038810184520182610395565b86519283928392519283916102f6565b8101039060025afa156100ec57519051908152f35b9051903d90823e3d90fd5b925092949093600195868085161460001461016e5761013c908554908a51908582019283528b8201528a815261012c81610363565b8a519283928392519283916102f6565b8101039060025afa1561016457610158908551945b1c9161033e565b8492869188959361006f565b85513d86823e3d90fd5b6101909085602101548a51908582019283528b8201528a815261012c81610363565b8101039060025afa156101645761015890855194610151565b5080fd5b50346101a957816003193601126101a9576101ea906101d767ffffffffffffffff60205416610af2565b9051918291602083526020830190610319565b0390f35b839060803660031901126101a95767ffffffffffffffff81358181116102685761021b90369084016102c3565b6024929192358281116102645761023590369086016102c3565b90926044359081116102605761025d95610251913691016102c3565b939092606435956103d8565b80f35b8680fd5b8580fd5b8380fd5b8491346102bf5760203660031901126102bf573563ffffffff60e01b81168091036102bf57602092506301ffc9a760e01b81149081156102ae575b5015158152f35b638564090760e01b149050836102a7565b8280fd5b9181601f840112156102f15782359167ffffffffffffffff83116102f157602083818601950101116102f157565b600080fd5b60005b8381106103095750506000910152565b81810151838201526020016102f9565b90602091610332815180928185528580860191016102f6565b601f01601f1916010190565b600019811461034d5760010190565b634e487b7160e01b600052601160045260246000fd5b6060810190811067ffffffffffffffff82111761037f57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761037f57604052565b908060209392818452848401376000828201840152601f01601f1916010190565b9190929693959460308403610a9e57602096878903610a3a57606082036109e357670de0b6b3a7640000341061098f57633b9aca0080340661092e5734049867ffffffffffffffff998a81116108d957908a8a96959493921661043a90610af2565b928680549c8d1661044a90610af2565b986040998a51809160a0825260a0820161046590858d6103b7565b8281038684015261047790888c6103b7565b828103838f0152610488908a610319565b828103606084015261049b90878a6103b7565b82810360808401526104ac91610319565b037f649bbc62d0e31342afea4e5cd82d4049e7e1ee912fc0889aa790803be39038c591a1808a519d8e019889378c018c60009d828f8581950152036010810182526030016104fa9082610395565b8a5198899151809a61050b926102f6565b8060029981010390895afa156108c1578a51928189116108d557878c6105568b51838101908d8683378360608201528d815261054681610363565b8d519283928392519283916102f6565b810103908a5afa156108cb578b6105a78a8a9361059784519683519287840194603f19830191018537820182601f1991878382015203908101835282610395565b8c519283928392519283916102f6565b81010390895afa156108c1578a6105e4889282518b51908582019283528c8201528b81526105d481610363565b8b519283928392519283916102f6565b81010390885afa156108b75761063286928b926106228a8551988382519485928a840197885284840137810187838201520387810184520182610395565b89519283928392519283916102f6565b81010390865afa156108ad578761068f859282519461067f60588a5180938861066481840197888151938492016102f6565b820190888a8301526038820152036038810184520182610395565b88519283928392519283916102f6565b81010390855afa156108a357866106cc84928251875190858201928352888201528781526106bc81610363565b87519283928392519283916102f6565b81010390845afa156108995785519485036108135763ffffffff8710156107c6576001948588018098116107b25787835593968694865b61071c575b634e487b7160e01b88526004879052602488fd5b83869998991015806107a957878084161461079b57610787578861075785928854908851908582019283528982015288815261067f81610363565b81010390855afa1561077d578596610773895192881c9661033e565b9591909897610703565b83513d89823e3d90fd5b634e487b7160e01b89526032600452602489fd5b509697949550505050505055565b50889750610708565b634e487b7160e01b87526011600452602487fd5b50608491519062461bcd60e51b82526004820152602160248201527f4465706f736974436f6e74726163743a206d65726b6c6520747265652066756c6044820152601b60fa1b6064820152fd5b5060a491519062461bcd60e51b82526004820152605460248201527f4465706f736974436f6e74726163743a207265636f6e7374727563746564204460448201527f65706f7369744461746120646f6573206e6f74206d6174636820737570706c6960648201527319590819195c1bdcda5d17d9185d1857dc9bdbdd60621b6084820152fd5b82513d87823e3d90fd5b83513d88823e3d90fd5b84513d89823e3d90fd5b86513d8b823e3d90fd5b87513d8c823e3d90fd5b88513d8d823e3d90fd5b8b80fd5b60405162461bcd60e51b8152600481018b9052602760248201527f4465706f736974436f6e74726163743a206465706f7369742076616c756520746044820152660dede40d0d2ced60cb1b6064820152608490fd5b60405162461bcd60e51b8152600481018a9052603360248201527f4465706f736974436f6e74726163743a206465706f7369742076616c7565206e6044820152726f74206d756c7469706c65206f66206777656960681b6064820152608490fd5b60405162461bcd60e51b815260048101899052602660248201527f4465706f736974436f6e74726163743a206465706f7369742076616c756520746044820152656f6f206c6f7760d01b6064820152608490fd5b60405162461bcd60e51b815260048101899052602960248201527f4465706f736974436f6e74726163743a20696e76616c6964207369676e6174756044820152680e4ca40d8cadccee8d60bb1b6064820152608490fd5b60405162461bcd60e51b815260048101899052603660248201527f4465706f736974436f6e74726163743a20696e76616c696420776974686472616044820152750eec2d8bec6e4cac8cadce8d2c2d8e640d8cadccee8d60531b6064820152608490fd5b60405162461bcd60e51b815260206004820152602660248201527f4465706f736974436f6e74726163743a20696e76616c6964207075626b6579206044820152650d8cadccee8d60d31b6064820152608490fd5b906040516040810181811067ffffffffffffffff82111761037f5760405260088152602081016020368237819367ffffffffffffffff60c01b9060c01b1690825115610bda578160071a9053815160011015610bda578060061a6021830153815160021015610bda578060051a6022830153815160031015610bda57600481811a60238401538251811015610bc5578160031a6024840153825160051015610bc5578160021a6025840153825160061015610bc5578160011a6026840153825160071015610bc5575060001a9060270153565b603290634e487b7160e01b6000525260246000fd5b634e487b7160e01b600052603260045260246000fdfea164736f6c6343000811000a";

type DepositContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DepositContract__factory extends ContractFactory {
  constructor(...args: DepositContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DepositContract> {
    return super.deploy(overrides || {}) as Promise<DepositContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DepositContract {
    return super.attach(address) as DepositContract;
  }
  override connect(signer: Signer): DepositContract__factory {
    return super.connect(signer) as DepositContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositContractInterface {
    return new utils.Interface(_abi) as DepositContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DepositContract {
    return new Contract(address, _abi, signerOrProvider) as DepositContract;
  }
}
