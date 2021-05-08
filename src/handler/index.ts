import { Compiler, IScope } from "../core";
import { TResLines } from "../line";

export type THandler = (compiler: Compiler, scope: IScope, node: any, arg: any) => TResLines
export * from "./Program"
export * from "./VariableDeclaration"
export * from "./Literal"
export * from "./OperationExpressions"
export * from "./Identifier"
export * from "./Statements"
export * from "./IfStatement"
export * from "./WhileStatement"
export * from "./ForStatement"