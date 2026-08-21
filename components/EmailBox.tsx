"use client";
import { useState } from "react";

export default function EmailBox() {
  const [subbed, setSubbed] = useState(false);
  return (
    <div className="emailbox">
      <div style={{ maxWidth: "46ch" }}>
        <h2>New shirts, occasionally</h2>
        <p>One email when there's something new. There is rarely something new.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); setSubbed(true); }}>
        <input type="email" required placeholder="you@email.com" aria-label="Email address" />
        <button type="submit" className="btn-forest">{subbed ? "You're in" : "Go on then"}</button>
      </form>
    </div>
  );
}
