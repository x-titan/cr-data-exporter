import EXIT from "./exit"
import main from "./main"

main(process.argv.slice(2))
  .then(EXIT)
  .catch(async (error) => {
    console.error("Fatal error during application startup:\n", error)
    await EXIT(1)
  })
