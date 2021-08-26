import { Metadata } from "../types";

function getMetadataIndices(acc: number[], elem: string, index: number) {
  if (/^---/.test(elem)) acc.push(index);
  return acc;
}

function parseMetadata(lines: string[], metadataIndices: number[]) {
  if (metadataIndices.length < 0) return {};

  let metadata: Metadata = {};
  let result = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);

  for (let line of result) {
    let key = line.split(": ")[0];
    let value = line.split(": ")[1].replace("\r", "");
    metadata[key] = value;
  }

  return metadata;
}

function parseContent(lines: string[], metadataIndices: number[]) {
  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length);
  }
  return lines.join("\n");
}

function readMarkdown(data: string) {
  const lines = data.split("\n");

  const metadataIndices: number[] = lines.reduce(getMetadataIndices, []);
  const metadata = parseMetadata(lines, metadataIndices);

  const content = parseContent(lines, metadataIndices);

  return { metadata, content };
}

export { readMarkdown };
