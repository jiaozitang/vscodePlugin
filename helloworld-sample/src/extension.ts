// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import fs = require('fs');
import path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension is now active11!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.formatProject', () => {
		// 1.安装依赖
		// const shellPath = '/Users/tangjiao11/Desktop/vscode-plugin/vscodePlugin/react-demo';
		// const terminal = vscode.window.createTerminal('formatProjectTerminal');
		// terminal.sendText(`cd ${shellPath}`);
		// terminal.sendText("npm install lint-staged prettier eslint stylelint husky @commitlint/cli @commitlint/config-conventional --save-dev");
		// terminal.show();
		// 2.修改package.json
		const currentlyOpenTabfilePath = vscode.window.activeTextEditor;
		console.log(currentlyOpenTabfilePath);
		// 3.插入prettier配置文件.prettierrc
		fs.open('1.txt', 'r+', (err, fd) => {
			if (err) {
				return console.error(err);
			}
			console.log("文件打开成功！");  
		});

		fs.readFile('/src', function (err, data) {
			if (err) {
					return console.error(err);
			}
			console.log("异步读取: " + data.toString());
		});

		console.log("程序执行完毕。");

		console.log('resolve : ' + path.resolve('1.txt'));

		// 4.插入husky配置文件.huskyrc.json

		// 5.插入eslint配置文件.eslintrc.js

		// 6.插入lint-stage配置文件.lintstagedrc

		// 7.插入commitlint配置文件.commitlintrc

		// 8.插入stylelint配置文件.stylelintrc

		vscode.window.showInformationMessage('formatProject Success!');
	});

	context.subscriptions.push(disposable);
}
