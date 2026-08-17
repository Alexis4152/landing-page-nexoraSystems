import "./Button.css";

export default function Button({
  as = "a",
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const Tag = as;

  return (
    <Tag className={classes} href={href} {...rest}>
      {children}
    </Tag>
  );
}
