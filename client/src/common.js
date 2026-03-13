export function camelCaseToTitle(str) {
    return wordsToTitleCase(
        camelCaseToWords(str)
    );
}

export function camelCaseToWords(str) {
    return str.replace(
        /^ +| +$/g,
        ''
    ).replace(
        /\B[A-Z]/g,
        text => ` ${text.toLowerCase()}`
    );
}

export function wordsToTitleCase(str) {
    return str.replace(
        /\b\w/g, 
        text => `${text.toUpperCase()}`
    );
}
