import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { founder } from "@/data/about";
import { insights, MAX_INSIGHTS, MIN_INSIGHTS } from "@/data/insights";

/** Curated, verified posts only. Renders nothing at all below the minimum count. */
export const InsightsSection: React.FC = () => {
  if (insights.length < MIN_INSIGHTS) return null;

  const posts = insights.slice(0, MAX_INSIGHTS);
  const allByFounder = posts.every((p) => p.author === founder.name);

  return (
    <section aria-labelledby="insights-heading" className="w-full border-t border-line bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1336px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-5">
          <SectionLabel index="05">Insights</SectionLabel>
          <Heading as="h2" id="insights-heading" variant="heading-xl">
            Insights &amp; Perspectives
          </Heading>
          <p className="font-sans text-[17px] leading-relaxed text-ink-600">
            {allByFounder
              ? "Notes on organizational practice from Kenenét\u2019s Founder and Managing Director."
              : "Notes on organizational practice from Kenenét."}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.href}>
              <article className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-paper p-7 transition-colors hover:border-purple/40">
                <div className="space-y-4">
                  <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-600">
                    {post.platform} · {post.date}
                  </p>
                  <blockquote className="font-serif text-[1.2rem] leading-snug text-ink">{post.excerpt}</blockquote>
                  <p className="font-sans text-[14px] text-ink-600">{post.author}</p>
                </div>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-purple-700 underline underline-offset-4 hover:text-purple"
                >
                  Read on {post.platform}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
