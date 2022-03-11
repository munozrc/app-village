import { promises as fs } from 'node:fs'
import { join } from 'node:path'

import { Post } from '../post/types'
import { readMarkdown } from '../helpers';

(async () => {
  const folderParent = join(process.cwd(), '/content/posts')
  const output = join(process.cwd(), 'src/post/data.json')
  const array: Post[] = []

  console.log('[+] Reading Posts folders...')
  const folders = await fs.readdir(folderParent)
  console.info(`[+] ${String(folders.length)} directories found`)

  for (const folder of folders) {
    console.log(`[+] Reading files from folder /${String(folder)}`)
    const data = await readAllFilesInAFolder(`${String(folderParent)}/${String(folder)}`)
    array.push(data)
  }

  // Sort files for date and write in file of output
  array.sort((a, b) => (a.id < b.id ? 1 : -1))
  await fs.writeFile(output, JSON.stringify(array)).catch(() => new Error('No posts found'))

  console.log('[+] File created success')
})().catch((error) => {
  console.log(error.message)
  process.exit(1)
})

async function readAllFilesInAFolder (path: string): Promise<Post> {
  return fs.readFile(`${path}/index.md`, 'utf8')
    .then(file => {
      const { metadata, content } = readMarkdown(file)
      const { title, heroImage, description, authorDisplayName: displayName, authorPhotoURL: photoURL, authorLink: link } = metadata

      const date = new Date(metadata.date)
      const timestamp = date.getTime() / 1000
      const author = { displayName, photoURL, link }
      const pathLink = path.split('/')[1]

      return {
        id: timestamp,
        path: pathLink,
        date: metadata.date,
        title,
        heroImage,
        content,
        author,
        description
      }
    })
    .catch(() => { throw Error('index.md file not found') })
}
