const domain = {
  name: 'Test Estate Contract',
  version: '1.0.0',
  chainId: 31337,
  verifyingContract: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
} as const;

const types = {
  NFTForSale: [
    { name: 'lister', type: 'address' },
    { name: 'price', type: 'uint256' },
    { name: 'uri', type: 'string' },
    { name: 'nonce', type: 'uint256' },
  ],
} as const;

export { domain, types };
