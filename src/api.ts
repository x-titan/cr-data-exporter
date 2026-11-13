export interface ApiResponseSuccess<T> {
  success: true
  data: T
}

export interface ApiResponseError {
  success: false
  error: {
    code: number
    message: string
  }
}

export type ApiResponse<T> =
  | ApiResponseSuccess<T>
  | ApiResponseError


function apiError(code: number, message: string): ApiResponseError {
  return { success: false, error: { code, message } }
}

function apiSuccess<T>(data: T): ApiResponseSuccess<T> {
  return { success: true, data }
}

export async function createAPI(apiToken: string) {
  const API_URL = "https://api.clashroyale.com/v1/"

  async function request<T>(path: string, signal?: AbortSignal): Promise<ApiResponse<T>> {
    let response: Response

    try {
      response = await fetch(API_URL + path, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${apiToken}`,
        },
        signal: signal ?? null,
      });
    } catch (error) {
      if ((error as Error).name === "AbortError")
        return apiError(-2, "Request aborted")
      return apiError(0, "Network error")
    }

    if (!response.ok)
      return apiError(response.status, response.statusText)

    try {
      return apiSuccess(await response.json())
    } catch (error) {
      return apiError(-1, "Invalid JSON response from server")
    }
  }

  return {
    request,
    async getPlayerData(tag: string, signal?: AbortSignal) {
      return request(`players/${encodeURIComponent(tag)}`, signal)
    },
    async getClan(tag: string, signal?: AbortSignal) {
      return request(`clans/${encodeURIComponent(tag)}`, signal)
    },
    async getArena(id: number, signal?: AbortSignal) {
      return request(`arenas/${id}`, signal)
    },
    async getAllCards(signal?: AbortSignal) {
      return request(`cards`, signal)
    }
  }
}
