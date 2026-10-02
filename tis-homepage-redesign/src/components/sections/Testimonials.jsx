import Reveal from "@/components/ui/Reveal";
import { reviews } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="voices" className="bg-navy/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl font-bold sm:text-5xl">From the parents</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 0.08} className="rounded-3xl bg-card p-7">
              <blockquote className="text-lg">“{r.text}”</blockquote>
              <p className="mt-4 font-semibold">{r.name}</p>
              <p className="text-sm text-muted">{r.relation}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
