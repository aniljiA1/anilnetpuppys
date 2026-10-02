export default function Button({ href, variant = "primary", children, className = "", ...rest }) {
  const styles = variant === "primary"
    ? "bg-gold text-[#0F2347] hover:brightness-95"
    : "border border-fg/30 text-fg hover:bg-fg/10";
  const cls = `inline-flex min-h-[44px] items-center justify-center rounded-full px-6 text-sm font-semibold transition ${styles} ${className}`;
  return href
    ? <a href={href} className={cls} {...rest}>{children}</a>
    : <button className={cls} {...rest}>{children}</button>;
}
