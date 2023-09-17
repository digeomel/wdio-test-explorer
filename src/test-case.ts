import * as vscode from 'vscode';

export class TestCase {

    getLabel(): string {
        return 'Some test case';
    }

    async run(item: vscode.TestItem, options: vscode.TestRun): Promise<void> {
    }
}