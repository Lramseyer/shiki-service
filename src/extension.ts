import * as vscode from 'vscode';
import { getUserTheme } from 'vscode-shiki-bridge';

export function activate(context: vscode.ExtensionContext) {

  let themeData: [string, any] = ["", {}];

  const command = vscode.commands.registerCommand('shiki.getUserTheme', async () => {
    const currentTheme = vscode.workspace.getConfiguration('workbench').get('colorTheme');
    if (currentTheme !== themeData[0]) {
      themeData = await getUserTheme();
    }
    return themeData;
  });

  context.subscriptions.push(command);
}

export function deactivate() {}
