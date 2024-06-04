const maxSizeRatio = 101;
const minSizeRatio = 1;

export function validateDirection(direction) {
	if (
		typeof direction === "string" &&
		(direction === "horizontal" || direction === "vertical")
	) {
		return true;
	} else {
		return false;
	}
}

export function validateSizeRatio(sizeRatio) {
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

export function validateTextDecoration(decoration) {
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

export function validateFontSize(fontSize) {
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

export function validateContainer(container) {
	if (container.type !== "container") {
		return;
	}

	const isDirectionValid = validateDirection(container.direction);
	const isSizeRatioValid = validateSizeRatio(container.sizeRatio);
	const isTextDecorationValid = validateTextDecoration(container.decoration);
	const isFontSizeValid = validateFontSize(container.fontSize);

	return (
		isDirectionValid &&
		isSizeRatioValid &&
		isTextDecorationValid &&
		isFontSizeValid
	);
}
