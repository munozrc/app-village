#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const contentFolder = join(process.cwd() ,"content/desktop")
const outputFolder = join(process.cwd(), 'src/data.json') 
const repo = "https://raw.githubusercontent.com/munozrc/softlink/main/content/desktop"
const isDev = process.argv[2] === '-isDev'

const appsFolders = readdirSync(contentFolder)
const promisesReadFiles = appsFolders.map(async (app) => {
  const info = readFileSync(`${contentFolder}/${app}/index.json`, 'utf8')
  const files = readdirSync(`${contentFolder}/${app}`)
  const icon = files.find((name) => name.includes('icon')) as string
  return {
    icon: isDev ? join(`${contentFolder}/${app}/`, icon) : `${repo}/${icon}`,
    ...JSON.parse(info)
  }
})

Promise.all(promisesReadFiles)
  .then((apps) => {
    apps.sort((a, b) => (a.id < b.id ? 1 : -1))
    writeFileSync(outputFolder, JSON.stringify({ desktop: apps }))
  })
