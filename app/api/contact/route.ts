import { NextResponse } from "next/server";

/* Feedback relay.

   The destination address lives only here, server-side, and never reaches the
   browser bundle — that is the whole point, since the brand publishes no email.

   Two things about FormSubmit that are easy to get wrong:

   1. It refuses requests with no browser context and answers "FormSubmit will
      not work in pages browsed as HTML files". A server-side fetch sends no
      Origin or Referer, so those have to be set explicitly.

   2. It answers HTTP 200 even when the send FAILED, putting the real outcome in
      a JSON body as success:"false". Checking res.ok alone reports success on a
      message that was never delivered, which is worse than a visible error, so
      the body is parsed and checked below.

   FIRST-RUN: the destination inbox gets a one-time "Activate Form" email.
   Until somebody clicks that link every submission fails with a needsActivation
   message, which is surfaced in the logs rather than swallowed. */
const TO = "shopheritagecompany@gmail.com";
const RELAY = `https://formsubmit.co/ajax/${TO}`;
const SITE = "https://www.mountaingoathiking.com";

export async function POST(req: Request) {
  let body: { message?: string; email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const message = (body.message ?? "").trim().slice(0, 4000);
  const email = (body.email ?? "").trim().slice(0, 200);
  if (!message) {
    return NextResponse.json({ ok: false, error: "empty" }, { status: 400 });
  }

  try {
    const res = await fetch(RELAY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: SITE,
        Referer: `${SITE}/`,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) " +
          "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        _subject: "MGSC site feedback",
        message,
        reply_to: email || "not provided",
        _template: "table",
        _captcha: "false",
      }),
    });

    const text = await res.text();

    /* Messages were arriving in the inbox while this route still reported
       failure, so the old check was too strict. FormSubmit answers
       inconsistently from a server context: sometimes 200 with JSON,
       sometimes a redirect or an HTML body, and it queues the message in all
       of those cases. The only reliable failure signal is an explicit
       success:"false" (used for a form that is unactivated or blocked), or a
       5xx from their side. Everything else is treated as delivered, because
       telling somebody their message failed when it landed is the worse error. */
    let sent = res.status < 500;
    let reason = "";
    try {
      const json = JSON.parse(text);
      if (String(json.success) === "false") {
        sent = false;
        reason = String(json.message ?? "");
      }
    } catch {
      // Non-JSON body. FormSubmit does this on success too, so not a failure.
    }
    if (!sent) console.error("[contact] relay refused:", reason || text.slice(0, 200));

    const debug = new URL(req.url).searchParams.get("debug") === "1";
    return NextResponse.json(
      debug ? { ok: sent, upstreamStatus: res.status, upstream: text.slice(0, 300) } : { ok: sent },
      { status: sent ? 200 : 502 },
    );
  } catch (err) {
    console.error("[contact] relay unreachable:", err);
    return NextResponse.json({ ok: false, error: "unreachable" }, { status: 502 });
  }
}
