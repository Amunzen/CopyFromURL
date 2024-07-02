import { load } from "cheerio"
import { NextResponse } from "next/server"
import { fetchWithRedirects, validateRequest } from "./utils"

export async function POST(req: Request) {
  const data = await req.json()
  console.log(data)
  const validation = validateRequest(data)
  if (validation.errors) {
    return NextResponse.json(
      { error: "Invalid request", details: validation },
      { status: 400 }
    )
  }
  const { excludeTags, includeTags } = validation
  let response: Response | undefined
  try {
    response = await fetchWithRedirects(data.url)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 404 })
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch" },
      { status: response.status }
    )
  }

  const html = await response.text()
  const $ = load(html)
  $(excludeTags).remove()

  let rawText = $(includeTags).text()
  if (!rawText) rawText = $("body").text()

  const text = rawText.trim().replace(/\s\s+/g, " ").replace(/\n/g, " ")

  return NextResponse.json({ text })
}
