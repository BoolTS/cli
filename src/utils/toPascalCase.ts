export const toPascalCase = (name: string) =>
    name.replace(/(^\w|-\w)/g, (s) => s.replace("-", "").toUpperCase());

export default toPascalCase;
