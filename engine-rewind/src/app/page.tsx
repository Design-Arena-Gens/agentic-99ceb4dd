import Link from "next/link";

const stats = [
  { label: "Rush Turnarounds", value: "24 hr" },
  { label: "Motors Rewound", value: "12k+" },
  { label: "Field Technicians", value: "18" },
  { label: "ISO Certifications", value: "9001 / 45001" },
];

const industries = [
  "Manufacturing & Fabrication",
  "Water & Wastewater",
  "Mining & Aggregates",
  "HVAC & Building Systems",
  "Food & Beverage",
  "Power Generation",
];

const processSteps = [
  {
    title: "1. Diagnose & Document",
    description:
      "Failure analysis with surge, resistance, and vibration testing to pinpoint root cause and prevent repeat downtime.",
  },
  {
    title: "2. Precision Rewind",
    description:
      "Custom coils, VPI insulation, and dynamic balancing backed by UL industrial motor rewinding procedures.",
  },
  {
    title: "3. Rapid Recommission",
    description:
      "Load testing, field alignment, and on-site startup support ensure your equipment returns to spec the first time.",
  },
];

export default function Home() {
  return (
    <div className="relative isolate">
      <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              24/7 Industrial Motor Support
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Keep Your Plant Running with Expert Motor Rewinding & Repair
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Precision Rewind Solutions delivers mission-critical motor rewinding, rotor repair,
              and predictive maintenance for facilities across Arizona and the Southwest. When
              downtime costs thousands per minute, our response team gets you back on line fast.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-900 shadow-lg transition hover:bg-sky-100"
              >
                Dispatch Emergency Crew
              </Link>
              <Link
                href="/service-area"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Service Area
              </Link>
            </div>
          </div>
          <div className="grid w-full max-w-md gap-4 rounded-3xl bg-white/10 p-8 text-white backdrop-blur">
            <h2 className="text-lg font-semibold">Why plants choose Precision Rewind</h2>
            <p className="text-sm text-white/70">
              60-ton crane bay, 13,200V testing, and the fastest VPI tank in the region keep your
              critical rotating equipment online.
            </p>
            <dl className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/15 p-4 text-center">
                  <dt className="text-xs text-white/70">{stat.label}</dt>
                  <dd className="mt-2 text-2xl font-bold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-zinc-900">
              Complete motor rewinding and rotating equipment services
            </h2>
            <p className="mt-4 text-base text-zinc-600">
              From fractional HP to 5,000 HP, our technicians bring decades of experience in
              rewinding AC/DC motors, pumps, and generators with unmatched precision and
              documentation.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-700 sm:grid-cols-2">
              <li className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Vacuum pressure impregnation with class H insulation systems
              </li>
              <li className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Dynamic balancing to ISO 1940 tolerances for rotors and fans
              </li>
              <li className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Surge, hipot, and core loss testing with digital reporting
              </li>
              <li className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                Field services: alignment, laser coupling, and predictive maintenance
              </li>
            </ul>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              Explore all services
            </Link>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-sky-100/30">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-700">
              Industries Protected
            </h3>
            <p className="mt-2 text-lg font-semibold text-zinc-900">
              We understand the cost of downtime, so we staff to meet your production schedule—not
              ours.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-700 sm:grid-cols-2">
              {industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-sky-900"
                >
                  {industry}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-sky-900 px-6 py-5 text-white shadow-lg">
              <p className="text-sm">
                “Precision Rewind got our 2,500 HP blower back in service in 36 hours with complete
                vibration logs. They’re the only partner we trust for emergency response.”
              </p>
              <p className="mt-3 text-xs uppercase tracking-wide text-white/70">
                — Maintenance Manager, Phoenix Copper Smelting
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Our proven rewind process keeps downtime to a minimum
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-sky-800">{step.title}</h3>
                <p className="mt-3 text-sm text-zinc-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl bg-sky-900 p-10 text-white lg:grid-cols-[1.2fr,1fr]">
          <div>
            <h2 className="text-3xl font-semibold">Ready before your next outage</h2>
            <p className="mt-4 text-base text-white/80">
              Load bank testing, spare motor storage, and predictive maintenance packages reduce
              surprises during scheduled turnarounds. We manage your rotating asset lifecycle so you
              can focus on production.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>• Preventive maintenance programs tailored to your runtime data</li>
              <li>• Online portal delivers test reports, certifications, and asset history</li>
              <li>• Redundant crews for rapid mobilization across Arizona and New Mexico</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 text-sky-900 shadow-2xl">
            <h3 className="text-lg font-semibold">Critical response hotline</h3>
            <p className="mt-2 text-sm text-sky-700">
              Call 602-555-0123 to dispatch a crew or request same-day pickup from your facility.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
                <p className="font-semibold">Average dispatch time: 42 minutes</p>
                <p className="mt-1 text-sky-700">
                  Dedicated fleet with liftgate and hazmat-certified drivers.
                </p>
              </div>
              <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
                <p className="font-semibold">Service area coverage</p>
                <p className="mt-1 text-sky-700">
                  Phoenix metro, Tucson, Flagstaff, Prescott, and the Tri-State industrial corridor.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              Schedule a plant walk-through
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
