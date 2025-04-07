#!/usr/bin/env bun

import { Command } from "commander";
import { create } from "./commands";

const program = new Command();

program.name("bool").description("CLI for Bool framework").version("1.0.0");

program
    .command("create <type> <name>")
    .description("Create a new module, service, controller, or container")
    .action(create);

program.parse();
