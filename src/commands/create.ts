import { plural } from "pluralize";
import { container, controller, module, service } from "../templates";
import { toCamelCase } from "../utils";

const pluralizeFor = ["controller", "service"];

const templates = Object.freeze({
    container,
    controller,
    module,
    service
});

const isValidType = (type: string): type is keyof typeof templates => type in templates;

export const create = async (type: string, name: string) => {
    if (!isValidType(type)) {
        console.error(
            `Invalid type: ${type}. Valid types are: ${Object.keys(templates).join(", ")}`
        );
        return;
    }

    const fileName = `${
        !pluralizeFor.includes(type) ? toCamelCase(name) : toCamelCase(plural(name))
    }.${type}.ts`;
    const filePath = `${process.cwd()}/${fileName}`;

    const fileExists = await Bun.file(filePath).exists();

    if (fileExists) {
        console.error(`File already exists: ${filePath}`);
        return;
    }

    const template = templates[type];
    const content = template({ name });

    await Bun.write(filePath, content);

    console.log(`File created: ${filePath}`);
};

export default create;
