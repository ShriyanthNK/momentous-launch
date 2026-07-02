import { NextResponse } from "next/server";

// NOTE: this is a stub. It validates the payload and logs it server-side,
// but does not actually send email or persist anywhere yet. Wire this up to
// a real provider (Resend, ConvertKit, a database, etc.) before relying on
// it to capture real leads.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !body.email.includes("@")) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 }
    );
  }

  console.log("[subscribe] new signup", {
    name: body.name,
    email: body.email,
    score: body.score,
    situation: body.situation,
    obstacle: body.obstacle,
  });

  return NextResponse.json({ ok: true });
}
