#!/usr/bin/env node
"use strict";

const prog = require("caporal");
const pkg = require("./package.json");
const ora = require("ora");
const trending = require(".");

prog
  .version(pkg.version)
  .description("GitHub Trending Repositories")
  .option("-l, --language [language]", "Programing Language")
  .action((args, options, logger) => {
    const language = options.language || "";
    const spinner = ora(`Get Trending Repository ${language}`);
    spinner.start();
    const repos = trending(language);
    spinner.stop();
    logger.info(JSON.stringify(repos, null, 2));
  });

prog.parse(process.argv);
