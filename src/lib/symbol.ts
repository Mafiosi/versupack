// / / / / / / / / / / / / / / / / / / / / / //
// / / / / / /   LIBRARIES   / / / / / / / / //
// / / / / / / / / / / / / / / / / / / / / / //

// LIBRARIES FROM VSCODE API
import {
  SymbolInformation,
  SymbolKind, 
  Location
} from 'vscode';

// / / / / / / / / / / / / / / / / / / / / / / //
// / / / / / / /    MAIN    / / / / / / / / /  //
// / / / / / / / / / / / / / / / / / / / / / / //

/**
 * Creates an Object containing the Symbol Information.
 *
 * @param name The name of the symbol.
 * @param type The name of the symbol.
 * @param containerName The name of the symbol containing the symbol.
 * @param location The location of the symbol.
 */

 export class Symbol extends SymbolInformation {
  
  public type: string;

  constructor(name: string, type: string, containerName: string, Location: Location){
    super(name, mySymbolKind(type), containerName, Location);
    this.type = type;
  }
 }

 // Returns the Symbol Kind Icon to Represent Each Symbol/Defenition
 export function mySymbolKind(name: string): SymbolKind {

  // Option for Undefined Symbols
  if (name === undefined || name === '') {
    console.log("[Warning 001] This is an undefined Symbol");
    return SymbolKind.Variable;
  } 
  // Option for Array Symbols
  else if (name.indexOf('[')) {
    return SymbolKind.Array;
  } 
  // Option for everything Else
  else {
    switch (name) {
      case 'parameter':
      case 'localparam': return SymbolKind.Constant;
      case 'package':
      case 'program':
      case 'import': return SymbolKind.Package;
      case 'begin':
      case 'string': return SymbolKind.String;
      case 'class': return SymbolKind.Class;
      case 'task': return SymbolKind.Method;
      case 'function': return SymbolKind.Function;
      case 'interface': return SymbolKind.Interface;
      case 'assert':
      case 'event': return SymbolKind.Event;
      case 'struct': return SymbolKind.Struct;
      case 'typedef': return SymbolKind.TypeParameter;
      case 'genvar': return SymbolKind.Operator;
      case 'enum': return SymbolKind.Enum;
      case 'modport': return SymbolKind.Null;
      case 'define':
      case 'property': return SymbolKind.Property;
      case 'wire':
      case 'reg': return SymbolKind.Operator;
      case 'bit': return SymbolKind.Operator;
      case 'logic':
      case 'int':
      case 'integer':
      case 'char':
      case 'time':
      case 'float': return SymbolKind.Variable;
      case 'module':
      default:{
        console.log("[Warning 002] This Symbol name ( " + name + " ) is defined but falls ito default");
        return SymbolKind.Field;
      }
    }
  }
}