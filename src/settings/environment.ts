import { configDotenv } from "dotenv"
import type { EnvironmentType } from "./types"

export const environment = {} as Record<string, string | undefined>

const options = {
  quiet: true,
  encoding: "utf8" as const,
}

configDotenv({
  ...options,
  path: ".env",
  processEnv: environment,
}).parsed ?? {}

export const env = (
  environment.ENV ||
  environment.NODE_ENV ||
  environment.DENO_ENV ||
  environment.BUN_ENV ||
  environment.VITE_ENV ||
  "development"
).toLowerCase() as EnvironmentType

const envPaths = [
  ".env.local",
  ".env." + env,
  ".env." + env + ".local",
]

for (const path of envPaths) {
  configDotenv({
    ...options,
    path,
    override: true,
    processEnv: environment,
  })
}

//@ts-ignore ts(7006)
Object.assign(environment, process.env)

export default environment
