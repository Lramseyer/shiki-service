# shiki-service

This is a simple extension exposing the `getUserTheme();` function from [vscode-shiki-bridge](https://github.com/yoavbls/vscode-shiki-bridge) to worskapce extensions running over SSH.

## Using this extension

This extension has only one (async) command: `shiki.getUserTheme`. It takes no arguments, and returns the same result as [getUserTheme](https://github.com/yoavbls/vscode-shiki-bridge#getusertheme) from the vscode-shiki-bridge package.

## Building the extension

To build the extension, run:

`npm install`  
`vsce package`
