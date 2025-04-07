export const toCamelCase = (str: string): string =>
    str
        .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
        .replace(/^(.)/, (match) => match.toLowerCase());

export default toCamelCase;
