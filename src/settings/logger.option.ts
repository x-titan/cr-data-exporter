import environment from "./environment"
import type {
  LoggerOptions,
} from "pino"

const loggerOption: LoggerOptions = {
  level: environment.debug ? "debug" : "info",
  timestamp: () => `,"time":"${new Date().toISOString()}"`,
  transport: {
    targets: [{
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    }],
  },
}

export default loggerOption
