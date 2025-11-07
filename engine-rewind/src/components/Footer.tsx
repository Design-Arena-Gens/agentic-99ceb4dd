import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900">
              Precision Rewind Solutions
            </h3>
            <p className="mt-3 text-sm text-zinc-600">
              Industrial motor rewinding and repair specialists delivering
              faster turnaround, rigorous QC, and reliable uptime for plants
              across the Southwest.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <Link className="transition hover:text-sky-700" href="/service-area">
                  Service Area
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sky-700" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-sky-700" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>1430 Copperline Dr, Phoenix, AZ 85004</li>
              <li>
                <a className="transition hover:text-sky-700" href="tel:+16025550123">
                  (602) 555-0123
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-sky-700"
                  href="mailto:service@precisionrewind.com"
                >
                  service@precisionrewind.com
                </a>
              </li>
              <li>Emergency support 24/7</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Precision Rewind Solutions.</span>
          <span>Keeping critical operations powered since 1998.</span>
        </div>
      </div>
    </footer>
  );
}
