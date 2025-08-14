"use client";
import { motion } from 'framer-motion';
import cs from '@/content/cs';

type Item = {
  title: string;
  paragraphs: string[];
  highlight1: string;
  highlight2: string;
};

export default function UseCasesRich() {
  const data = (cs as any).useCasesRich as {
    anchorId: string;
    heading: string;
    subheading: string;
    items: Item[];
    ctaBelow: string;
  };

  return (
    <section id={data.anchorId} className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 md:mb-6">
            <span className="relative inline-block">
              {data.heading}
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-primary rounded-full"></span>
            </span>
          </h2>
          <p className="mt-0 text-base md:text-lg text-white/70 max-w-3xl mx-auto">
            {data.subheading}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-xl bg-[#0B0B0B] border border-white/10 hover:border-primary/50 shadow-card p-6 flex flex-col h-full"
            >
              <h3 className="text-xl md:text-2xl leading-snug font-semibold">
                {item.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm md:text-base leading-relaxed text-white/80">
                {item.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-auto pt-5 space-y-2 text-sm md:text-base">
                <div className="rounded-lg bg-white/5 border border-white/10 px-4 py-2">
                  {item.highlight1}
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 px-4 py-2">
                  {item.highlight2}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#cena"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium hover:shadow-[0_0_30px_rgba(11,92,249,0.5)] transition-shadow"
          >
            {data.ctaBelow}
          </a>
        </div>
      </div>
    </section>
  );
}


