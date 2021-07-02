import * as path from "path";
import { promises as fs } from "fs";
import { program } from "../types";

let programsFolder = path.join(process.cwd(), "/content/programs");
let programsOutput = path.join(process.cwd(), "src/data/programs.json");
let programsData: program[] = [];

function getMetadataIndice(acc: number[], elem: string, index: number) {
  if (/^---/.test(elem)) {
    acc.push(index);
  }
  return acc;
}

function parseMetadata(lines: string[], metadataIndices: number[]) {
  let metadata: { [key: string]: string } = {};
  if (metadataIndices.length > 0) {
    let result = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
    result.forEach((line) => {
      metadata[line.split(": ")[0]] = line.split(": ")[1].replace("\r", "");
    });
  }
  return metadata;
}

function getInfoProgram(data: string, path: string) {
  const lines = data.split("\n");
  const metadataIndices: number[] = lines.reduce(getMetadataIndice, []);

  if (metadataIndices.length === 0)
    return console.log(`    [-] No found file info.md in ${path}`);

  // get values metadata
  const metadata = parseMetadata(lines, metadataIndices);
  const date = new Date(metadata.date);
  const timestamp = date.getTime() / 1000;

  programsData.push({
    id: timestamp,
    name: metadata.name,
    path: metadata.path,
    date: metadata.date,
  });

  // print message
  console.log(`    [+] ${path} is OK!`);
}

// Main Function Script
(async () => {
  const dirs = await fs.readdir(programsFolder);

  // Read files info.md for each program
  console.info("[+] Reading files info.md");
  Promise.all(
    dirs.map((path) => {
      return fs.readFile(`${programsFolder}/${path}/info.md`, "utf8");
    })
  )
    .then((fileBuffers) => {
      fileBuffers.forEach((data, index) => getInfoProgram(data, dirs[index]));
    })
    .then(() => console.log({ programsData }));
})();
