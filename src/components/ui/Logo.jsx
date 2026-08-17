import "./Logo.css";

export default function Logo({ variant = "full", className = "" }) {
  const mark = (
    <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-brand-300)" />
          <stop offset="100%" stopColor="var(--color-brand-600)" />
        </linearGradient>
      </defs>
      <path d="M16 12 L48 42 V12 H53 V52 H48 L16 22 V52 H11 V12 Z" fill="url(#logo-gradient)" />
    </svg>
  );

  if (variant === "mark") {
    return <span className={`logo ${className}`}>{mark}</span>;
  }

  return (
    <span className={`logo ${className}`}>
      {mark}
      <span className="logo-wordmark">
        <span className="logo-name">
          NE<span className="logo-x">X</span>ORA
        </span>
        <span className="logo-sub">SYSTEMS</span>
      </span>
    </span>
  );
}
