// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const validateRequest = (data: any) => {
  const errors = []
  if (
    typeof data.url !== "string" ||
    !data.url.startsWith("http") ||
    data.url.length < 1
  ) {
    errors.push("Invalid URL")
  }
  if (typeof data.excludeTags !== "string" || data.excludeTags.length > 256) {
    errors.push("Invalid excludeTags")
  }
  if (typeof data.includeTags !== "string" || data.includeTags.length > 256) {
    errors.push("Invalid includeTags")
  }

  if (errors.length > 0) {
    return { errors }
  }

  return {
    url: data.url,
    excludeTags: trimTags(data.excludeTags),
    includeTags: trimTags(data.includeTags),
  }
}

export function trimTags(tags: string) {
  return tags
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t !== "")
    .join(",")
}

export async function fetchWithRedirects(
  url: string,
  options: RequestInit = {},
  maxRedirects = 10
): Promise<Response> {
  let response = await fetch(url, options)
  let redirects = 0

  while (
    response.status >= 300 &&
    response.status < 400 &&
    response.headers.has("location") &&
    redirects < maxRedirects
  ) {
    const location = response.headers.get("location")
    if (!location) break
    response = await fetch(location, options)
    redirects++
  }

  return response
}
