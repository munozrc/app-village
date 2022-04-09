import { promises as fs } from "node:fs"

import { readMarkdown } from "../utils/markdown"

export async function readPrograms (folderParent) {
  const programs = []

  console.log("[+] Reading program folders...")
  const folders = await fs.readdir(folderParent)
  console.info(`[+] ${String(folders.length)} directories found`)

  try {
    for (const folder of folders) {
      console.log(`[+] Reading files from folder /${folder}`)
      const data = await readAllFilesInAFolder(`${folderParent}/${folder}`, folder)
      programs.push(data)
    }
  } catch (error) {
    console.log("Error: " + error)
    return []
  }

  // Sort files for date and write in file of output
  programs.sort((a, b) => (a.id < b.id ? 1 : -1))
  console.log("[+] File created success")
  return programs
}

async function readAllFilesInAFolder (path, slug) {
  const files = await fs.readdir(path)
  const versions = []

  const infoPath = files.find((file) => file === "info.md")
  if (typeof infoPath === "undefined") Error("Info file not found")

  const versionsPath = files.filter((file) => file !== "info.md")

  const info = await fs.readFile(`${path}/info.md`, "utf8").then(readMarkdown)

  const date = new Date(info.metadata.date)
  const timestamp = date.getTime() / 1000

  for (const version of versionsPath) {
    const data = await fs
      .readFile(`${path}/${String(version)}`, "utf8")
      .then(readMarkdown)

    versions.push({
      name: data.metadata.name,
      installer: data.metadata.installer,
      os: data.metadata.os,
      size: data.metadata.size,
      language: data.metadata.language,
      content: data.content
    })
  }

  return {
    id: timestamp,
    slug,
    name: info.metadata.name,
    date: info.metadata.date,
    icon: info.metadata.icon,
    dev: info.metadata.dev,
    description: info.content,
    versions
  }
}
