import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !body.email.includes("@")) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 }
    );
  }

  console.log("[subscribe] new signup", {
    email: body.email,
    score: body.score,
    situation: body.situation,
    obstacle: body.obstacle,
  });

  const { error } = await resend.contacts.create({
    email: body.email,
    audienceId: process.env.RESEND_AUDIENCE_ID as string,
    unsubscribed: false,
  });

  if (error) {
    console.error("[subscribe] resend error", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
