export async function handleFetchApiRoute(
  url: string,
  excludeTags: string,
  includeTags: string
): Promise<
  { text: string; error?: undefined } | { error: string; text?: undefined }
> {
  try {
    const response = await fetch("/api/fetch-and-copy", {
      method: "POST",
      body: JSON.stringify({ url, excludeTags, includeTags }),
    })

    switch (response.status) {
      case 200: {
        try {
          const data = await response.json()
          const text = data.text.trim()
          if (!text) {
            return { error: "No text found" }
          }
          return { text }
        } catch (error) {
          return { error: "Failed to parse data" }
        }
      }
      case 300:
        return { error: "Multiple Choices" }
      case 301:
        return { error: "Moved Permanently" }
      case 302:
        return { error: "Found" }
      case 303:
        return { error: "See Other" }
      case 304:
        return { error: "Not Modified" }
      case 307:
        return { error: "Temporary Redirect" }
      case 308:
        return { error: "Permanent Redirect" }
      case 400:
        return { error: "Bad Request" }
      case 401:
        return { error: "Unauthorized" }
      case 403:
        return { error: "Forbidden" }
      case 404:
        return { error: "Not Found" }
      case 500:
        return { error: "Internal Server Error" }
      case 502:
        return { error: "Bad Gateway" }
      case 503:
        return { error: "Service Unavailable" }
      default:
        return { error: "Unexpected Error" }
    }
  } catch (error) {
    return { error: "Failed to fetch" }
  }
}
