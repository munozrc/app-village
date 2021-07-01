import * as path from "path";
import * as fs from "fs";
import { program } from "../types";

let programsFolder = path.join(process.cwd(), "/content/programs");
let programsData: program[];

function main() {
  fs.readdir(programsFolder, (err, list) => {
    if (err) return console.log(err);
    list.forEach((path) => getInfoProgram(path));
  });
}

function getInfoProgram(path: string) {
  fs.readFile(`${programsFolder}/${path}/info.md`, "utf8", (err, _content) => {
    if (err) return console.log("[-] Failed to read");
    console.log("[+] Read file");
  });
}

// init script
main();
