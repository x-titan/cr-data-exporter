import { input } from "@inquirer/prompts"
import logger from "./logger"

export async function inputPlayerTag(attempts = 3): Promise<string> {
  while (true) {
    const rawInput = await input({ message: "Please enter your Clash Royale player tag:\n", })
    const trimmed = rawInput.trim().toUpperCase()

    if (trimmed == "" || !/^#?[A-Z0-9]+$/i.test(trimmed)) {
      attempts--
      if (attempts <= 0)
        throw new Error("Maximum attempts reached.")
      logger.error(`Invalid player tag format. Please try again. Attempts remaining: ${attempts}.`)
      continue
    }

    return trimmed.startsWith("#") ? trimmed : "#" + trimmed
  }
}
