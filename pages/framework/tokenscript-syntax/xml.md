# TokenScript XML file

The tokenscript.xml provides the core declarative elements used to load a TokenScript Application.

Every TokenScript XML has the following elements:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<ts:token xmlns:ts="http://tokenscript.org/2024/01/tokenscript"
		  xmlns:xml="http://www.w3.org/XML/1998/namespace"
		  xsi:schemaLocation="http://tokenscript.org/2024/01/tokenscript https://www.tokenscript.org/schemas/2024-01/tokenscript.xsd"
		  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xmlns:ethereum="urn:ethereum:constantinople"
		  name="ReallyCoolToken">
	<ts:label>
		<ts:plurals xml:lang="en">
			<ts:string quantity="one">Really Cool Token</ts:string>
			<ts:string quantity="many">Really Cool Tokens</ts:string> <!-- Specifying plurals is optional -->
		</ts:plurals>
	</ts:label>
	<ts:meta>
		<ts:description xml:lang="en">A really cool TokenScript for my NFTs</ts:description>
		<ts:aboutUrl xml:lang="en">https://really-cool-token.com/</ts:aboutUrl>
		<ts:iconUrl xml:lang="en">https://really-cool-token.com/ts-image.png</ts:iconUrl>
		<ts:imageUrl xml:lang="en">https://really-cool-token.com/token-image.png</ts:iconUrl>
		<ts:env name="API_HOST">https://my.api/v2/</ts:env>
	</ts:meta>
	<!-- Other Elements Go Here -->
</ts:token>
```

## ts:token

The `ts:token` element is the root element for each TokenScript application.
It specifies the name of the TokenScript as well as the TokenScript schema version to be used for this TokenScript.
The TokenScript CLI starter templates include this file, so for the most part you will never have to edit these attributes unless you are updating to a later schema version.
Any backward compatible changes to the framework will use a new schema so that existing TokenScript application are not effected.

## ts:label

The `ts:label` element provides human-readable labels for this TokenScript application.
It includes `ts:plurals` elements to provide labels for different languages and plural usages.

## ts:meta

The `ts:meta` element provide metadata to the TokenScript engine, as well as environment variables that are made available to each TokenScript Card.
This element is optional and can be omitted.

- ts:description: A short description for your application.
- ts:aboutUrl: An external URL to information about this token or TokenScript.
- ts:iconUrl: An icon for this TokenScript. Image data URLs are supported. It also acts as a fallback image when token images do not exist.
- ts:imageUrl: This element can be used to replace the token image for all tokens that this TokenScript relates to. It's most commonly used to provide a high-res image for erc20 tokens.
- ts:env: These are named environment variables, which are made available within your TokenScript cards via the Card SDK.