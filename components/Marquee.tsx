import { MARQUEE } from "@/lib/data";

export default function Marquee() {
  const seq = (
    <>
      {MARQUEE.map((m, i) => (
        <span key={i}>
          <span>{m}</span> <span className="star" aria-hidden="true">✳</span>
        </span>
      ))}
    </>
  );
  return (
    <div className="marquee" aria-label="Brand slogans">
      <div className="track">{seq}{seq}</div>
    </div>
  );
}
