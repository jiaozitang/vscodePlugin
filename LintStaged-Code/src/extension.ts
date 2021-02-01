// @ts-ignore
import * as vscode from 'vscode';
// @ts-ignore
import { copyFile } from '../script/handleFile';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('extension.formatProject', async () => {
		const projectPath = await vscode.window.showInputBox({
				value: '',
				valueSelection: [2, 4],
				placeHolder: '请输入项目根目录',
				validateInput: (text: string) => {
					vscode.window.showInformationMessage(`Validating: ${text}`);
					return text === '123' ? 'Not 123!' : null;
				}
			});
		vscode.window.showInformationMessage(`Got: ${projectPath}`);

		const { extensionPath } = arguments[0];
		// 1.安装依赖
		const terminal = vscode.window.createTerminal('LintStageCodeTerminal');
		terminal.show();
		terminal.sendText(`cd ${projectPath}`);
		terminal.sendText("npm install lint-staged prettier eslint stylelint husky @commitlint/cli @commitlint/config-conventional --save-dev");

		// 2.复制配置文件
		const terminalFilePath = `${extensionPath}/script/config`;
		copyFile(terminalFilePath, projectPath);
		vscode.window.showInformationMessage('formatProject Success!');
	});

	context.subscriptions.push(disposable);
}
