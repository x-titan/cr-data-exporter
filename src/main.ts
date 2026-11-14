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
import fs from "fs/promises"

export default async function main(argv?: string[]): Promise<number | void> {
  let apiToken!: string
  let requestApiToken = true // TODO: read from config or request API token if missing

  while (true) {
    if (requestApiToken) {
      apiToken = await input({ message: "Please enter your Clash Royale API token:\n", required: true })
      requestApiToken = false
    }
    const API = await createAPI(apiToken)

    // await input({ message: "Press any key to continue...\n", })

    const playerTag = await inputPlayerTag(3)

    const playerData = await API.getPlayerData(playerTag)


    logger.info(playerData)
    // save player data to file
    await fs.writeFile("player_data.json", JSON.stringify(playerData, null, 2))
    

    // const all = await API.getAllCards()

    // console.log(all)
  }
}
