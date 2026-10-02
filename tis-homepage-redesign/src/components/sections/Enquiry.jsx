"use client";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { classes } from "@/data/content";

const field = "min-h-[48px] w-full rounded-xl border border-fg/25 bg-bg px-4";

export default function Enquiry() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="enquire" className="px-6 py-20">
      <Reveal className="mx-auto max-w-3xl rounded-[2rem] bg-navy p-8 text-[#F6F8FC] dark:text-[#0B1426] sm:p-12">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Enquire now</h2>
        <p className="mt-2 opacity-80">Class IV to XII admissions. Our team will call you back.</p>
        {sent ? (
          <p role="status" className="mt-8 text-xl font-semibold">Thank you. We will contact you shortly.</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 grid gap-4 text-fg sm:grid-cols-2">
            <label className="sm:col-span-2"><span className="sr-only">Parent name</span>
              <input required name="name" placeholder="Parent name" className={field} /></label>
            <label><span className="sr-only">Phone number</span>
              <input required name="phone" type="tel" inputMode="numeric" pattern="[0-9]{10}" placeholder="10-digit phone number" className={field} /></label>
            <label><span className="sr-only">Class</span>
              <select required name="class" defaultValue="" className={field}>
                <option value="" disabled>Select class</option>
                {classes.map((c) => <option key={c}>{c}</option>)}
              </select></label>
            <Button type="submit" className="sm:col-span-2">Enquire now</Button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
