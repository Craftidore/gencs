const maxSizeRatio = 100;
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
		maxSizeRatio >= sizeRatio >= minSizeRatio 
        // FIX: '1 < x < 100' is math notation; doesn't work in code;
        //      evaluates to "(1 < x) < 100".
        //      If 1 < x, this becomes "true < 100" -> "1 < 100", which is true
        //      If not 1 < x, this becomes "false < 100" -> "0 < 100", which is true
        //      So this always returns true, even for invalid values
	) {
		return true;
	} else {
		return false;
	}
}

export function validateTextDecoration(decoration) {
	if (
		typeof decoration === "string" &&
        // FIX: If fontSize is valid regardless of case, (see validateFontSize line 2)
        //      these should be case-insensitive too...
		(decoration === "bold" ||
			decoration === "italic" ||
			decoration === "underline" ||
			decoration === "none")
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
                return Boolean(fontSize.match(/^\d+px$/)); // NOTE: I (Craftidore) gave the wrong syntax for this on our call; sorry.
                                                           //       You program in enough languages and they get muddled...
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

    // NOTE: This could be shortened to 
    //       `return isDirectionValid && isSizeRatioValid && isTextDecorationValid &&...`
    //       which would be cleaner in my (Craftidore's) opinion
	if (
		!isDirectionValid ||
		!isSizeRatioValid ||
		!isTextDecorationValid ||
		!isFontSizeValid
	) {
		return false;
	}
	return true;
}

