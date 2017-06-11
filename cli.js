#!/usr/bin/env node
"use strict";

const prog = require("caporal");
const pkg = require("./package.json");
const trending = require(".");

prog
  .version(pkg.version)
  .description("GitHub Trending Repositories")
  .option("-l, --language [language]", "Programing Language")
  .action((args, options, logger) => {
    const language = options.language || "";
    const repos = trending(language);
    logger.info(JSON.stringify(repos, null, 2));
  });

prog.parse(process.argv);
