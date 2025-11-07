import type { Metadata } from "next";
import Link from "next/link";

const coverageZones = [
  {
    title: "Phoenix Metro",
    municipalities: ["Phoenix", "Mesa", "Chandler", "Gilbert", "Scottsdale", "Tempe"],
    response: "4-hour standard response window | 24/7 emergency available",
  },
  {
    title: "Central & Northern Arizona",
    municipalities: ["Prescott", "Flagstaff", "Sedona", "Payson"],
    response: "Same-day pickup with dedicated transport fleet",
  },
  {
    title: "Southern Arizona",
    municipalities: ["Tucson", "Casa Grande", "Sierra Vista", "Nogales"],
    response: "Overnight rebuild logistics and onsite predictive maintenance",
  },
  {
    title: "Tri-State Industrial Corridor",
    municipalities: ["Yuma, AZ", "Laughlin, NV", "Lake Havasu, AZ", "Needles, CA"],
    response: "Scheduled weekly route with optional hot-shot delivery",
  },
];

const valueAdds = [
  "Full-service field crews with MSHA and OSHA 30 certifications",
  "Pickup and delivery with climate-controlled motor storage",
  "Onsite diagnostics including infrared thermography and power quality studies",
  "Motor reliability programs customized around your runtime metrics",
];

export const metadata: Metadata = {
  title: "Service Coverage | Precision Rewind Solutions",
  description:
    "Rapid-response industrial motor rewinding and repair coverage across Arizona, Southern Nevada, and Eastern California with 24/7 emergency crews.",
};

export default function ServiceAreaPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight">Service Area Coverage</h1>
          <p className="mt-4 max-w-2xl text-base text-white/80">
            We dispatch technicians and transport crews throughout Arizona and the tri-state
            industrial corridor. With redundant teams and a fleet of rigging-equipped trucks, we
            keep emergency outages short and maintenance schedules on time.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-white/80 sm:flex-row">
            <span>Primary facility: Phoenix, AZ</span>
            <span>Satellite depots: Tucson, Flagstaff, Bullhead City</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {coverageZones.map((zone) => (
            <div
              key={zone.title}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-sky-800">{zone.title}</h2>
              <p className="mt-3 text-sm text-zinc-600">{zone.response}</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                {zone.municipalities.map((city) => (
                  <li key={city} className="rounded-lg bg-sky-50 px-4 py-2 text-sky-900">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-zinc-900">
                Local expertise, regional reach
              </h2>
              <p className="mt-4 text-base text-zinc-600">
                From semiconductor fabs to municipal water treatment plants, our crew understands the
                regulatory requirements and documentation standards you operate under. We tailor our
                reporting cadence and inspection routines around your uptime goals.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                {valueAdds.map((value) => (
                  <li key={value} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-600" aria-hidden />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-xl">
              <h3 className="text-lg font-semibold text-sky-800">
                Featured Area: Phoenix Industrial Hub
              </h3>
              <p className="mt-3 text-sm text-zinc-600">
                Central response team with crane bay access, coil manufacturing, and load testing up
                to 13,200V. Average pickup-to-reinstall timeline is 48 hours for critical motors.
              </p>
              <Link
                href="/service-area/phoenix"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
              >
                Explore Phoenix coverage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-800 via-sky-700 to-sky-900 p-10 text-white">
          <h2 className="text-3xl font-semibold">Need us outside these zones?</h2>
          <p className="mt-3 max-w-2xl text-base text-white/80">
            We partner with vetted rewinding shops across the Mountain West to extend our coverage.
            Tell us about your site and we&apos;ll arrange logistics, testing, and documentation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-900 shadow-lg transition hover:bg-sky-100"
          >
            Start a service request
          </Link>
        </div>
      </section>
    </div>
  );
}
