import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Precision Rewind Solutions",
  description:
    "Request emergency motor rewinding, schedule preventive maintenance, or talk with a service coordinator at Precision Rewind Solutions in Phoenix, AZ.",
};

const hours = [
  {
    label: "Emergency Hotline",
    value: "(602) 555-0123",
    description: "24/7 rapid response",
  },
  {
    label: "Service Desk",
    value: "service@precisionrewind.com",
    description: "Responses within 30 minutes during business hours",
  },
  {
    label: "Shop Hours",
    value: "Mon–Fri 6:00am – 8:00pm | Sat 8:00am – 2:00pm",
    description: "Emergency crews on-call after hours",
  },
  {
    label: "Facility",
    value: "1430 Copperline Dr, Phoenix, AZ 85004",
    description: "Schedule a plant walk-through or equipment drop-off",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-zinc-50">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                Contact Precision Rewind Solutions
              </span>
              <h1 className="mt-4 text-4xl font-bold text-zinc-900">
                Let&apos;s get your motor back online
              </h1>
              <p className="mt-4 text-base text-zinc-600">
                Complete the form and our service coordinator will reach out immediately to confirm
                project details, timeline, and pickup logistics. If this is an emergency, call the
                hotline below for fastest dispatch.
              </p>
              <div className="mt-8 grid gap-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-sm text-zinc-700 sm:grid-cols-2">
                {hours.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-zinc-900">{item.value}</p>
                    <p className="mt-1 text-xs text-zinc-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 rounded-3xl bg-sky-900 p-8 text-white">
                <h2 className="text-lg font-semibold">Facility access map</h2>
                <p className="mt-2 text-sm text-white/80">
                  Located off I-10 at 16th Street. Drive-through bays accommodate up to 45-foot
                  trailers. Call ahead for crane assistance or after-hours drop-off instructions.
                </p>
                <p className="mt-4 text-xs uppercase tracking-wide text-white/60">
                  GPS Coordinates: 33.4512° N, 112.0654° W
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
              <p className="mt-4 text-xs text-zinc-500">
                By submitting this form you consent to receiving updates about your project via
                phone, SMS, or email. We never share your data outside of coordinating your service
                request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
