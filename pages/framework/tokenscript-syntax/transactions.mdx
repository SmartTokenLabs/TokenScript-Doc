# Transactions

One powerful feature of the TokenScript framework is the concept of declarative transactions.
They provide an easy way to invoke ethereum transactions without writing lots of Javascript.
In fact, it's possible to wire up simple transactions without a single line of imperative code!
This is because transactions take advantages of attribute values which they can reference for use in the smart contract's method parameters.
This is also true for user-input attributes, which can be automatically collected by the engine & card SDK before invoking a transaction.

## A simple action card example

This card implements the erc-721 transfer function and does so without any Javascript:

```xml
<ts:card type="action" name="Transfer" origins="ReallyCoolToken">
	<ts:label>
		<ts:string xml:lang="en">Transfer</ts:string>
	</ts:label>
	<ts:attribute name="toAddress">
		<ts:type>
			<ts:syntax>1.3.6.1.4.1.1466.115.121.1.27</ts:syntax>
		</ts:type>
		<ts:label>
			<ts:string xml:lang="en">To Address</ts:string>
		</ts:label>
		<ts:origins>
			<ts:user-entry as="address"/>
		</ts:origins>
	</ts:attribute>
	<ts:transaction>
		<ethereum:transaction contract="ReallyCoolToken" function="safeTransferFrom" as="uint">
			<ts:data>
				<ts:address ref="ownerAddress"/>
				<ts:address local-ref="toAddress"/>
				<ts:uint256 ref="tokenId"/>
			</ts:data>
		</ethereum:transaction>
	</ts:transaction>
	<ts:view xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" urlFragment="transfer">
		<ts:viewContent name="common"/>
	</ts:view>
</ts:card>
```

You can see that the syntax for transactions is very similar to attributes that use `ethereum:call`.
Note: Attributes defined within the card (either in XML or via Card SDK `setProps`) should use `local-ref` rather than `ref` to reference attributes.

Since we have defined our user-input attribute `toAddress`, we only need to supply an input field in the view with the same ID:

```html
<div style="margin-bottom: 18px;background-color: #F5F5F5;border-radius: 20px;font-weight: 300;padding: 18px;">
	<p style="margin: 7px 0;font-weight: 400;font-size: 14px;">
	  Account Address
	</p>
	<input
	  minlength="42"
	  maxlength="42"
	  placeholder="To Address"
	  id="toAddress"
	  style="padding: 12px 14px; width: 100%; border-radius: 4px; border: 1px solid #B6B6BF; margin: 5px 0;"
	  type="text"
	/>
  </div>
```

The engine will ask the card SDK to collect the input value before invoking the transaction.
The other parameters (ownerAddress & tokenId) are intrinsic attributes that are known by the engine, but can also be user-define attributes.

## Top-level transactions

Each card element can only have a single transaction declared inside which can become a big limitation for more complex actions, such as an erc-20 approval flow.
This is where top-level transactions come in. Top-level transactions are named transactions that can be invoked from any card using the Card SDK.

```xml
<ts:transaction name="safeTransferFrom">
	<ethereum:transaction contract="ReallyCoolToken" function="safeTransferFrom" as="uint">
		<ts:data>
			<ts:address ref="ownerAddress"/>
			<ts:address local-ref="toAddress"/>
			<ts:uint256 ref="tokenId"/>
		</ts:data>
	</ethereum:transaction>
</ts:transaction>
```

Top-level transactions must be declared below `ts:attributes` and have a unique name.

## Setting inputs programmatically

Sometimes using direct user input may not be possible, such as when the input requires some
processing to get the final value, or when the value is calculated based on some off-chain logic.

The Card SDK's `tokenscript.action.setProps()` method can be used to programmatically set parameter values.
You do not have to define `ts:user-entry` attributes when using `setProps`.

Note: When using `setProps`, make sure you don't have any HTML input elements with the same ID, as the keys you've already set may be overwritten.
Alternatively you can define `data-ts-prop="false"` on the input element to disable the automatic collection of input fields.

## Invoking transactions

TokenScript provides a few ways to trigger actions depending on your use-case.

### Action Button

The default action button (uiButton) can be used to trigger the card's transaction or an off-chain actions.

If the card does not contain a transaction, the `window.onConfirm` function is triggered to perform the card's intended action.
An example of this would be if an API call or Ethereum signature is needed to get some transaction inputs.
In this case we can perform my transaction prep and execute the transaction programmatically:

```typescript
window.onConfirn = async () => {
	const res = await getApiData(); // Get some off-chain data to use in our transaction
	tokenscript.action.setProps({myAttribute: res.myAttribute});
	await tokenscript.action.executeTransaction();
}
```

In this way, even the default action button can be used to chain transactions together and define other complex logic in your TokenScript card.

### Card SDK

Sometimes a single action button isn't enough, so transactions can be invoked programmatically using the Card SDK.
See the [Card SDK documentation](../card-sdk) for more details.

When the default action button isn't needed, it can be disabled. See [here](./cards#uiButton) for further details.

## Ethereum provider

To allow scenarios that are not supported by TokenScript's declarative transactions, the Card SDK provides a EIP-1193 proxy.
Learn how to use it [here](../card-sdk#ethereum-provider).