import * as path from 'path'
import { promises as fs } from 'fs'
import { Program, ProgramVersion } from '../types'
import { readMarkdown } from '../utils/files';

(async () => {
  const folderParent = path.join(process.cwd(), '/content/programs')
  const output = path.join(process.cwd(), 'src/data/programs.json')
  const array: Program[] = []

  console.log('[+] Reading program folders...')
  const folders = await fs.readdir(folderParent)
  console.info(`[+] ${String(folders.length)} directories found`)

  for (const folder of folders) {
    console.log(`[+] Reading files from folder /${String(folder)}`)
    const data = await readAllFilesInAFolder(`${String(folderParent)}/${String(folder)}`)
    array.push(data)
  }

  // Sort files for date and write in file of output
  array.sort((a, b) => (a.id < b.id ? 1 : -1))
  await fs.writeFile(output, JSON.stringify(array)).catch(() => new Error('No programs found'))

  console.log('[+] File created success')
})().catch((error) => {
  console.log(error.message)
  process.exit(1)
})

async function readAllFilesInAFolder (path: string): Promise<Program> {
  const files = await fs.readdir(path)
  const versions: ProgramVersion[] = []

  const infoPath = files.find((file) => file === 'info.md')
  if (typeof infoPath === 'undefined') Error('Info file not found')

  const versionsPath = files.filter((file) => file !== 'info.md')

  const info = await fs.readFile(`${path}/info.md`, 'utf8').then(readMarkdown)

  const date = new Date(info.metadata.date)
  const timestamp = date.getTime() / 1000

  for (const version of versionsPath) {
    const data = await fs
      .readFile(`${path}/${String(version)}`, 'utf8')
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
    name: info.metadata.name,
    date: info.metadata.date,
    icon: info.metadata.icon,
    dev: info.metadata.dev,
    description: info.content,
    versions
  }
}
