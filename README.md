# shiki-service

This is a simple extension exposing the `getUserTheme();` function from [vscode-shiki-bridge](https://github.com/yoavbls/vscode-shiki-bridge) to worskapce extensions running over SSH.

## Installing this extension

1. Download the .vsix file at [https://github.com/Lramseyer/shiki-service/releases](https://github.com/Lramseyer/shiki-service/releases)
2. In VS Code, open the command entry (Ctrl/Cmd + Shift + P) and type in "Install from VSIX..."
3. Select the downloaded .vsix file

## Using with your extension

This extension has only one (async) command: `shiki.getUserTheme`. It takes no arguments, and returns the same result as [getUserTheme](https://github.com/yoavbls/vscode-shiki-bridge#getusertheme) from the vscode-shiki-bridge package.

## Building the extension

To build the extension, run:

`npm install`  
`vsce package`
