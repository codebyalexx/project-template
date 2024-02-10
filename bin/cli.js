#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute command: ${command}:`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[process.argv.length - 1];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/codebyalexx/project-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && pnpm install`;

console.log(`Cloning repository in ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const hasInstalledDeps = runCommand(installDepsCommand);
if (!hasInstalledDeps) process.exit(-1);

console.log(
  "Congratulations! You are ready to start developing using this template. Run the following command to start:"
);
console.log(`cd ${repoName} && pnpm dev`);
