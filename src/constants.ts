import { ChainId, Percent } from '@defolym3/do3-sdk-core';
import JSBI from 'jsbi';

export const V2_FACTORY_ADDRESSES: { [chainId: number]: string } = {
  [ChainId.AMOY]:'',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_SEPOLIA]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.BASE]: '',
  [ChainId.BASE_SEPOLIA]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.FRAX_TESTNET]: '',
  [ChainId.FUJI]: '',
  [ChainId.HEDERA]: '',
  [ChainId.HEDERA_TESTNET]: '',
  [ChainId.HOLESKY]: '',
  [ChainId.KAIA]: '',
  [ChainId.KAIROS]: '',
  [ChainId.METIS_TESTNET]:'',
  [ChainId.MODE]: '',
  [ChainId.MODE_TESTNET]: '',
  [ChainId.OKX]:'',
  [ChainId.OPBNB_TESTNET]: '',
  [ChainId.OPTIMISM]: '',
  [ChainId.SCROLL]: '',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SEPOLIA]: '',
  [ChainId.SHAPE]: '',
  [ChainId.SHAPE_TESTNET]: '',
  [ChainId.SONEIUM_TESTNET]: '',
  [ChainId.UNICHAIN_TESTNET]:'',
};

export const INIT_CODE_HASH = '';

export const INIT_CODE_HASHES: { [chainId: number]: string } = {
  [ChainId.AMOY]:'',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_SEPOLIA]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.BASE]: '',
  [ChainId.BASE_SEPOLIA]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.FRAX_TESTNET]: '',
  [ChainId.FUJI]: '',
  [ChainId.HEDERA]: '',
  [ChainId.HEDERA_TESTNET]: '',
  [ChainId.HOLESKY]: '',
  [ChainId.KAIA]: '',
  [ChainId.KAIROS]: '',
  [ChainId.METIS_TESTNET]:'',
  [ChainId.MODE]: '',
  [ChainId.MODE_TESTNET]: '',
  [ChainId.OKX]:'',
  [ChainId.OPBNB_TESTNET]: '',
  [ChainId.OPTIMISM]: '',
  [ChainId.SCROLL]: '',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SEPOLIA]: '',
  [ChainId.SHAPE]: '',
  [ChainId.SHAPE_TESTNET]: '',
  [ChainId.SONEIUM_TESTNET]: '',
  [ChainId.UNICHAIN_TESTNET]:'',
};

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000);

// exports for internal consumption
export const ZERO = JSBI.BigInt(0);
export const ONE = JSBI.BigInt(1);
export const FIVE = JSBI.BigInt(5);
export const _997 = JSBI.BigInt(997);
export const _1000 = JSBI.BigInt(1000);
export const BASIS_POINTS = JSBI.BigInt(10000);

export const ZERO_PERCENT = new Percent(ZERO);
export const ONE_HUNDRED_PERCENT = new Percent(ONE);

export const CHAIN_LP_TOKEN_INFO: {
  [chainId: number]: { name: string; symbol: string };
} = {
  [ChainId.SHAPE_TESTNET]: {
    name: `Defolym3 LP's`,
    symbol: 'DEFOL-LP',
  },
  [ChainId.SONEIUM_TESTNET]: {
    name: `Defolym3 LP's`,
    symbol: 'DEFOL-LP',
  },

  [ChainId.BASE]: {
    name: `TunaDriver LPs`,
    symbol: 'TUNA-LP',
  },
};
