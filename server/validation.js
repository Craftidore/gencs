const maxSizeRatio = 100;
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
		maxSizeRatio >= sizeRatio >= minSizeRatio
	) {
		return true;
	} else {
		return false;
	}
}

function validateTextDecoration(decoration) {
	if (
		typeof decoration === "string" &&
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

function validateFontSize(fontSize) {
	if (typeof fontSize === "string") {
		switch (fontSize.toLowerCase()) {
			case "big":
			case "medium":
			case "small":
				return true;
		}
		// return Boolean(/^\d+px$/.match(fontSize))
	} else {
		return false;
	}
}

function validateContainer(container) {
	if (container.type !== "container") {
		return;
	}

	const isDirectionValid = validateDirection(container.direction);
	const isSizeRatioValid = validateSizeRatio(container.sizeRatio);
	const isTextDecorationValid = validateTextDecoration(container.decoration);
	const isFontSizeValid = validateFontSize(container.fontSize);

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

const newContainer = {
	type: "container",
	direction: "horizontal",
	sizeRatio: 42,
	decoration: "none",
	fontSize: "big",
};

console.log(validateContainer(newContainer), "this is new container");
