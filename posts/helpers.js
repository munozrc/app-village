import { promises as fs } from "node:fs"

import { readMarkdown } from "../utils/markdown"

export async function readAllPost (folderParent) {
  const posts = []

  console.log("[+] Reading Posts folders...")
  const folders = await fs.readdir(folderParent)
  console.info(`[+] ${folders.length.toString()} directories found`)

  try {
    for (const folder of folders) {
      console.log(`[+] Reading files from folder /${folder}`)
      const data = await readPostContent(`${folderParent}/${folder}`, folder)
      posts.push(data)
    }
  } catch (error) {
    console.log("Error: " + error)
    return []
  }

  // Sort files for date and write in file of output
  posts.sort((a, b) => (a.id < b.id ? 1 : -1))
  console.log("[+] File created success")
  return posts
}

export async function readPostContent (path, slug) {
  return fs.readFile(`${path}/index.md`, "utf8")
    .then(file => {
      const { metadata, content } = readMarkdown(file)
      const { title, heroImage, description, authorDisplayName: displayName, authorPhotoURL: photoURL, authorLink: link } = metadata

      const date = new Date(metadata.date)
      const timestamp = date.getTime() / 1000
      const author = { displayName, photoURL, link }

      return {
        id: timestamp,
        date: metadata.date,
        slug,
        title,
        heroImage,
        content,
        author,
        description
      }
    })
    .catch(() => { throw Error("index.md file not found") })
}
