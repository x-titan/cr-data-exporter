import config from "./config"
import type {
  LoggerOptions,
} from "pino"

const loggerOption: LoggerOptions = {
  level: config.debug ? "debug" : "info",
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
