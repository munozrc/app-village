import * as path from "path";
import * as fs from "fs";
import { program } from "../types";

let programsFolder = path.join(process.cwd(), "/content/programs");
let programsData: program[];

function main() {
  fs.readdir(programsFolder, (err, list) => {
    if (err) return console.log(err);

    // Read files info.md for each program
    console.info("[+] Reading files info.md");
    list.forEach((path) => getInfoProgram(path));
  });
}

function getInfoProgram(path: string) {
  fs.readFile(`${programsFolder}/${path}/info.md`, "utf8", (err, content) => {
    if (err) return console.log(err);

    const lines = content.split("\n");
    const metadataIndices: number[] = lines.reduce(getMetadataIndice, []);

    if (metadataIndices.length === 0)
      console.log(`    [-] No found file info.md in ${path}`);
    else console.log(`    [+] ${path} is OK!`);
  });
}

function getMetadataIndice(acc: number[], elem: string, index: number) {
  if (/^---/.test(elem)) {
    acc.push(index);
  }
  return acc;
}

// init script
main();
