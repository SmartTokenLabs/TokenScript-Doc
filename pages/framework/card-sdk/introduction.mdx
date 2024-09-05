# Card SDK

The Card SDK provides the glue between the Javascript defined in the TokenScript project and the engine.
It is essentially a 2-way message bus that allows the TokenScript developer to make requests to the engine and to receive updated data and other events emitted by the engine.
It also allows the user to access various data including context data, environment variables & contract information.

## Token Context Data

As explained in the introduction to TokenScript attributes, Token Context data is made available through the card SDK.
Our starter templates already handles the dataChange event which is used to provide initial and updated token context data to your card.

If you want to register your own listener, you can do so by overwriting the following eventHandler

```typescript
tokenscript.tokens.dataChanged = async (oldTokens: any, updatedTokens: ITokenData, id: string) => {

}
```

For our Svelte & React templates, the `updatedTokens.currentInstance` is automatically written to a global context variable that your UI can react to.

## Environment Variables

To access environment variables within your card, ensure that the variables is added into `ts:meta` as demonstrated [here](./tokenscript-syntax/xml).

You can then access these variables via the `tokenscript.env` object:

```typescript
tokenscript.env.MY_ENV_VARIABLE
```

## Event handlers

The engine include event handler infrastructure that allows the registration of multiple event listeners throughout your application.

Currently, there is only one handler however more will be added in the future:

- TRANSACTION_EVENT

```typescript
// Types
interface TokenScriptEvents {
	TRANSACTION_EVENT: ITransactionStatus
}

// Usage
tokenscript.on("TRANSACTION_EVENT", (data: ITransactionStatus) => {
	// Handle transaction event
})
```

The TRANSACTION_EVENT can be used to react to transaction status even when the default action button is used to trigger the transaction.

## Bundled libraries

To reduce the size of built TokenScripts, some common libraries are bundled with the Card SDK.
This allows the use of these libraries without explicitly installing them via NPM.

Bundled libraries

- Ethers.js ^v6.13 - available via the `ethers` global variable
