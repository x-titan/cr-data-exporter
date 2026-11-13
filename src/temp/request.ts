const url = "https://api.clashroyale.com/v1/players/%23"

export async function request_player_card_collect(tag: string, token: string) {
  return (await fetch(url + encodeURIComponent(tag), {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  })).json()
}
