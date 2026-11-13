export default async function EXIT(exitCode: number | void) {
  const code = exitCode ?? 0

  if (code !== 0) {
    if (typeof process !== "undefined" && process.stdin && process.stdin.isTTY) {
      process.stdout.write("\nPress any key to exit...\n")
      process.stdin.setRawMode(true)
      process.stdin.resume()

      await new Promise<void>((resolve) => {
        process.stdin.once("data", () => {
          process.stdin.setRawMode(false)
          process.stdin.pause()
          resolve()
        })
      })
    }
  }

  process.exit(code)
}
