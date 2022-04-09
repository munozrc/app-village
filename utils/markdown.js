function getMetadataIndices (acc, elem, index) {
  if (/^---/.test(elem)) acc.push(index)
  return acc
}

function parseMetadata (lines, metadataIndices) {
  if (metadataIndices.length < 0) return {}

  const metadata = {}
  const result = lines.slice(metadataIndices[0] + 1, metadataIndices[1])

  for (const line of result) {
    const key = line.split(": ")[0]
    const value = line.split(": ")[1].replace("\r", "")
    metadata[key] = value
  }

  return metadata
}

function parseContent (lines, metadataIndices) {
  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length)
  }
  return lines.join("\n")
}

function readMarkdown (data) {
  const lines = data.split("\n")

  const metadataIndices = lines.reduce(getMetadataIndices, [])
  const metadata = parseMetadata(lines, metadataIndices)

  const content = parseContent(lines, metadataIndices)

  return { metadata, content }
}

export { readMarkdown }
