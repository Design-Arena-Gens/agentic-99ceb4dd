import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/service-area", label: "Service Area" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-sky-700">
          Precision Rewind Solutions
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-sky-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-full bg-sky-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
          >
            Request Quote
          </Link>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <details className="relative">
            <summary className="flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-zinc-200 bg-white p-3 shadow-lg">
              <nav className="flex flex-col gap-2 text-sm text-zinc-700">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-2 transition hover:bg-sky-50 hover:text-sky-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
          <Link
            href="/contact"
            className="rounded-full bg-sky-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-sky-800"
          >
            Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
