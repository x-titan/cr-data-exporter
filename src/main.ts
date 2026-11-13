import {
  input,
  confirm,
  password,
  select,
} from "@inquirer/prompts"
import logger from "./logger"
import { createAPI } from "./api"
import { formatPlayerTag } from "./normalize"
import { inputPlayerTag } from "./input"

export default async function main(argv?: string[]): Promise<number | void> {
  let apiToken!: string
  let requestApiToken = true // TODO: read from config or request API token if missing

  while (true) {
    if (requestApiToken) {
      apiToken = await input({ message: "Please enter your Clash Royale API token:\n", })
      requestApiToken = false
    }
    const API = await createAPI(apiToken)

    // await input({ message: "Press any key to continue...\n", })

    const playerTag = await inputPlayerTag(3)

    const playerData = await API.getPlayerData(playerTag)


    logger.info(playerData)

    // const all = await API.getAllCards()

    // console.log(all)
  }
}
