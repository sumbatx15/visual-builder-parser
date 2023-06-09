// This file was generated by the FCT compiler. Happy coding! ✨;
import { ERC20, TOKEN_VALIDATOR, Config } from "@kiroboio/fct-core";
import { create } from "@kiroboio/fct-builder";

/*Chain: goerli*/
const CHAIN = "5";
const MY_VAULT = "0x7c5dB9172038F6748FDCac2528b07c9F98Dd8aa4";
const MY_WALLET = "0x683C0803F89308c4e05e14Dcfc51eCEBF7889f6c";

const fct = create({
  chain: CHAIN,
});

const erc20_balanceOf_0 = fct.add(ERC20.getters.balanceOf, {
  to: "0xba232b47a7ddfccc221916cf08da03a4973d3a1d",
  methodParams: {
    owner: MY_VAULT,
  },
});

const token_validator_between_1 = fct.add(TOKEN_VALIDATOR.getters.between, {
  to: "0x93a9E720C3B161F70e60A7bd844F8ee6b19f07DE",
  methodParams: {
    minAmount: "1000000000000000000",
    minDecimals: 18,
    maxAmount: "100000000000000000000",
    maxDecimals: 18,
    amountIn: erc20_balanceOf_0.outputs.balance,
    decimalsIn: 18,
    decimalsOut: 18,
  },
});

const erc20_simpleTransfer_2 = fct.add(ERC20.actions.simpleTransfer, {
  to: "0xba232b47a7ddfccc221916cf08da03a4973d3a1d",
  isVault: true,
  methodParams: {
    from: MY_VAULT,
    to: MY_WALLET,
    amount: erc20_balanceOf_0.outputs.balance,
  },
});

fct.startWith(
  erc20_balanceOf_0.then(token_validator_between_1.then(erc20_simpleTransfer_2))
);

const config: Config = {
  // Config your FCT here!
};

fct.compile(config).then((tx) => {
  /*This (tx) is your compiled fct-transaction, and you can publish it to the FCTService
      and we will execute it for you when the time comes,
    
      or you can execute it yourself using the FCT SDK*/
});
