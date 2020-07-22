/*
 * init script after git clone
 */
const { rmdirSync, readFileSync, writeFileSync, unlinkSync } = require('fs')
const { resolve } = require('path')
const { spawnSync } = require('child_process')

// remove `.git` directory
rmdirSync(resolve(__dirname, '.git'))

// remove lock file from .gitignore
const ignoreFile = resolve(__dirname, '.gitignore')
const fileContent = readFileSync(ignoreFile, 'utf8')
const newContent = fileContent
  .split('\n')
  .filter(line => !/(yarn\.lock|package-lock\.json)/.test(line))
  .join('\n')
writeFileSync(ignoreFile, newContent)

// run git init
spawnSync('git', ['init'], { stdio: 'inherit', cwd: __dirname })

// remove the script itself
unlinkSync(__filename)

// finish
console.log(`Please run the following command:
1. cd clair-template-dashboard
2. yarn 或 npm install
`)
