import { NextResponse } from "next/server";

/* Feedback relay. The destination address lives only here, server-side —
   it is never shipped to the browser bundle, which is the whole point:
   the brand has no public email, just this form.
   FormSubmit's AJAX endpoint forwards the payload as an email. The first
   ever submission triggers a one-time activation email to the inbox;
   click Activate once and everything after that flows through. */
const RELAY = "https://formsubmit.co/ajax/shopheritagecompany@gmail.com";

export async function POST(req: Request) {
  let body: { message?: string; email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const message = (body.message ?? "").trim().slice(0, 4000);
  const email = (body.email ?? "").trim().slice(0, 200);
  if (!message) return NextResponse.json({ ok: false }, { status: 400 });

  const res = await fetch(RELAY, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: "MGSC site feedback",
      message,
      reply_to: email || "not provided",
      _template: "table",
      _captcha: "false",
    }),
  });

  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
}
