// / / / / / / / / / / / / / / / / / / / / / //
// / / / / / /   LIBRARIES   / / / / / / / / //
// / / / / / / / / / / / / / / / / / / / / / //

// LIBRARIES FROM VSCODE API
import {
  ExtensionContext,
  commands,
  window,
  StatusBarAlignment,
  DocumentSelector,
} from 'vscode';

// LIBRARIES FROM VSCODE LANGUAGE
import {
  LanguageClient,
} from "vscode-languageclient";



// / / / / / / / / / / / / / / / / / / / / / / //
// / / / / /  CONFIGURATIONS  / / / / / / / /  //
// / / / / / / / / / / / / / / / / / / / / / / //

// LSP Configurations
let client: LanguageClient;



// / / / / / / / / / / / / / / / / / / / / / / //
// / / / / / / /    MAIN    / / / / / / / / /  //
// / / / / / / / / / / / / / / / / / / / / / / //

/**
 * this method is called when your extension is activate.
 * your extension is activated the very first time the command is executed.
 * 
 * @param context the current context of the extension.
 */
export function activate(context: ExtensionContext) {

  /////////////////////////
  // GENERAL CONFIGURATIONS
  // Output Channel
  var outputchannel = window.createOutputChannel("versupack");

  // Status Bar
  const statusBar = window.createStatusBarItem(StatusBarAlignment.Left, 0);
  statusBar.text = 'Index Files';
  statusBar.show();

  // Indexer
  const indexer = new 
  

  /////////////////////////
  // CONTEXT UPDATES
  // Status Bar
  context.subscriptions.push(statusBar);

  // Commands
  context.subscriptions.push(commands.registerCommand('IndexCommand', IndexDocument));






  /////////////////////////
  // FUNCTION DECLARATION
  function IndexDocument(): void {



  }




  // SELECTS DOCUMENT IN USE
  const doc_select: DocumentSelector = [
    {
      scheme: 'file',
      language: 'verilog'
    },
    {
      scheme: 'file',
      language: 'systemverilog'
    }
  ];



	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
