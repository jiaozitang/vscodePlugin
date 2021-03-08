// @ts-ignore
import * as vscode  from 'vscode'

// @ts-ignore
import { copyFile } from '../script/handleFile';
import { FileController } from './file-controller';

const { commands, window } = vscode

export function activate(context: vscode.ExtensionContext) {
	const disposable = commands.registerCommand('extension.formatProject', async () => {
		const { extensionPath } = arguments[0];
		const File = new FileController().readSettings();
		const root = await File.determineRoot();
		// 1.安装依赖
		const terminal = window.createTerminal('LintStageCodeTerminal');
		terminal.show();
		terminal.sendText(`cd ${root}`); // 默认一个非法路径
		await terminal.sendText("cnpm install lint-staged prettier eslint@7 @typescript-eslint/parser @typescript-eslint/eslint-plugin stylelint stylelint-config-standard stylelint-order stylelint-scss husky @commitlint/cli @commitlint/config-conventional eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard eslint-plugin-typescript --save-dev");
		await terminal.sendText("cnpm install typescript --save");

		// 2.复制配置文件
		const terminalFilePath = `${extensionPath}/script/config`;
		copyFile(terminalFilePath, root);
		window.showInformationMessage('formatProject Success!');
		window.showInformationMessage(root);
	});

	context.subscriptions.push(disposable);
}
