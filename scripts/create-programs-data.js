const path = require("path");
const fs = require("fs");

const contentFolder = path.join(process.cwd(), "/content/programs");

let programs_data = [];

(() => {
  fs.readdir(contentFolder, (error, files) => {
    // Catch error
    if (error) {
      return console.log("❌ Failed to list contents of directory: ", error);
    }

    files.forEach((file, index) => {
      fs.readFile(`${contentFolder}/${file}`, "utf8", (error, contents) => {
        let obj = {};

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

        let post = {
          id: index,
          title: metadata.title ? metadata.title : "No title given",
          category: metadata.category ? metadata.category : "none",
          download: metadata.download ? metadata.download : "/",
          content: content ? content : "No content given",
        };

        programs_data.push(post);

        if (index === files.length - 1) {
          let data = JSON.stringify(programs_data);
          fs.writeFileSync(
            path.join(process.cwd(), "src/data/programs.json"),
            data
          );
          console.log(`✅ add ${post.title}`);
        }
      });
    });
  });
})();
