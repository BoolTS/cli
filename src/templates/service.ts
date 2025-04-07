import { plural } from "pluralize";
import { toPascalCase } from "../utils";

export const service = ({ name }: { name: string }) => {
    const convertedName = plural(toPascalCase(name));

    return `import { Injectable } from "@bool-ts/core";

@Injectable()
export class ${convertedName}Service {}`;
};

export default service;
