import * as path from "path";
import { promises as fs } from "fs";
import { program, versionProgram } from "../types";

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

function parseContent(lines: string[], metadataIndices: number[]) {
  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length);
  }
  return lines.join("\n");
}

function readFileInfo(dirPath: string): Promise<program> {
  return new Promise((resolve, reject) => {
    fs.readFile(`${dirPath}/info.md`, "utf8")
      .then((data) => {
        const lines = data.split("\n");
        const metadataIndices: number[] = lines.reduce(getMetadataIndice, []);

        if (metadataIndices.length === 0)
          reject(new Error(`    [-] Syntax error info.md`));

        // get values metadata
        const metadata = parseMetadata(lines, metadataIndices);
        const date = new Date(metadata.date);
        const timestamp = date.getTime() / 1000;

        // Resolve with data
        console.log("    [+] info.md read successfully");
        resolve({
          id: timestamp,
          name: metadata.name,
          path: metadata.path,
          date: metadata.date,
        });
      })
      .catch(() => reject(new Error(`    [-] Failed to read info.md`)));
  });
}

function readFileVersion(filePath: string): Promise<versionProgram> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8")
      .then((data) => {
        const lines = data.split("\n");
        const metadataIndices: number[] = lines.reduce(getMetadataIndice, []);

        if (metadataIndices.length === 0)
          reject(new Error(`    [-] Syntax error ${filePath}`));

        // get values metadata
        const metadata = parseMetadata(lines, metadataIndices);
        const content = parseContent(lines, metadataIndices);

        // Resolve with data
        console.log(`    [+] read version ${metadata.name}`);
        resolve({
          id: parseInt(metadata.id),
          name: metadata.name,
          installer: metadata.installer,
          content: content,
        });
      })
      .catch(() => reject(new Error(`    [-] Failed to read ${filePath}`)));
  });
}

function readDirByProgram(dirPath: string) {
  return new Promise((resolve, reject) => {
    // Print message read files
    console.log(`[+] Reading Files folder ${dirPath}`);

    let fileVersions: string[] = [];

    fs.readdir(dirPath)
      .then((files) => {
        // Check info files is exist
        if (!files.some((file) => file === "info.md"))
          reject(new Error(`    [-] Not found info.md`));
        // Create arrays files with content versions
        fileVersions = files
          .filter((file) => file !== "info.md")
          .filter((file) => path.extname(file).toLowerCase() === ".md");
        // read info file
        return readFileInfo(dirPath);
      })
      .then((programInfo: program) => {
        Promise.all(
          fileVersions.map((path) => readFileVersion(`${dirPath}/${path}`))
        ).then((filesBuffers: versionProgram[]) => {
          programsData.push({
            ...programInfo,
            versions: filesBuffers,
          });
          resolve(true);
        });
      });
  });
}

// Main Function Script
(async () => {
  // get folders
  console.log("[+] Reading folders...");

  fs.readdir(programsFolder)
    .then(async (dirs) => {
      console.log(`[+] ${dirs.length} folders found.`);
      for (let i = 0; i < dirs.length; i++) {
        await readDirByProgram(`${programsFolder}/${dirs[i]}`);
      }
    })
    .then(() => fs.writeFile(programsOutput, JSON.stringify(programsData)))
    .then(() => console.log("[+] File created success"))
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
})();
