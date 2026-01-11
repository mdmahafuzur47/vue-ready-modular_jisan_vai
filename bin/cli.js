#!/usr/bin/env node

import { createModule } from "../lib/generator.js";

const args = process.argv.slice(2);

if (args[0] !== "make" || !args[1]) {
  console.log("Usage: vue-modular make <module-name>");
  process.exit(1);
}

createModule(args[1]);
