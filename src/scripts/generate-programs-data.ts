import * as path from "path";
import { promises as fs } from "fs";
import { Program, ProgramVersion } from "../types";
import { readMarkdown } from "../utils/files";

(async () => {
  let folderParent = path.join(process.cwd(), "/content/programs");
  let output = path.join(process.cwd(), "src/data/programs.json");
  let array: Program[] = [];

  const promise = new Promise(async (resolve, _reject) => {
    console.log("[+] Reading program folders...");
    const folders = await fs.readdir(folderParent);
    console.info(`[+] ${folders.length} directories found`);

    for (let folder of folders) {
      console.log(`[+] Reading files from folder /${folder}`);
      const data = await readAllFilesInAFolder(`${folderParent}/${folder}`);
      array.push(data);
    }

    array.sort((a, b) => (a.id < b.id ? 1 : -1));
    await fs.writeFile(output, JSON.stringify(array));

    resolve(array.length);
  });

  promise
    .then(() => {
      console.log("[+] File created success");
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
})();

async function readAllFilesInAFolder(path: string): Promise<Program> {
  const files = await fs.readdir(path);
  const versions: ProgramVersion[] = [];

  const infoPath = files.find((file) => file === "info.md");
  if (typeof infoPath === "undefined") new Error("Info file not found");

  const versionsPath = files.filter((file) => file !== "info.md");

  const info = await fs.readFile(`${path}/info.md`, "utf8").then(readMarkdown);

  const date = new Date(info.metadata.date);
  const timestamp = date.getTime() / 1000;

  for (let version of versionsPath) {
    const data = await fs
      .readFile(`${path}/${version}`, "utf8")
      .then(readMarkdown);

    versions.push({
      name: data.metadata.name,
      installer: data.metadata.installer,
      os: data.metadata.os,
      size: data.metadata.size,
      language: data.metadata.language,
      content: data.content,
    });
  }

  return {
    id: timestamp,
    name: info.metadata.name,
    date: info.metadata.date,
    icon: info.metadata.icon,
    dev: info.metadata.dev,
    description: info.content,
    versions,
  };
}
