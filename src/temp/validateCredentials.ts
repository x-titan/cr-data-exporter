export async function validateCredentials(apiToken: string, playerTag: string): Promise<boolean> {
  const url = "https://api.clashroyale.com/v1/players/" + encodeURIComponent(playerTag);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiToken}`
      }
    });

    if (response.ok) return true;

    if (response.status === 403) {
      console.error('\n[Ошибка 403]: Доступ запрещен. Проверьте токен или привязку IP-адреса.');
    } else if (response.status === 404) {
      console.error('\n[Ошибка 404]: Игрок с таким тегом не найден.');
    } else {
      console.error(`\n[Ошибка API]: Статус ${response.status} ${response.statusText}`);
    }
    return false;
  } catch (error) {
    console.error('\n[Ошибка сети]: Не удалось связаться с сервером Clash Royale.');
    return false;
  }
}
