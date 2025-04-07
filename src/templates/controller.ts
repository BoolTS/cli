import { plural } from "pluralize";
import { toKebabCase, toPascalCase } from "../utils";

export const controller = ({ name }: { name: string }) => {
    const convertedPath = plural(toKebabCase(name));
    const convertedName = plural(toPascalCase(name));

    return `import { Controller, Get, Post, Put, Patch, Delete } from "@bool-ts/core";

@Controller("${convertedPath}")
export class ${convertedName}Controller {
    @Get(":id")
    findOne(@Param("id") id: string) {}

    @Post()
    create() {}

    @Put(":id")
    update(@Param("id") id: string) {}

    @Patch(":id")
    partialUpdate(@Param("id") id: string) {}

    @Delete(":id")
    delete(@Param("id") id: string) {}
}`;
};

export default controller;
