import * as vscode from 'vscode';

export class TestSuite {

    getLabel(): string {
        return 'Some test suite';
    }

    async run(item: vscode.TestItem, options: vscode.TestRun): Promise<void> {
    }
}