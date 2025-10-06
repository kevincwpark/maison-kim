"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[85vh]">
        <Image
          src="/hero.jpg"            // replace with your hero
          alt="Maison Kim arrangement"
          fill
          priority
          className="object-contain object-center"
          sizes="100vw"
        />

        {/* right-aligned caption */}
        <div className="pointer-events-none absolute inset-0 flex items-end">
          <motion.div
            className="ml-auto p-6 md:p-10 text-right"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-serif text-2xl md:text-4xl tracking-wide">Maison Kim</h1>
            <p className="opacity-80 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-center">scroll</div>
          <div className="mx-auto mt-2 h-px w-10 bg-foreground" />
        </motion.div>
      </section>

      {/* brief intro */}
      <section className="container-lg py-16 md:py-24">
        <p className="max-w-prose leading-relaxed opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non imperdiet urna.
          Aliquam volutpat, diam vitae lacinia laoreet, elit leo auctor nulla, vitae condimentum
          urna metus quis dui.
        </p>
      </section>
    </main>
  );
}
