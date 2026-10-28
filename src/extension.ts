import * as vscode from 'vscode';
import { getUserTheme, getTheme, getUserLangs } from 'vscode-shiki-bridge';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('shiki.getUserTheme', getUserTheme),
    vscode.commands.registerCommand('shiki.getTheme',     getTheme),
    vscode.commands.registerCommand('shiki.getUserLangs', getUserLangs)
  );
}

export function deactivate() {}
