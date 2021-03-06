export * as es from "estree";
import { Compiler } from "./Compiler";
import { AddressResolver } from "./instructions";
import { LeftRightOperator, UnaryOperator, UpdateOperator } from "./operators";
export interface IInstruction {
	hidden: boolean;
	resolve(i: number): void;
}

export type THandler = (
	compiler: Compiler,
	scope: IScope,
	node: any,
	arg: any
) => TValueInstructions;

export interface IScope {
	parent: IScope;
	data: {};
	name: string;
	inst: IInstruction[];
	break: AddressResolver;
	continue: AddressResolver;
	function: IFunctionValue;
	ntemp: number;
	createScope(): IScope;
	createFunction(name: string, stacked?: boolean): IScope;
	has(name: string): boolean;
	get(name: string): IValue;
	set(name: string, value: IValue): IValue;
	hardSet(name: string, value: IValue): IValue;
	make(name: string, storeName: string): IValue;
	copy(): IScope;
}

export type IValue = { [k in UnaryOperator]?: (scope: IScope) => TValueInstructions } &
	{ [k in UpdateOperator]?: (scope: IScope, prefix: boolean) => TValueInstructions } &
	{ [k in LeftRightOperator]?: (scope: IScope, value: IValue) => TValueInstructions } & {
		scope: IScope;
		constant: boolean;
		macro: boolean;
		eval(scope: IScope): TValueInstructions;
		call(scope: IScope, args: IValue[]): TValueInstructions;
		get(scope: IScope, name: IValue): TValueInstructions;
	};

export type TLiteral = string | number;
export interface IBindableValue extends IValue {
	data: TLiteral;
}

export interface IFunctionValue extends IValue {
	return(scope: IScope, argument: IValue): TValueInstructions;
}

export type TValueInstructions = [IValue, IInstruction[]];
