import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Naclite LLC — by form, email, or phone." };

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title={<>Let&rsquo;s <span className="text-ember">talk</span>.</>}
        intro="Tell us what you're working on. We read every message and reply personally, usually within one business day." />
      <section className="mx-auto grid max-w-wide gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:px-10 md:py-28">
        <Reveal>
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block font-display text-display-md font-medium text-ink hover:text-ember-deep">{site.email}</a>
            </div>
            <div>
              <p className="eyebrow">Phone</p>
              <a href={site.phoneHref} className="mt-2 block font-display text-display-md font-medium text-ink hover:text-ember-deep">{site.phone}</a>
              <p className="mt-1 font-sans text-sm text-ink-mute">Monday – Friday, 9am – 5pm MT</p>
            </div>
            <div>
              <p className="eyebrow">Registered office</p>
              <address className="mt-2 not-italic font-sans text-[0.97rem] leading-relaxed text-ink">
                {site.legalName}<br />{site.address.line1}<br />{site.address.city}, {site.address.region} {site.address.postal}<br />{site.address.country}
              </address>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card rounded-4xl p-6 md:p-10">
            <h2 className="font-display text-display-md font-semibold text-ink">Send a message</h2>
            <p className="mt-2 font-sans text-sm text-ink-mute">Fill in the form and we&rsquo;ll get back to you.</p>
            <div className="mt-8"><ContactForm /></div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
