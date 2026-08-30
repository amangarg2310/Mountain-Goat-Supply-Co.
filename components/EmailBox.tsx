"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function EmailBox() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, email }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setMessage("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="emailbox" id="contact">
      <div style={{ maxWidth: "46ch" }}>
        <h2>Tell us things</h2>
        <p>
          Something arrived wrong? Start here. So do questions, complaints, shirt ideas and trail
          reports. It all lands in the same inbox and a real person reads it. The{" "}
          <a href="/policies/returns">returns policy</a> is short and worth a look first.
        </p>
      </div>
      {status === "sent" ? (
        <p style={{ margin: 0, fontSize: 17 }}>
          Got it. If you left an email, you&rsquo;ll hear back.
        </p>
      ) : (
        <form onSubmit={submit} style={{ flexDirection: "column", alignItems: "stretch", minWidth: "min(420px, 100%)" }}>
          <textarea
            required
            rows={3}
            placeholder="Say what's on your mind"
            aria-label="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              font: "inherit", fontSize: 16, padding: "12px 16px", borderRadius: 14,
              border: "1.5px solid rgba(51,64,42,.25)", background: "var(--card, #fff)",
              resize: "vertical",
            }}
          />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="Email, if you want a reply"
              aria-label="Email address (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ flex: 1, minWidth: 180 }}
            />
            <button type="submit" className="btn-forest" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send it up the mountain"}
            </button>
          </div>
          {status === "error" ? (
            <p style={{ margin: 0, fontSize: 14, color: "#a63c22", maxWidth: "44ch" }}>
              That didn&rsquo;t send, and it is our end, not yours. Try again shortly, or reach us
              through <a href="https://mountain-goat-supply-co-shop.fourthwall.com/contact" target="_blank" rel="noopener noreferrer">our Fourthwall shop</a> in the meantime.
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}
