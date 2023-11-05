// Components
import Layout from "@/ui/Layout";
import Box from "@/ui/Box";
import Section from "@/ui/Section";
import Image from "next/image";

// Data
import { works } from "@/data/works";
import { social } from "@/data/social";
import { ArrowUpRightIcon } from "@/ui/Icon";

export default function Home() {
  return (
    <Layout>
      <Box className="bg-hero-gradient dark:bg-hero-gradient-dark">
        <Section>
          <h1 className="font-serif text-xl lg:text-2xl">
            <span className="font-medium text-theme-heading">Tarık Coşkun.</span> <br className="lg:hidden" /> Developer & Designer.
          </h1>
          <p className="mt-4">
            Front-end developer passionate about crafting experiences with polished interfaces. Always seeking out new opportunities. Reach
            me at{" "}
            <a href="mailto:tarikcskun@gmail.com" target="_blank" rel="noopener noreferrer" className="link">
              hi@tarikcoskun.com
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("https") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 rounded-full bg-theme-surface p-1.5 pr-3 text-theme-heading transition-colors hover:bg-color-neutral-800 hover:text-color-neutral-100"
              >
                <link.icon width={18} height={18} /> <span className="text-sm font-medium leading-none">{link.label}</span>
              </a>
            ))}
          </div>
        </Section>
      </Box>

      <Box className="overflow-hidden">
        <Section>
          <h2 className="font-serif text-xl font-medium text-theme-heading">Experiences</h2>
          <div className="mt-6 flex flex-col gap-y-12">
            {works.map((work, idx) => (
              <Work {...work} key={idx} />
            ))}
          </div>
        </Section>
      </Box>
    </Layout>
  );
}

function Work(work: (typeof works)[number]) {
  return (
    <article className="flex items-start gap-x-4">
      <a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative h-12 w-12 shrink-0 overflow-hidden rounded-lg ring-1 ring-theme-outline ring-offset-2 ring-offset-theme-background"
      >
        <Image src={work.image} alt={work.title} width={48} height={48} className="h-full w-full rounded-lg" />
        <div className="bg-black/50 absolute inset-0 flex items-center justify-center rounded-lg opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRightIcon width={24} height={24} className="text-theme-heading" />
        </div>
      </a>
      <div className="flex flex-col gap-y-2">
        <h3 className="leading-none">
          <a href={work.link} target="_blank" rel="noopener noreferrer" className="link font-medium">
            {work.title}
          </a>
        </h3>
        <span className="text-sm leading-none text-theme-subtext">
          {new Date(work.startDate).getFullYear()}-{new Date(work.endDate).getFullYear().toString().substring(2)}
        </span>
        <p>{work.description}</p>
      </div>
    </article>
  );
}