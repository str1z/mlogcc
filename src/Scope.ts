import { StoreValue } from "./values";
import { AddressResolver } from "./instructions";
import { IFunctionValue, IInstruction, IScope, IValue } from "./types";

export class Scope implements IScope {
	parent: IScope;
	name: string;
	data: { [k: string]: IValue };
	stacked: boolean = false;
	ntemp: number = 0;
	inst: IInstruction[];
	break: AddressResolver;
	continue: AddressResolver;
	function: IFunctionValue;
	constructor(
		values: { [k: string]: IValue },
		parent: IScope = null,
		stacked = false,
		ntemp = 0,
		name = "",
		inst = []
	) {
		this.data = values;
		this.parent = parent;
		this.stacked = stacked;
		this.ntemp = ntemp;
		this.name = name;
		this.inst = inst;
	}
	copy(): IScope {
		const scope = new Scope({...this.data}, this.parent, this.stacked, this.ntemp, this.name, this.inst)
		scope.break = this.break;
		scope.continue = this.continue;
		scope.function = this.function;
		return scope
	}
	createScope(): IScope {
		const scope = this.copy()
		scope.data = {}
		scope.parent = this
		return scope;
	}
	createFunction(name: string, stacked?: boolean): IScope {
		return new Scope({}, this, stacked ?? this.stacked, 0, name, this.inst);
	}
	has(name: string): boolean {
		if (name in this.data) return true;
		if (this.parent) return this.parent.has(name);
		return false;
	}
	get(name: string): IValue {
		const value = this.data[name];
		if (value) return value;
		if (this.parent) return this.parent.get(name);
		throw Error(`${name} is not declared.`);
	}
	set(name: string, value: IValue): IValue {
		if (name in this.data) throw Error(`${name} is already declared.`);
		return this.hardSet(name, value)
	}
	hardSet(name: string, value: IValue): IValue {
		this.data[name] = value;
		return value;
	}
	make(name: string, storeName: string): IValue {
		return this.set(name, this.stacked ? null : new StoreValue(this, storeName));
	}
}
