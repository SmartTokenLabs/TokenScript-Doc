# Cards

TokenScript cards are used to define UIs for particular token collection/s.
Your HTML, CSS, JS is embedded within `ts:cards` during the build process.
There are a few different types of cards, and these apply to different scenarios.

Each token can have an unlimited amount of cards associated with it. They can be used to display token information,
perform single actions or be an entrypoint to a rich application that allows the user to perform many action from the same card.

Cards can also be disabled based on attribute conditions using the `ts:selection` element that is detailed here (TODO).

## Cards Example

```xml
<ts:cards>
	<ts:viewContent name="common" xmlns="http://www.w3.org/1999/xhtml">
		<ts:include type="html" src="./dist/index.html"/>
		<ts:include type="css" src="./src/styles.css"/>
	</ts:viewContent>

	<ts:card type="token" name="Info" origins="ReallyCoolToken">
		<ts:label>
			<ts:string xml:lang="en">Cat Bio</ts:string>
		</ts:label>
		<ts:view xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" urlFragment="info">
			<ts:viewContent name="common"/>
		</ts:view>
	</ts:card>

	<ts:card type="action" name="levelUp" origins="ReallyCoolToken" exclude="cantLevelUp">
		<ts:label>
			<ts:string xml:lang="en">Level Up!</ts:string>
		</ts:label>
		<ts:transaction>
			<ethereum:transaction as="uint" contract="ReallyCoolToken" function="levelUp">
				<ts:data>
					<ts:uint256 ref="tokenId"/>
				</ts:data>
			</ethereum:transaction>
		</ts:transaction>
		<ts:view xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" urlFragment="levelUp">
			<ts:viewContent name="common"/>
		</ts:view>
	</ts:card>
</ts:cards>
```

## ts:viewContent

The `ts:viewContent` tag is used to define common web content that can be used across different cards.
This helps to prevent duplication of code used within multiple cards (such as a common library) and allows the ability to
use an SPA (single page application) for all of your token cards.

The same `ts:viewContent` tag can then be placed within `ts:view` to reference the view content using the name attribute.

## ts:include

The `ts:include` tag is used to reference external HTML, CSS & JS files that are to be inlined during the build process.
When building a TokenScript project, the CLI will look for these tags and replace them with the content of the corresponding file.
This tag can be placed in both `ts:view` & `ts:viewCotent` elements.

The `ts:view` & `ts:viewContent` elements can also include any valid HTML tags, however it is recommended to use `ts:include` and let the TokenScript CLI take care of this.

## ts:card

Each `ts:card` element defines a separate card. These are often displayed to the user as a button.

### Card Types

The card type is defined by using the `type` attribute.

- **token:** This is the primary card type and is usually used to display information about the corresponding token, but can also be used to execute transactions.
- **action:** These cards are intended to perform specific token-related actions.
	By default, they display the view along with a button at the bottom to trigger the defined transaction or another action
- **activity:** This card type is analogous with an action card.
- **onboarding:** Like all other types, this card is not associated with any token and can be access by users that don't have a token yet.
	The most common use-case for this card is allowing the user to mint a token to gain access to other cards.

### name

The `name` attribute is a unique name for your card. This value is used for deep-links that open a specific card.
i.e. https://viewer.tokenscript.org/?chain=137&contract=0xB48f53010Acbc0E24D3D12D892E2215879e6fD13#card=Play&tokenId=715

### origin

The `origin` attribute defines the token origins that this card should be shown for.
It can contain multiple space-separated values and must match the name of the contracts defined in the `ts:origins` element.
i.e. `origins="ReallyCoolToken MyOtherTokenCollection"`

### exclude

The `exclude` attribute references a `ts:selection` element. When the selection criteria is a match for this token, the card is disabled.

## ts:label

This label is used as the button text for this card and uses the same syntax as other `ts:label` tags used throughout the tokenscript.xml

## ts:view

The `ts:view` element defines the web content for this card and also has several attributes that control the UI for this card

### urlFragment

The `urlFragment` fragment attribute is used to support routing within TokenScript projects built as an SPA.
When the card is loaded this value is added onto the document.location.hash.

### uiButton

For simple actions, TokenScript viewer UI provides a button at the bottom of the card that can be used to trigger the
default transaction or invoke the window.onConfirm function defined by the script.

This button is shown by default on action cards and disabled by default on all other cards. The "uiButton" attribute can be used to override the default behavior.

### fullScreen

By, default cards are shown as a popup modal and should use a responsive design to ensure a good user experience on mobile devices.
The default max size for the popover modal in TokenScript viewer is 500px wide & 700px high.

If your card should be full screen, simply set `fullScreen="true"`.
