import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={light ? "logo logo-light" : "logo"} aria-label="TMS Solutions, naar de homepage">
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        <strong>TMS</strong>
        <small>Solutions</small>
      </span>
    </Link>
  );
}
