# shiki-service

This is a simple extension exposing the `getUserTheme();` function from [vscode-shiki-bridge](https://github.com/yoavbls/vscode-shiki-bridge) to worskapce extensions running over SSH.

## Installing this extension

1. Download the .vsix file at [https://github.com/Lramseyer/shiki-service/releases](https://github.com/Lramseyer/shiki-service/releases)
2. In VS Code, open the command entry (Ctrl/Cmd + Shift + P) and type in "Install from VSIX..."
3. Select the downloaded .vsix file

## Using with your extension

This extension has 3 (async) commands:

- `shiki.getUserTheme`
- `shiki.getTheme`
- `shiki.getLanguages`

The argument and return structure for each command is the same as their respective functions outlined in the API linked below. Note that these 3 functions return Promises, so you will need to keep that in mind.

[https://github.com/yoavbls/vscode-shiki-bridge](https://github.com/yoavbls/vscode-shiki-bridge)

## Building the extension

To build the extension, run:

`npm install`  
`vsce package`
