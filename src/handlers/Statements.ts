import {
	BreakInstruction,
	ContinueInstruction
} from "../instructions";
import { es, THandler } from "../types";
import { LiteralValue } from "../values";

export const ExpressionStatement: THandler = (c, scope, node: es.ExpressionStatement) => {
	return c.handle(scope, node.expression);
};

export const BreakStatement: THandler = (_, scope) => {
	const addr = new LiteralValue(scope, null);
	scope.break.bind(addr);
	return [null, [new BreakInstruction(addr)]];
};

export const ContinueStatement: THandler = (_, scope) => {
	const addr = new LiteralValue(scope, null);
	scope.continue.bind(addr);
	return [null, [new ContinueInstruction(addr)]];
};

export const ReturnStatement: THandler = (c, scope, node: es.ReturnStatement) => {
	const [arg, argInst] = node.argument ? c.handle(scope, node.argument) : [null, []];
	const [ret, retInst] = scope.function.return(scope, arg);
	return [ret, [...argInst, ...retInst]];
};
