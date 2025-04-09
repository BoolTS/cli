#!/usr/bin/env bun

import { Command } from "commander";
import { version } from "../package.json";
import { create } from "./commands";

const program = new Command();

program.name("bool").description("CLI for Bool framework").version(version);

program
    .command("create <type> <name>")
    .description("Create a new module, service, controller, or container")
    .action(create);

program.parse();
