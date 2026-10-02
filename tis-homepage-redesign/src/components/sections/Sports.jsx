import Reveal from "@/components/ui/Reveal";
import { sports } from "@/data/content";

export default function Sports() {
  return (
    <section id="sports" className="bg-navy/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">Sports? It’s not just a facility.</h2>
          <p className="mt-4 max-w-xl text-lg text-muted">At Tulas it’s the foundation! 16+ sports curated to bring joy and discipline to your life.</p>
        </Reveal>
        <ul className="mt-10 flex flex-wrap gap-3">
          {sports.map((s, i) => (
            <Reveal as="li" key={s} delay={(i % 8) * 0.04}
              className="rounded-full border border-fg/20 bg-card px-5 py-3 font-medium transition hover:border-gold hover:bg-gold hover:text-[#0F2347]">
              {s}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
