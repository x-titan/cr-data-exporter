import * as dotenv from "dotenv"
import type { EnvironmentType, ProjectEnvironment } from "./types"

const baseConfig: dotenv.DotenvConfigOptions = {
  override: true,
  debug: false,
  quiet: true,
  encoding: "utf-8",
}

const baseEnv = dotenv.config({ ...baseConfig, path: ".env" }).parsed ?? {}

const currentEnv = (
  baseEnv.ENV ??
  baseEnv.NODE_ENV ??
  baseEnv.DENO_ENV ??
  baseEnv.BUN_ENV ??
  "development"
).toLowerCase()

const specificEnv = dotenv.config({
  ...baseConfig,
  path: `.env.${currentEnv}`,
}).parsed ?? {}

export const environment: ProjectEnvironment = {
  isDevelopment: currentEnv === "development",
  isTest: currentEnv === "test",
  isProduction: currentEnv === "production",
  debug: currentEnv === "development" || currentEnv === "test",
  ...baseEnv,
  ...specificEnv,
  ENV: currentEnv as EnvironmentType,
} as ProjectEnvironment

export default environment
