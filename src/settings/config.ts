import { env, environment } from "./environment"
import type { IConfig } from "./types"

const isProduction = env === "production"
const isDevelopment = env === "development"
const isTest = env === "test"
const debug = environment.debug !== undefined
  ? (environment.debug.toLowerCase() === "true")
  : !isProduction;

export const config: IConfig = Object.freeze({
  RAW: Object.freeze({ ...environment }),
  env,

  isDevelopment,
  isTest,
  isProduction,
  debug,

  apiToken: environment.API_TOKEN!,
})

export default config
