# Attributes

One of the core concepts of the TokenScript framework is Context Data.
This is data that is automatically made available to your TApp by the TokenScript engine.
Some of these values can be referenced within tokenscript.xml elements, and are also available in each TokenScript card via the Card SDK.

Some examples of this data include:
- Basic token data such as tokenId, contractAddress, etc. See [Intrinsic Attributes](#intrinsic-attributes) for more details.
- Token metadata (the JSON metadata associated with the current token).

For a full reference of available data, see [here](https://github.com/SmartTokenLabs/tokenscript-engine/blob/master/javascript/engine-js/src/tokens/ITokenContextData.ts)

## User defined attributes

Along with the basic Context Data provided by the engine, TokenScript developers are able to define their own attributes
and the engine will automatically fetch those values and add it to the Context Data.

Let's look at a simple example of a user defined attribute:
```xml
<ts:attribute name="nftGameLevel">
	<ts:type><ts:syntax>1.3.6.1.4.1.1466.115.121.1.27</ts:syntax></ts:type>
	<ts:label>
		<ts:string xml:lang="en">NFT Game Level</ts:string>
	</ts:label>
	<ts:origins>
		<ethereum:call function="getGameLevel" contract="ReallyCoolToken" as="uint">
			<ts:data>
				<ts:uint256 ref="tokenId"/>
			</ts:data>
		</ethereum:call>
	</ts:origins>
</ts:attribute>
```

This example shows us defining the attribute "nftGameLevel".
It's a uint value provided by the `ReallyCoolToken` contract by calling the `getGameLevel` method.
This contract method only has one parameter, tokenId. The `ref` XML attribute tells the TokenScript engine what value we want to use for this parameter.
Since the engine already knows which tokenId we are using, it already knows how to provide this value and this simple declaration is all the developer needs to gain access to this value.

Values defined in `ts:data` can also be static values:
```xml
<ts:uint256>123</ts:uint256>
```

And they can even reference values set using the CardSDK. These can be user inputs, or some other values fetched or calculated using Javascript within a TokenScript card.
```xml
<ts:uint256 local-ref="myUserInput"/>
```

#### Note: ts:type is deprecated and will be marked as an optional element in future schema versions. For now you can simply copy this value.

### Attribute sources

As when as `ethereum:call`, TokenScript engine supports `ethereum:event` as a data source.

Here is an example of how you would find the ENS name for a specific ENS token:
```xml
<ts:attribute name="ensName">
	<ts:type>
		<ts:syntax>1.3.6.1.4.1.1466.115.121.1.15</ts:syntax>
	</ts:type>
	<ts:origins>
		<ethereum:event type="NameRegistered"
						contract="ETHRegistrarController"
						filter="label=${tokenId}"
						select="name"/>
	</ts:origins>
</ts:attribute>
```

Note: We plan to support more attribute sources in the near future, including fetching data from HTTP APIs.
In the meantime you can always fetch these values via Javascript and make them available by the `tokenscript.action.setProps()` method of the Card SDK.

### Attribute placement

`ts:attribute` elements can be placed at the top level of your TokenScript, below `ts:cards` or within a specific `ts:card`.
Depending on where you place them, the behavior is slightly different.

- Top Level Attributes: Are loaded when accessing any card and can also be referenced in `ts:selection` for disabling cards based on the value of that attribute.
- Card Specific Attributes: Are loaded only when accessing the card which they are defined in.

It's important to consider how top-level attributes may impact performance when choosing where to place them.

### Attribute dependencies

Attributes can reference other attributes as a dependency. For instance, attribute 'A' may reference the output of attribute 'B' in one of its parameters.
These dependencies are resolved by the TokenScript engine, but be careful about introducing circular dependencies in your application.

## Intrinsic attributes

- contractAddress (in the context of a token card)
- tokenId (in the context of a non-fungible token)
- ownerAddress (the owner of the current token, usually the currently connected wallet address).
- chainId (The chain for the current token)

## Complex return types

Smart contracts often return complex data types such as multiple return values, arrays & structs (often referred to as tuples).
TokenScript attributes can fetch and decode this complex data, as long as the ABI fragment for that method is available in the referenced `ts:contract`.

Simply change the `as` parameter of `ts:call` to `abi`:

```xml
<ethereum:call function="getComplexInfo" contract="ReallyCoolToken" as="abi">
	<ts:data>
		<ts:uint256 ref="tokenId"/>
	</ts:data>
</ethereum:call>
```