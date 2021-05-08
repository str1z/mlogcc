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

export type TLiteral = string | number;