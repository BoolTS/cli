export const toSnakeCase = (str: string): string =>
    str
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .replace(/[\s\-]+/g, "_")
        .toLowerCase();

export default toSnakeCase;
