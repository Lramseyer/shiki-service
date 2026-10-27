import * as vscode from 'vscode';
import { getUserTheme } from 'vscode-shiki-bridge';

export function activate(context: vscode.ExtensionContext) {
  const cmd = vscode.commands.registerCommand('shiki.getUserTheme', getUserTheme);
  context.subscriptions.push(cmd);
}

export function deactivate() {}
