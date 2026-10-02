import Reveal from "@/components/ui/Reveal";
import { stats } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="max-w-4xl font-display text-3xl font-bold leading-tight sm:text-5xl">Boarding and Day School Excellence</h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally. Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust.
          </p>
        </Reveal>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-fg/15 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="flex flex-col-reverse bg-card p-6 sm:p-8">
              <dt className="mt-2 text-sm text-muted">{s.label}</dt>
              <dd className="font-display text-5xl font-extrabold sm:text-6xl">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
