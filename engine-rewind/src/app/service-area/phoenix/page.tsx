import type { Metadata } from "next";

const responseTimes = [
  { label: "Downtown Phoenix & Sky Harbor Corridor", time: "Within 2 hours" },
  { label: "East Valley (Mesa, Chandler, Gilbert)", time: "Within 4 hours" },
  { label: "West Valley (Glendale, Goodyear, Peoria)", time: "Within 4 hours" },
  { label: "North Phoenix & Deer Valley", time: "Within 3 hours" },
];

const phoenixHighlights = [
  "Dedicated express pickup fleet staged near I-10 and Loop 202",
  "Coil manufacturing cell with overnight winding capability",
  "Load testing up to 13,200 volts located minutes from downtown plants",
  "Technicians experienced with semiconductor cleanroom protocols",
];

const phoenixIndustries = [
  "Copper & metal fabrication",
  "Semiconductor manufacturing",
  "Municipal water & wastewater",
  "Food & beverage processing",
  "Transportation & logistics hubs",
];

export const metadata: Metadata = {
  title: "Phoenix Service Area | Precision Rewind Solutions",
  description:
    "Precision Rewind Solutions offers rapid-response motor rewinding, repair, and field services for Phoenix industrial facilities with average dispatch under two hours.",
};

export default function PhoenixServiceAreaPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-sky-900 via-slate-900 to-sky-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight">Phoenix Industrial Service Hub</h1>
          <p className="mt-4 max-w-2xl text-base text-white/80">
            Our flagship facility in downtown Phoenix provides the fastest electric motor rewinding
            and rotating equipment repair response in the Valley. With coil manufacturing,
            diagnostic labs, and on-site crane support, we keep the city&apos;s production lines
            moving around the clock.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-zinc-900">Rapid response logistics</h2>
            <p className="mt-4 text-base text-zinc-600">
              Phoenix crews are dispatched from our Copperline Drive facility, strategically located
              near Sky Harbor for access to I-10, Loop 202, and SR-51. We maintain a full inventory
              of copper, insulation, and bearings to handle complex rewinds without waiting on
              suppliers.
            </p>
            <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-lg font-semibold text-sky-800">Standard response times</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                {responseTimes.map((item) => (
                  <li key={item.label} className="flex flex-col rounded-xl bg-white px-4 py-3 shadow-sm">
                    <span className="font-semibold text-zinc-900">{item.label}</span>
                    <span className="text-xs uppercase tracking-wide text-sky-700">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-sky-800">
                Phoenix facility capabilities
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                {phoenixHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-600"
                      aria-hidden
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-lg font-semibold text-zinc-900">Industries we support</h3>
              <ul className="mt-4 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
                {phoenixIndustries.map((industry) => (
                  <li key={industry} className="rounded-xl border border-sky-100 bg-white px-4 py-3">
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h2 className="text-3xl font-semibold text-zinc-900">
              Schedule a Phoenix site assessment
            </h2>
            <p className="mt-4 text-base text-zinc-600">
              We&apos;ll walk your facility, document critical motors, and build a reliability plan
              with recommended spares and testing intervals. Most assessments are completed within
              one week.
            </p>
            <div className="mt-8 grid gap-6 text-sm text-zinc-700 sm:grid-cols-3">
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sky-900">
                <p className="font-semibold">Onsite Technician Teams</p>
                <p className="mt-1 text-sky-700">6 crews covering Phoenix metro daily</p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sky-900">
                <p className="font-semibold">Average Repair Cycle</p>
                <p className="mt-1 text-sky-700">48 hours for 200-600 HP motors</p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sky-900">
                <p className="font-semibold">Field Service Radius</p>
                <p className="mt-1 text-sky-700">Up to 60 miles from downtown</p>
              </div>
            </div>
            <a
              href="tel:+16025550123"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              Call dispatch (602) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
