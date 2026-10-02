"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { applyUrl, heroImage, phone } from "@/data/content";

const words = ["Welcome", "to", "Tulas", "International", "School", "(TIS)"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-12 pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className="mr-3 inline-block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            TIS is one of India’s top boarding and day schools in Dehradun,
            India. Our CBSE curriculum focuses on academic excellence, holistic
            development, and preparing students to be global leaders.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={applyUrl}>Apply now</Button>
            <Button href="#enquire" variant="ghost">
              Enquire now
            </Button>
            <Button href={`tel:${phone}`} variant="ghost">
              Call {phone}
            </Button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-fg/10"
        >
          {heroImage ? (
            <Image
              src={heroImage}
              alt="Tulas International School campus in Dehradun"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full flex-col justify-end bg-navy p-8 text-[#F6F8FC] dark:text-[#0B1426]">
              <p className="font-display text-6xl font-extrabold">
                Class 4 to 12
              </p>
              <p className="mt-3 text-lg opacity-85">
                CBSE-affiliated co-ed boarding and day school in Dehradun,
                Uttarakhand.
              </p>
            </div>
          )}
        </motion.div>
      </div>
      <div
        className="mt-14 overflow-hidden bg-gold py-4 text-[#0F2347]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee gap-10 font-display text-3xl font-extrabold">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i}>LET’S DO it with Tulas</span>
          ))}
        </div>
      </div>
    </section>
  );
}
