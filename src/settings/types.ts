export type EnvironmentType = "development" | "production" | "test"

export interface Environment {
  isDevelopment: boolean
  isTest: boolean
  isProduction: boolean
  debug: boolean
  ENV: EnvironmentType
}

export interface ProjectEnvironment extends Environment {
  TOKEN: string
  PLAYER_TAG: string
}
