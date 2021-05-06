import * as es from "estree"
import { IValue } from "."

export enum EOperation {
	Equal = "equal",
	StrictEqual = "strictEqual",
	NotEqual = "notEqual",
	LessThan = "lessThan",
	GreaterThan = "greaterThan",
	LessThanEqual = "lessThanEq",
	GreaterThanEqual = "greaterThanEq",
	Add = "add",
	Subtract = "sub",
	Multiply = "mul",
	Divide = "div",
	Modulus = "mod",
	Pow = "pow",
	LogicalAnd = "land",
	BitwiseOr = "or",
	BitwiseAnd = "and",
	BitwiseXor = "xor",
	BitwiseShiftRight = "shr",
	BitwiseShiftLeft = "shl",
	LogicalNot = "not",
	BitwiseNot = "flip",
}

export const BinaryOperatorMap : {[key in es.BinaryOperator]: keyof IValue} = {
    "!=": "notEqual",
    "!==": "strictNotEqual",
    "%": "remainder",
    "&": "bitwiseAnd",
    "*": "multiply",
    "**": "power",
    "+": "add",
    "-": "subtract",
    "/": "divide",
    "<": "lessThan",
    "<<": "bitwiseLeftShift",
    "<=": "lessThanOrEqual",
    "==": "equal",
    "===": "strictEqual",
    ">": "greaterThan",
    ">=": "greaterThanOrEqual",
    ">>": "bitwiseRightShift",
    ">>>": "bitwiseUnsignedRightShift",
    "^": "bitwiseOr",
    "in": "inOperation",
    "instanceof": "instanceofOperation",
    "|": "bitwiseOr"
}

export const LogicalOperatorMap : {[key in es.LogicalOperator]: keyof IValue} = {
    "&&": "logicalAnd",
    "??": "logicalNullish",
    "||": "logicalOr"
}

export const AssignmentOperatorMap : {[key in es.AssignmentOperator]: keyof IValue} = {
    "=": "tryAssign",
    "%=": "remainderAssign",
    "&=": "bitwiseAndAssign",
    "*=": "multiplyAssign",
    "**=": "powerAssign",
    "+=": "addAssign",
    "-=": "subtractAssign",
    "/=": "divideAssign",
    "<<=": "bitwiseLeftShiftAssign",
    ">>=": "bitwiseRightShiftAssign",
    ">>>=": "bitwiseUnsignedRightShiftAssign",
    "^=": "bitwiseOrAssign",
    "|=": "bitwiseOrAssign"
}

export const UpdateOperatorMap: {[key in es.UpdateOperator]: keyof IValue} = {
    "++": "increment",
    "--": "decrement"
}

export const UnaryOperatorMap: {[key in es.UnaryOperator]: keyof IValue} = {
    "!": "logicalNot",
    "+": "unaryPlus",
    "-": "unaryNegate",
    "delete": "deleteOperation",
    "typeof": "typeofOperation",
    "void": "voidOperation",
    "~": "bitwiseNot"
}
