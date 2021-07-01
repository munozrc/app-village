import * as path from "path";
import * as fs from "fs";
import { program } from "../types";

let programsFolder = path.join(process.cwd(), "/content/programs");
let programsOutput = path.join(process.cwd(), "src/data/programs.json");
let programsData: program[] = [];

function main() {
  fs.readdir(programsFolder, (err, list) => {
    if (err) return console.log(err);

    // Read files info.md for each program
    console.info("[+] Reading files info.md");
    list.forEach((path) => getInfoProgram(path));
  });

  // Temporal print
  console.log({ programsData });
}

function getInfoProgram(path: string) {
  fs.readFile(`${programsFolder}/${path}/info.md`, "utf8", (err, content) => {
    if (err) return console.log(err);

    const lines = content.split("\n");
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
  });
}

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

// init script
main();
