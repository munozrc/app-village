#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const cwd = process.cwd()
const contentFolder = join(cwd, 'content/desktop')
const outputFolder = join(cwd, 'src/data.json') 

const appsFolders = readdirSync(contentFolder)
const promisesReadFiles = appsFolders.map(async (app) => {
  const info = readFileSync(`${contentFolder}/${app}`, 'utf8')
  return { ...JSON.parse(info) }
})

Promise.all(promisesReadFiles)
  .then((apps) => {
    apps.sort((a, b) => (a.id < b.id ? 1 : -1))
    writeFileSync(outputFolder, JSON.stringify({ desktop: apps }))
  })
