import Reveal from "@/components/ui/Reveal";
import { personalities, rankings } from "@/data/content";

export default function Rankings() {
  return (
    <section id="rankings" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl font-bold sm:text-5xl">Ranked among the best</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((r, i) => (
            <Reveal as="li" key={r.text} delay={i * 0.08} className="rounded-3xl bg-navy p-6 text-[#F6F8FC] dark:text-[#0B1426]">
              <p className="font-display text-5xl font-extrabold">{r.rank}</p>
              <p className="mt-2 font-semibold">{r.place}</p>
              <p className="mt-2 text-sm opacity-80">{r.text}</p>
            </Reveal>
          ))}
        </ul>
        <h3 className="mt-16 font-display text-2xl font-bold">Influential personalities on campus</h3>
        <ul className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
          {personalities.map((p) => (
            <li key={p.name} className="border-l-4 border-gold pl-4">
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-muted">{p.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
