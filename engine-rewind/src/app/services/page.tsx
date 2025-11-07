import type { Metadata } from "next";

const services = [
  {
    title: "AC/DC Motor Rewinding",
    details: [
      "Form coil and random wound stators from fractional to 5,000 HP",
      "Class H insulation systems with vacuum pressure impregnation",
      "Core loss testing and rewedge services to restore efficiency",
    ],
  },
  {
    title: "Rotating Equipment Repair",
    details: [
      "Pump rebuilds, shaft repair, and sleeve installations",
      "Dynamic balancing to ISO 1940 Grade 1.0",
      "Gearbox inspection, bearing replacements, and upgrades",
    ],
  },
  {
    title: "Predictive Maintenance",
    details: [
      "Vibration analysis with actionable reporting dashboards",
      "Infrared thermography, ultrasound, and oil analysis",
      "Motor circuit evaluation to identify issues before failure",
    ],
  },
  {
    title: "Field Services",
    details: [
      "Laser alignment, commissioning, and on-site rewinding support",
      "Onsite machining and welding for critical path shutdowns",
      "Emergency crews on-call 24/7 with stocked service trucks",
    ],
  },
];

const addons = [
  "UL-certified rewinding procedures and documentation",
  "CSA EASA AR100 compliance for electric motor repair",
  "Shop crane capacity up to 60 tons with 20-foot hook height",
  "Load testing up to 13,200 volts with data logging",
  "Climate-controlled storage for critical spares and parts",
];

export const metadata: Metadata = {
  title: "Services | Precision Rewind Solutions",
  description:
    "Explore Precision Rewind Solutions services: motor rewinding, rotating equipment repair, predictive maintenance, and onsite field support throughout Arizona.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-sky-900 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight">
            Industrial Motor Services Without Compromise
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80">
            We combine decades of hands-on experience with modern diagnostics to extend the life of
            your rotating assets. Every project is backed by digital reports, QC checklists, and
            warranty coverage you can trust.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-sky-800">{service.title}</h2>
              <ul className="mt-5 space-y-3 text-sm text-zinc-700">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-600" aria-hidden />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-sky-100 bg-white p-10 shadow-lg">
            <h2 className="text-3xl font-semibold text-zinc-900">Beyond the rewind</h2>
            <p className="mt-4 text-base text-zinc-600">
              Our team supports your maintenance program with services designed to reduce unplanned
              outages, maintain efficiency, and provide traceable documentation for audits.
            </p>
            <ul className="mt-8 grid gap-4 text-sm text-zinc-700 sm:grid-cols-2">
              {addons.map((addon) => (
                <li key={addon} className="rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-sky-900">
                  {addon}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-zinc-600">
              Need a tailored maintenance package? We build service level agreements that match your
              production window and compliance requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
