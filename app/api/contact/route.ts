import { NextResponse } from "next/server"
import { getPool } from "@/lib/db"

let tableReady = false

async function ensureTable() {
  if (tableReady) return
  await getPool().query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `)
  tableReady = true
}

export async function GET() {
  const raw = process.env.DATABASE_URL || "(not set)"
  let redacted = raw
  try {
    const url = new URL(raw)
    redacted = `${url.protocol}//${url.username}:***@${url.hostname}:${url.port}${url.pathname}${url.search}`
  } catch {
    // leave as-is if it's not a parseable URL at all
  }
  return NextResponse.json({ databaseUrlRedacted: redacted })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 }
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    await ensureTable()

    await getPool().query(
      `INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)`,
      [name, email, message]
    )

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact form submission failed:", err)
    const debugDetail = err instanceof Error ? err.message : String(err)
    return NextResponse.json(
      {
        error: "Something went wrong. Please try again later.",
        debug: debugDetail,
      },
      { status: 500 }
    )
  }
}
