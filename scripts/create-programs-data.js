const path = require("path");
const fs = require("fs");

const contentFolder = path.join(process.cwd(), "/content/programs");

let programs_data = [];

(async () => {
  fs.readdir(contentFolder, (error, files) => {
    // Catch error
    if (error) {
      return console.log("❌ Failed to list contents of directory: ", error);
    }

    files.forEach((file, index) => {
      fs.readFile(`${contentFolder}/${file}`, "utf8", (error, contents) => {
        let obj = {};

        // Catch error
        if (error) {
          return console.log("❌ Failed to read file: ", error);
        }

        const getMetadataIndices = (acc, elem, index) => {
          if (/^---/.test(elem)) {
            acc.push(index);
          }
          return acc;
        };

        const parseMetadata = ({ lines, metadataIndices }) => {
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

        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };

        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        const date = new Date(metadata.date);
        const timestamp = date.getTime() / 1000;

        let post = {
          id: timestamp,
          date: metadata.date ? metadata.date : "No date given",
          title: metadata.title ? metadata.title : "No title given",
          path: file.replace(".md", ""),
          category: metadata.category ? metadata.category : "none",
          download: metadata.download ? metadata.download : "/",
          icon: metadata.icon ? metadata.icon : undefined,
          content: content ? content : "No content given",
        };

        // Add data to array
        programs_data.push(post);
        console.log(`👌 readed --> ${post.title}`);

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
