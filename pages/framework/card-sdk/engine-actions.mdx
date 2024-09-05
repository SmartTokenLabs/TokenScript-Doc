## Engine & UX actions

### setProps

One of the most important engine actions is `setProps`. It allows the user to define values that can be used as inputs to attributes & transactions:

```typescript
tokenscript.action.setProps({
	myAttribute: "123",
	myAttribute2: 456
})
```

When invoking this method, the engine checks these values to see if they are `ts:user-entry` attributes.
If they are not user entry values the engine checks if any of these values are a dependency for another attribute defined in the current scope.
If so the engine will reload those attributes and return the updated data to the card via the `dataChanged` handler explained above.
In this way, attribute values can be updated automatically based on an input that is set programmatically from within the card.

Likewise, declarative transactions can reference these values as transactions arguments.

Both attributes & transactions reference these values using the `local-ref` XML attribute:

```xml
<ts:data>
	<ts:address ref="ownerAddress"/>
	<ts:address local-ref="toAddress"/>
	<ts:uint256 ref="tokenId"/>
</ts:data>
```

### show/hideLoader

A self-explanatory method, this allows the user to show or hide the default card loaded provided the TokenScript viewer UI:

`tokenscript.action.showLoader()` OR `tokenscript.action.hideLoader()`.

### setActionButton

The setActionButton method allows the developer to control the state of the default action button:

```typescript
// Type
type setActionButton = (options: { show?: boolean, disable?: boolean, text?: string }) => void

// Usage
tokenscript.action.setActionButton({
	show: true, // Whether to show the button
	disable: false, // Whether to make the button disabled
	text: "Transfer Now" // The text of the button
})
```

This allows the user to hide, disable or update the button text based on some conditions defined in Javascript.

### executeTransaction

`executeTransaction` is used to invoke declarative transactions programmatically as discussed in [TokenScript Transactions](./tokenscript-syntax/transactions).

```typescript
// Types
interface TXOptions {
	txName?: string
}

interface ITransactionStatus {
	status: 'started'|'aborted'|'submitted'|'confirmed'|'completed',
	txNumber?: string,
	txLink?: string,
	txRecord?: any
}

interface ITransactionListener {
	(data: ITransactionStatus): void|Promise<void>
}

type ExecuteTransaction = (optionsOrTxName?: string|TXOptions, listener?: ITransactionListener) => Promise<ITransactionStatus|false>

// Usage

// 1. Execute the default transaction (specified in `ts:card`)
if (!await tokenscript.action.executeTransaction()){
  return; // User aborted transaction
}
// Do some post-transaction processing

// 2. Execute a top-level named transaction, with some input values from Javascript
tokenscript.action.setProps({
	secretCode: "1234"
});
if (!await tokenscript.action.executeTransaction("levelUp")){
  return; // User aborted transaction
}

// 3. Use a transaction progress listener
await tokenscript.action.executeTransaction("levelUp", (txInfo) => {
	// Update UI based on transaction process
});

```

Since the executeTransaction method is async, it can be used to chain together transactions and other off-chain processes.

### showMessageToast

This allows the developer to show message notifications using the toast notification system provided by TokenScript viewer.
Along with the other UI specific methods, this helps keep the user-experience consistent across all TokenScript applications.

```typescript
// Type
type ShowMessageToast = (type: 'success'|'info'|'warning'|'error', title: string, description: string) => void;

// Usage
tokenscript.action.showMessageToast("error", "An error occurred", "Detailed information about the error");
```

### showTransactionToast

Like the previous method, this allows the user to show transaction specific notifications:

```typescript
// Type
type ShowTransactionToast = (status: "submitted"|"confirmed", chain: number, txHash: string) => void;

// Usage
tokenscript.action.showTransactionToast('confirmed', 137, "0x05b9d22ce9ac87e399c18c488c3e02327945ffb4633890030789ea1f2f783e0b");
```

Note: This method only needs to be used when using the injected ethereum provider. If you are using declarative transactions, notifications are already taken care of by the engine.

### closeCard

This method simply closes the current card:

```typescript
tokenscript.action.closeCard();
```

### openCard

You can also switch between cards using the `openCard` method.

```typescript
// Type
type OpenCard = (name: string, originId?: string, tokenId?: string) => void;

// Usage
tokenscript.action.openCard({
	name: "myCardName",
	originId: "ReallyCoolToken", // This is the name of the origin contract as defined in the tokenscript.xml.
	tokenId: "1" // The tokenId we want to open the card for
});
```

If originId or tokenId are not provided, the current token context is used to open the new card.
