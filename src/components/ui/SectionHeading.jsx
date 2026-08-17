export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={`section-header ${align === "left" ? "section-header--left" : ""}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
