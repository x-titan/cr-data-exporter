import * as fs from "fs/promises"
import * as path from "path"
import * as os from "os"

export interface IConfig {
  apiToken: string
  playerTag: string
  normalizeCardLevels: boolean
}

const CONFIG_PATH = path.join(os.homedir(), ".clash-royale-config.json")

export async function loadConfig(): Promise<IConfig | null> {
  try {
    return JSON.parse(await fs.readFile(CONFIG_PATH, "utf8"))
  } catch {
    return null
  }
}

export async function saveConfig(config: IConfig): Promise<void> {
  await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2))
}
