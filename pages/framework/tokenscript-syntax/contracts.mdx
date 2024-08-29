# Contracts & Token Origins

The `ts:contract` element is used to define named contracts that your TokenScript will interact with.
It is also used to define the origin contracts for your TokenScript.
Origin contracts are token contracts that your TokenScript is associated with.
When the TokenScript engine loads your TokenScript, it will automatically discover tokens for origin contracts and list them, along with their associated cards, in the user interface.

Here is an example of defining contracts in your TokenScript XML:

```xml
<ts:token>
	<!-- Previous tags omitted -->
	<ts:contract interface="erc721" name="ReallyCoolToken">
		<ts:address network="$tst{CONTRACT_CHAIN}">$tst{NFT_CONTRACT_ADDRESS}</ts:address>
		<ts:abi>

		</ts:abi>
	</ts:contract>
	<ts:contract name="MySatelliteContract">
		<ts:address network="$tst{CONTRACT_CHAIN}">$tst{NFT_CONTRACT_ADDRESS}</ts:address>
		<ts:abi>
			<![CDATA[
			[
				{
					"constant": true,
					"inputs": [
						{
							"name": "_owner",
							"type": "address"
						}
					],
					"name": "balanceOf",
					"outputs": [
						{
							"name": "balance",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				// Additional methods omitted
			]
			]]>
		</ts:abi>
	</ts:contract>
	<ts:origins>
		<!-- Define the contracts which hold the tokens that the user will use -->
		<ts:ethereum contract="ReallyCoolToken"/>
	</ts:origins>
</ts:token>
```

This example defined a single erc721 token origin contract, and another contract that can be referenced in attribute & transaction declarations.
For each origin contract the `interface` attribute must be defined. The following ERC standard are supported:

- erc20
- erc721
- erc1155

## Contract Addresses

You can define multiple `ts:address` elements inside each origin contract.
This allows you to create a single TokenScript that is associated with tokens that live on multiple chains.
An example of this use-case is an erc20 token that can be bridged across multiple networks.

## Contract ABI

The `ts:abi` element defines the JSON ABI for your ethereum smart contract.
There are certain situations where you must specify the ABI:

- When using methods with complex return types in TokenScript attributes. Complex return types are methods that return multiple values, structs or arrays.
- When using complex parameter types in your TokenScript transactions.
- When you want to call methods for your contract within a TokenScript card (using Card SDK), rather than loading that data with a TokenScript attribute.
- When you want to be able to decode custom errors that your contract emits and display them to the user.

Note: You only need to specify the ABI for the methods you plan to use, however it is often easiest to include the whole ABI.

## Template placeholders

You may also notice something peculiar about the values in `ts:address`. So what is `$tst{NFT_CONTRACT_ADDRESS}`?
tst stands for TokenScript Template. These are template variables that are replaced at build time with values defined for your current environment.
These template variables can be placed anywhere in your tokenscript.xml, as long as it results in a valid XML output.

The values for these variables are defined in the `tokenscript-project.json`. Here is an example of what that looks like:

```json
{
	"$schema": "https://tokenscript.org/schemas/project/tokenscript-project.schema.json",
	"environment": {
		"default": {
			"CONTRACT_CHAIN": "11155111",
			"NFT_CONTRACT_ADDRESS": "0x2d46915606580080C6c9032ed041e6FF21a5C8a6"
		},
		"polygon": {
			"CONTRACT_CHAIN": "137",
			"NFT_CONTRACT_ADDRESS": "0xB48f53010Acbc0E24D3D12D892E2215879e6fD13"
		}
	}
}
```

Now if you want to build or run the TokenScript to target Polygon chain rather than Sepolia you can use `tokenscript build polygon` or `tokenscript emulate polygon` respectively.
This is helpful for switching between deployment without having to modify any content in the XML.