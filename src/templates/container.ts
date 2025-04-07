import { toPascalCase } from "../utils";

export const container = ({ name }: { name: string }) => {
    const convertedName = toPascalCase(name);

    return `import { Container } from "@bool-ts/core";

@Container({
    modules: [],
    dependencies: [],
    middlewares: [],
    guards: []
})
export class ${convertedName}Container {}`;
};

export default container;
