import * as path from "path"
import * as fs from "fs"

type program = {
  id: number,
  date: string | null, 
  title: string | null, 
  path: string | null, 
  category: string | null, 
  download: string | null, 
  icon: string | null,
  content: string | null, 
}

const contentFolder = path.join(process.cwd(), "/content/programs");
let programs_data: program[] = [];


(async () => {
  fs.readdir(contentFolder, (error, files) => {
    // Catch error
    if (error) {
      return console.log("❌ Failed to list contents of directory: ", error);
    }

    files.forEach((file, index) => {
      fs.readFile(`${contentFolder}/${file}`, "utf8", (error, contents) => {
        let obj:{[key: string]: string} = {};

        // Catch error
        if (error) {
          return console.log("❌ Failed to read file: ", error);
        }

        const getMetadataIndices = (
          acc: number[],
          elem: string,
          index: number 
        ) => {
          if (/^---/.test(elem)) {
            acc.push(index);
          }
          return acc;
        };

        const parseMetadata = (lines: string[], metadataIndices: number[]) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1].replace("\r", "");
            });
            return obj;
          }
        };

        const parseContent = (lines: string[], metadataIndices: number[]) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };

        const lines = contents.split("\n");
        const metadataIndices: number[] = lines.reduce(getMetadataIndices, []);
        const content = parseContent(lines, metadataIndices);
        const metadata = parseMetadata(lines, metadataIndices);

        if (typeof metadata !== "undefined") {
        
          const date = new Date(metadata.date);
          const timestamp = date.getTime() / 1000;

          let post: program = {
            id: timestamp,
            date: metadata.date ? metadata.date : null,
            title: metadata.title ? metadata.title : null,
            path: file.replace(".md", ""),
            category: metadata.category ? metadata.category : null,
            download: metadata.download ? metadata.download : null,
            icon: metadata.icon ? metadata.icon : null,
            content: content ? content : null,
          };

          // Add data to array
          programs_data.push(post);
          console.log(`👌 readed --> ${post.title}`);
        }

        
        if (index === files.length - 1) {
          const sortedList = programs_data.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFile(
            path.join(process.cwd(), "src/data/programs.json"),
            data,
            (err) => {
              if (err) throw err;
              console.log(`✅ file created successfully`);
            }
          );
        }
      });
    });
  });
})();
