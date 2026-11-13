export function formatPlayerTag(inputTag: string): string {
  return "#" + inputTag.toUpperCase().replace(/[^A-Z0-9]/g, "")
}
