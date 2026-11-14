export type EnvironmentType =
  | "development"
  | "production"
  | "test"
  | (string & {})

export interface IBaseConfig {
  readonly isDevelopment: boolean
  readonly isTest: boolean
  readonly isProduction: boolean
  readonly debug: boolean
  readonly env: EnvironmentType
  readonly RAW: Record<string, string | undefined>
}

export interface IConfig extends IBaseConfig {
  apiToken?: string
  playerTag?: string
  normalizeCardLevels?: boolean
}
