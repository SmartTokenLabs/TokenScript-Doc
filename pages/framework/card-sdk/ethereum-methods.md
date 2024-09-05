## Ethereum methods

### Signing

You can request the user to sign a personal message like this:

```typescript
// Type
type SignPersonal = (msgParams: {data: string|Uint8Array}, callback?: (error: any, data: string) => void) => void|Promise<string>;

// Usage
const signature = await tokenscript.personal.sign({data: "My message"});
```

This method is async but can also take a callback as well.

**Note: If you need typed data signing, use the Ethereum Provider**

### getRpcUrls

The `getRpcUrls` method provides an array of RPC URLs for the specified chain ID:

```typescript
// Type
type GetRpcUrls = (chain: number) => string[];

// Usage
const rpcUrls = tokenscript.eth.getRpcUrls(137);
````

These URLs are configured and provided by the TokenScript Engine.

### getRpcProvider

Instead of requesting URLs and configuring the ethereum provider yourself, you can get an ethers.js provider directly:

```typescript
// Type
type GetRpcProvider = (chain: number) => AbstractProvider; // ethers.AbstractProvider

// Usage
const provider = tokenscript.eth.getRpcProvider(137);
```

If more than one RPC URL is defined for the specified chain ethers.FallbackProvider is returned, otherwise ethers.JsonRpcProvider is returned.

### getContractInfo

It's often helpful to get contract information based on the name specified in the TokenScript XML.
In this way there is no need to hard-code contract addresses and ABI JSON within your Javascript code.
Instead, this config information can be specified within the `tokenscript-project.json` environment variables and made available via this API method.

```typescript
// Type
type GetContractInfo = (name: string, chain?: number) => {chain: number, address: string, abi: any};

// Usage
const contractInfo = tokenscript.eth.getContractInfo("MyReallyCoolToken");
```

If the chain parameter isn't provided, the chain of the current token is used or the first chain specified within `ts:contract`.

### getContractInstance

Just like getContractInfo, we can get an ethers.Contract instance based on the name & chain provided.
These contracts must have an ABI specified within `ts:contract` for the methods you want to execute.

```typescript
// Type
type GetContractInstance = (name: string, chain?: number) => Contract; // ethers.Contract

// Usage
const contract = tokenscript.eth.getContractInstance("MyReallyCoolToken"); // ABI with getTokenPoints is defined in `ts:contract`
const points = await contract.getTokenPoints(token.tokenId);
```

This is most helpful when we want to read contract data within a card, without the use of TokenScript attributes that are loaded when the card is open.

## Ethereum provider

To allow scenarios that are not supported by TokenScript's declarative transactions, the Card SDK provides an EIP-1193 proxy.
This is the standard injected provider (`window.ethereum`) that you would be familiar with from integrating with Metamask and other browser extension wallets.

To use this provider, it's recommended that you wrap it with Ethers.js BrowserProvider like so:
```typescript
const provider = new ethers.BrowserProvider(window.ethereum);

// You can then get an ethers contract instance to interact with a contract
const contract = new ethers.Contract(contractAddress, abi, provider);
```

**Note: When using the injected provider, you must take care of chain switching, transaction notifications & error handling yourself.**