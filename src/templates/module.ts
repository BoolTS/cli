import { toPascalCase } from "../utils";

export const module = ({ name }: { name: string }) => {
    const convertedName = toPascalCase(name);

    return `import { Module } from "@bool-ts/core";
    
@Module({
    controllers: [],
    dependencies: [],
    interceptors: [],
    middlewares: [],
    guards: []
})
export class ${convertedName}Module {}`;
};

export default module;
