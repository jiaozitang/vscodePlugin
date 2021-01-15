// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension is now active1112!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.formatProject', () => {
		const { extensionPath, storagePath } = arguments[0];
		// 1.安装依赖
		const terminal = vscode.window.createTerminal('LintStageCodeTerminal');
		terminal.sendText(`cd ${storagePath}`);
		terminal.sendText("npm install lint-staged prettier eslint stylelint husky @commitlint/cli @commitlint/config-conventional --save-dev");
		terminal.show();

		// 2.复制配置文件
		const terminalFilePath = `${extensionPath}/script`;
		terminal.sendText(`cd ${terminalFilePath}`);
		terminal.sendText('node handleFile');
		// 2.修改package.json
		// 3.插入prettier配置文件.prettierrc
		// 4.插入husky配置文件.huskyrc.json
		// 5.插入eslint配置文件.eslintrc.js
		// 6.插入lint-stage配置文件.lintstagedrc
		// 7.插入commitlint配置文件.commitlintrc
		// 8.插入stylelint配置文件.stylelintrc
		vscode.window.showInformationMessage('formatProject Success!');
	});

	context.subscriptions.push(disposable);
}
