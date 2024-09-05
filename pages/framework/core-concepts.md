# TokenScript Framework

TokenScript is a Tokenization framework used to create SmartTokens & TApps.
It allows you to attach rich functionality to blockchain tokens, which would normally have to be implemented separately in each wallet or DApp.
TokenScript applications are self-contained, portable and embeddable, allowing the token author to deliver the same experience across different applications.

TokenScript allows token issuers and other trusted authorities to enrich a given token with a wide set of information, rules and functionalities.
With TokenScript, wallets and webservices can easily, securely and privately implement a token with all its functions, both on-chain and off-chain, without the need to write any code specific to that token.

Additionally, the TokenScript Engine takes care of wallet connections, token discovery, data fetching/refreshing & transaction processing.
This allows the TokenScript developer to focus on their token logic from the very beginning of their project, rather than being bogged down with these common tasks.

## Core Components

TokenScript consists of several components:

- **TokenScript Engine:**
	This is the runtime for TokenScript applications. The engine is headless and allows wallets & DApps to integrate TokenScript support in their own UI.
	You can find the reference implementation of the runtime [here](https://github.com/SmartTokenLabs/tokenscript-engine/tree/master/javascript/engine-js).

- **TokenScript Card SDK:**
	This SDK is injected into the TokenScript Card, and allows the developer to invoke standard functionality provided by the engine (i.e. signing a message, invoking a transaction, etc).
	You can find the CardSDK [here](https://github.com/SmartTokenLabs/tokenscript-engine/tree/master/javascript/card-sdk).

- **TokenScript App:**
	The developer creates & builds a TokenScript app into a .tsml file. This is an XML file that embeds Javascript, CSS & HTML to provide the user-interface for their TApp.

The following diagram shows how all these components interact:

Diagram TBC

## TokenScript Viewer

Along with the reference implementation of the engine, SmartTokenLabs provides [TokenScript Viewer](https://viewer.tokenscript.org/) which is a reference UI built on top of engine-js.
The TokenScript viewer provides a modular approach to UI, enabling the implementation of multiple "view types" for various integration scenarios.
Developers that are interested in integrating TokenScript can create their own view type within TokenScript viewer rather than developing their UI from the ground up.
You can find the code for TokenScript viewer [here](https://github.com/SmartTokenLabs/tokenscript-engine/tree/master/javascript/tokenscript-viewer).

## TokenScript Project

To get started creating a TokenScript project, see the [quick start guide](/quick-start/tokenscript-cli/quick-start-tokenscript-cli)

TokenScript framework is web-framework agnostic. We provide templates for React, Svelte, plain Typescript & plain HTML, but other frameworks can be used too.
If you are interested in using another web framework, please reach out to us and we will create a starter template for you.

TokenScript projects have the following structure.

```text
├── dist
├── src
├── out
│   ├── tokenscript.tsml
│   ├── tokenscript.signed.tsml
├── node_modules
├── .gitignore
├── package.json
├── package-lock.json
├── tokenscript.xml
└── tokenscript-project.json
```

Note: Files specific to a particular starter template (Svelte, React, TypeScript, etc.) have been omitted for brevity.

You will notice that the structure is similar to that of any NPM-based project with additional files specific to the TokenScript framework.
Files to note:

- dist - The output of the web build files. The source files are usually converted to a single HTML file with inlined JS/CSS.
	This is achieved using [vite-plugin-singlefile](https://www.npmjs.com/package/vite-plugin-singlefile) or similar.
- src - The source HTML/CSS/JS files for TokenScript cards.
- tokenscript.tsml - This is the build artifact that is produced when building the TokenScript project. You can think of it as the TokenScript version of .exe (Windows) or .apk (Android).
- tokenscript.signed.tsml - The signed version of tokenscript.tsml.
- tokenscript.xml - This is the source XML file that is processed to create the final TokenScript build artifact (tokenscript.tsml). It contains definitions for contracts, cards, attributes & transactions.
- tokenscript-project.json - This files stores project specific settings, such as environment variable config used to deploy a TokenScript app for multiple chains and/or contracts.

### The build process

The build process has several steps.

1. For React, Svelte or TypeScript projects, the web files are bundled into a single HTML file. The output is a single page application that can be used to display different TokenScript cards to the user.
2. `<ts:include type="html" src="dist/index.html">` tags in the tokenscript.xml are processed and replaced with the HTML/CSS/JS files specified by the `ts:include` tag's src attribute.
3. Any environment variable placeholders (i.e. `$tst{MY_ENV_VAR}`) in tokenscript.xml are replaced with the values for the selected environment.
4. The output .tsml is validated against the TokenScript XSD schema.