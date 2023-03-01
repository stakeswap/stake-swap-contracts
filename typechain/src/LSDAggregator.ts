/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface LSDAggregatorInterface extends utils.Interface {
  functions: {
    "BalancerV2Vault()": FunctionFragment;
    "BalancerV2_rETH_ETH_POOL_ID()": FunctionFragment;
    "BalancerV2_wstETH_WETH_POOL_ID()": FunctionFragment;
    "Curve_frxETH_ETH_POOL_ADDRESS()": FunctionFragment;
    "Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS()": FunctionFragment;
    "Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH()": FunctionFragment;
    "Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH()": FunctionFragment;
    "Curve_stETH_ETH_POOL_ADDRESS()": FunctionFragment;
    "Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS()": FunctionFragment;
    "Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH()": FunctionFragment;
    "Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH()": FunctionFragment;
    "DAI()": FunctionFragment;
    "USDC()": FunctionFragment;
    "WETH()": FunctionFragment;
    "adaptors(uint256)": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "buyWeights(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "deposit()": FunctionFragment;
    "depositWeights(address)": FunctionFragment;
    "frxETH()": FunctionFragment;
    "frxETHMinter()": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "isAdaptor(address)": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "previewRedeem(uint256)": FunctionFragment;
    "rETH()": FunctionFragment;
    "redeem(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAdaptors(address[],uint256[],uint256[])": FunctionFragment;
    "setWeights(address[],uint256[],uint256[])": FunctionFragment;
    "sfrxETH()": FunctionFragment;
    "stETH()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "wstETH()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BalancerV2Vault"
      | "BalancerV2_rETH_ETH_POOL_ID"
      | "BalancerV2_wstETH_WETH_POOL_ID"
      | "Curve_frxETH_ETH_POOL_ADDRESS"
      | "Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS"
      | "Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH"
      | "Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH"
      | "Curve_stETH_ETH_POOL_ADDRESS"
      | "Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS"
      | "Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH"
      | "Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH"
      | "DAI"
      | "USDC"
      | "WETH"
      | "adaptors"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "buyWeights"
      | "decimals"
      | "decreaseAllowance"
      | "deposit"
      | "depositWeights"
      | "frxETH"
      | "frxETHMinter"
      | "increaseAllowance"
      | "isAdaptor"
      | "name"
      | "owner"
      | "previewRedeem"
      | "rETH"
      | "redeem"
      | "renounceOwnership"
      | "setAdaptors"
      | "setWeights"
      | "sfrxETH"
      | "stETH"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "transferOwnership"
      | "wstETH"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BalancerV2Vault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BalancerV2_rETH_ETH_POOL_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BalancerV2_wstETH_WETH_POOL_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Curve_frxETH_ETH_POOL_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Curve_stETH_ETH_POOL_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "DAI", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "adaptors",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "buyWeights",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositWeights",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "frxETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "frxETHMinter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isAdaptor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "previewRedeem",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "rETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdaptors",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setWeights",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "sfrxETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "stETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "wstETH", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "BalancerV2Vault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BalancerV2_rETH_ETH_POOL_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BalancerV2_wstETH_WETH_POOL_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "Curve_frxETH_ETH_POOL_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "Curve_stETH_ETH_POOL_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "DAI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "adaptors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyWeights", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "frxETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "frxETHMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAdaptor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "previewRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdaptors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setWeights", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sfrxETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wstETH", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface LSDAggregator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LSDAggregatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BalancerV2Vault(overrides?: CallOverrides): Promise<[string]>;

    BalancerV2_rETH_ETH_POOL_ID(overrides?: CallOverrides): Promise<[string]>;

    BalancerV2_wstETH_WETH_POOL_ID(
      overrides?: CallOverrides
    ): Promise<[string]>;

    Curve_frxETH_ETH_POOL_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<[string]>;

    Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    Curve_stETH_ETH_POOL_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<[string]>;

    Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    DAI(overrides?: CallOverrides): Promise<[string]>;

    USDC(overrides?: CallOverrides): Promise<[string]>;

    WETH(overrides?: CallOverrides): Promise<[string]>;

    adaptors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    buyWeights(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositWeights(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    frxETH(overrides?: CallOverrides): Promise<[string]>;

    frxETHMinter(overrides?: CallOverrides): Promise<[string]>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isAdaptor(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    previewRedeem(
      shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { assets: BigNumber }>;

    rETH(overrides?: CallOverrides): Promise<[string]>;

    redeem(
      shares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAdaptors(
      _adaptors: PromiseOrValue<string>[],
      _depositWeights: PromiseOrValue<BigNumberish>[],
      _buyWeights: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWeights(
      _adaptors: PromiseOrValue<string>[],
      _depositWeights: PromiseOrValue<BigNumberish>[],
      _buyWeights: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sfrxETH(overrides?: CallOverrides): Promise<[string]>;

    stETH(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wstETH(overrides?: CallOverrides): Promise<[string]>;
  };

  BalancerV2Vault(overrides?: CallOverrides): Promise<string>;

  BalancerV2_rETH_ETH_POOL_ID(overrides?: CallOverrides): Promise<string>;

  BalancerV2_wstETH_WETH_POOL_ID(overrides?: CallOverrides): Promise<string>;

  Curve_frxETH_ETH_POOL_ADDRESS(overrides?: CallOverrides): Promise<string>;

  Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS(
    overrides?: CallOverrides
  ): Promise<string>;

  Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  Curve_stETH_ETH_POOL_ADDRESS(overrides?: CallOverrides): Promise<string>;

  Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS(
    overrides?: CallOverrides
  ): Promise<string>;

  Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  DAI(overrides?: CallOverrides): Promise<string>;

  USDC(overrides?: CallOverrides): Promise<string>;

  WETH(overrides?: CallOverrides): Promise<string>;

  adaptors(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  buyWeights(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: PromiseOrValue<string>,
    subtractedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositWeights(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  frxETH(overrides?: CallOverrides): Promise<string>;

  frxETHMinter(overrides?: CallOverrides): Promise<string>;

  increaseAllowance(
    spender: PromiseOrValue<string>,
    addedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isAdaptor(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  previewRedeem(
    shares: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rETH(overrides?: CallOverrides): Promise<string>;

  redeem(
    shares: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAdaptors(
    _adaptors: PromiseOrValue<string>[],
    _depositWeights: PromiseOrValue<BigNumberish>[],
    _buyWeights: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWeights(
    _adaptors: PromiseOrValue<string>[],
    _depositWeights: PromiseOrValue<BigNumberish>[],
    _buyWeights: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sfrxETH(overrides?: CallOverrides): Promise<string>;

  stETH(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wstETH(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BalancerV2Vault(overrides?: CallOverrides): Promise<string>;

    BalancerV2_rETH_ETH_POOL_ID(overrides?: CallOverrides): Promise<string>;

    BalancerV2_wstETH_WETH_POOL_ID(overrides?: CallOverrides): Promise<string>;

    Curve_frxETH_ETH_POOL_ADDRESS(overrides?: CallOverrides): Promise<string>;

    Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<string>;

    Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Curve_stETH_ETH_POOL_ADDRESS(overrides?: CallOverrides): Promise<string>;

    Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<string>;

    Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DAI(overrides?: CallOverrides): Promise<string>;

    USDC(overrides?: CallOverrides): Promise<string>;

    WETH(overrides?: CallOverrides): Promise<string>;

    adaptors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyWeights(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deposit(overrides?: CallOverrides): Promise<BigNumber>;

    depositWeights(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    frxETH(overrides?: CallOverrides): Promise<string>;

    frxETHMinter(overrides?: CallOverrides): Promise<string>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAdaptor(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    previewRedeem(
      shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rETH(overrides?: CallOverrides): Promise<string>;

    redeem(
      shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAdaptors(
      _adaptors: PromiseOrValue<string>[],
      _depositWeights: PromiseOrValue<BigNumberish>[],
      _buyWeights: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    setWeights(
      _adaptors: PromiseOrValue<string>[],
      _depositWeights: PromiseOrValue<BigNumberish>[],
      _buyWeights: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    sfrxETH(overrides?: CallOverrides): Promise<string>;

    stETH(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    wstETH(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    BalancerV2Vault(overrides?: CallOverrides): Promise<BigNumber>;

    BalancerV2_rETH_ETH_POOL_ID(overrides?: CallOverrides): Promise<BigNumber>;

    BalancerV2_wstETH_WETH_POOL_ID(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Curve_frxETH_ETH_POOL_ADDRESS(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Curve_stETH_ETH_POOL_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DAI(overrides?: CallOverrides): Promise<BigNumber>;

    USDC(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    adaptors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyWeights(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositWeights(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    frxETH(overrides?: CallOverrides): Promise<BigNumber>;

    frxETHMinter(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isAdaptor(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    previewRedeem(
      shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rETH(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      shares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAdaptors(
      _adaptors: PromiseOrValue<string>[],
      _depositWeights: PromiseOrValue<BigNumberish>[],
      _buyWeights: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWeights(
      _adaptors: PromiseOrValue<string>[],
      _depositWeights: PromiseOrValue<BigNumberish>[],
      _buyWeights: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sfrxETH(overrides?: CallOverrides): Promise<BigNumber>;

    stETH(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wstETH(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BalancerV2Vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BalancerV2_rETH_ETH_POOL_ID(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    BalancerV2_wstETH_WETH_POOL_ID(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Curve_frxETH_ETH_POOL_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Curve_frxETH_ETH_POOL_LP_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Curve_frxETH_ETH_POOL_TOKEN_INDEX_ETH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Curve_frxETH_ETH_POOL_TOKEN_INDEX_frxETH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Curve_stETH_ETH_POOL_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Curve_stETH_ETH_POOL_LP_TOKEN_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Curve_stETH_ETH_POOL_TOKEN_INDEX_ETH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Curve_stETH_ETH_POOL_TOKEN_INDEX_stETH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DAI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adaptors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyWeights(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositWeights(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    frxETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    frxETHMinter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isAdaptor(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previewRedeem(
      shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      shares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAdaptors(
      _adaptors: PromiseOrValue<string>[],
      _depositWeights: PromiseOrValue<BigNumberish>[],
      _buyWeights: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWeights(
      _adaptors: PromiseOrValue<string>[],
      _depositWeights: PromiseOrValue<BigNumberish>[],
      _buyWeights: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sfrxETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wstETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}