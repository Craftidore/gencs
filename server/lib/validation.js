const maxSizeRatio = 101;
const minSizeRatio = 1;

function validateDirection(direction) {
	if (
		typeof direction === "string" &&
		(direction === "horizontal" || direction === "vertical")
	) {
		return true;
	} else {
		return false;
	}
}

function validateSizeRatio(sizeRatio) {
	if (
		typeof sizeRatio === "number" &&
		maxSizeRatio >= sizeRatio &&
		sizeRatio >= minSizeRatio
	) {
		return true;
	} else {
		return false;
	}
}

function validateTextDecoration(decoration) {
	if (
		typeof decoration === "string" &&
		(decoration.toLowerCase() === "bold" ||
			decoration.toLowerCase() === "italic" ||
			decoration.toLowerCase() === "underline" ||
			decoration.toLowerCase() === "none")
	) {
		return true;
	} else {
		return false;
	}
}

function validateFontSize(fontSize) {
	if (typeof fontSize === "string") {
		switch (fontSize.toLowerCase()) {
			case "big":
			case "medium":
			case "small":
				return true;
			default:
				return Boolean(fontSize.match(/^\d+px$/));
		}
	} else {
		return false;
	}
}

//added check for default value for TextInput

function validateTextDefaultValue(defaultValue) {
	if (defaultValue === null) {
		defaultValue = "";
	}
	if (typeof defaultValue === "string") {
		return true;
	} else {
		return false;
	}
}

//check for default value for NumberInput

function validateNumberDefaultValue(defaultValue) {
	if (typeof defaultValue === "number") {
		return true;
	} else {
		return false;
	}
}

function validateAllowFloat(allowFloat) {
	if (typeof allowFloat === "boolean") {
		return true;
	} else {
		return false;
	}
}

// methods to validate each object type //

export function validateContainer(container) {
	if (container.type !== "container") {
		return false;
	}

	const validDirection = validateDirection(container.direction);
	const validSizeRatio = validateSizeRatio(container.sizeRatio);
	const validTextDecoration = validateTextDecoration(container.decoration);
	const validFontSize = validateFontSize(container.fontSize);

	return (
		validDirection && validSizeRatio && validTextDecoration && validFontSize
	);
}

export function validateLabel(label) {
	if (label.type !== "label") {
		return false;
	}

	const validTextDecoration = validateTextDecoration(label.decoration);
	const validFontSize = validateFontSize(label.fontSize);
	const validSizeRatio = validateSizeRatio(label.sizeRatio);

	return validTextDecoration && validFontSize && validSizeRatio;
}

export function validateTextInput(textInput) {
	if (textInput.type !== "text-input") {
		return false;
	}

	const validTextDefaultValue = validateTextDefaultValue(
		textInput.defaultValue
	);
	const validFontSize = validateFontSize(textInput.fontSize);
	const validSizeRatio = validateSizeRatio(textInput.sizeRatio);

	return validTextDefaultValue && validFontSize && validSizeRatio;
}

export function validateTextboxInput(textBoxInput) {
	if (textBoxInput.type !== "textbox-input") {
		return false;
	}

	const validTextDefaultValue = validateTextDefaultValue(
		textBoxInput.defaultValue
	);
	const validFontSize = validateFontSize(textBoxInput.fontSize);
	const validSizeRatio = validateSizeRatio(textBoxInput.sizeRatio);

	return validTextDefaultValue && validFontSize && validSizeRatio;
}

export function validateNumberInput(numberInput) {
	if (numberInput.type !== "number-input") {
		return false;
	}

	const validNumberDefaultValue = validateNumberDefaultValue(
		numberInput.defaultValue
	);
	const validFontSize = validateFontSize(numberInput.fontSize);

	return validNumberDefaultValue && validFontSize;
}

export const _testing = {
    validateDirection,
    validateSizeRatio,
    validateTextDecoration,
    validateFontSize,
    validateTextDefaultValue,
    validateNumberDefaultValue,
    validateAllowFloat,
};
