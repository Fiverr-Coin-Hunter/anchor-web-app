import {
  AddressProvider,
  AddressProviderFromJson,
} from '@anchor-protocol/anchor.js';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { contractAddresses } from 'env';

export const testClient = new ApolloClient({
  uri: 'https://tequila-mantle.anchorprotocol.com',
  //uri: 'https://tequila-mantle.terra.dev',
  cache: new InMemoryCache(),
});

export const testAddressProvider: AddressProvider = new AddressProviderFromJson(
  contractAddresses,
);

export const testWalletAddress = 'terra12hnhh5vtyg5juqnzm43970nh4fw42pt27nw9g9';
