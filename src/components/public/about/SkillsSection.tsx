"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocale } from "@/hooks/use-locale";
import { localizeSkillCategory, ui } from "@/lib/i18n";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMermaid,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Wrench } from "lucide-react";
import type { IconType } from "react-icons";
import type { Skill } from "@/lib/data/types";

interface SkillsSectionProps {
  skills: Skill[];
  categoryOrder?: string[];
}

const skillIcons: Record<string, IconType> = {
  html: SiHtml5,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  flutter: SiFlutter,
  nodejs: SiNodedotjs,
  express: SiExpress,
  figma: SiFigma,
  jira: SiJira,
  git: SiGit,
  github: SiGithub,
  mysql: SiMysql,
  mongodb: SiMongodb,
  mermaid: SiMermaid,
  css: SiCss,
};

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon ? skillIcons[skill.icon] : null;

  return (
    <div className="card-interactive flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-3 text-center">
      <div className="flex h-8 w-8 items-center justify-center">
        {skill.iconUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={skill.iconUrl}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-7 w-7 object-contain"
          />
        ) : Icon ? (
          <Icon className="h-7 w-7" aria-hidden="true" />
        ) : skill.icon ? (
          <span className="text-2xl leading-none" aria-hidden="true">
            {skill.icon}
          </span>
        ) : (
          <Wrench
            className="h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
        )}
      </div>

      <span className="w-full text-wrap text-center text-xs font-medium text-foreground">
        {skill.name}
      </span>
    </div>
  );
}

export function SkillsSection({
  skills,
  categoryOrder,
}: SkillsSectionProps) {
  const { locale } = useLocale();

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const category = skill.category;

    if (!acc[category]) acc[category] = [];

    acc[category].push(skill);

    return acc;
  }, {});

  const sortedCategories = Object.entries(grouped).sort(([a], [b]) => {
    if (!categoryOrder?.length) return a.localeCompare(b);

    const ia = categoryOrder.indexOf(a);
    const ib = categoryOrder.indexOf(b);

    return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
  });

  if (sortedCategories.length === 0) return null;

  const defaultTab = sortedCategories[0][0];

  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {ui("skills", locale)}
      </h2>

      <Tabs defaultValue={defaultTab}>
        <div className="overflow-x-auto">
          <TabsList
            variant="line"
            className="mb-6 w-full justify-start border-b border-border pb-0"
          >
            {sortedCategories.map(([category]) => (
              <TabsTrigger
                key={category}
                value={category}
                className="shrink-0 whitespace-nowrap px-3 py-2 text-sm"
              >
                {localizeSkillCategory(category, locale)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {sortedCategories.map(([category, categorySkills]) => (
          <TabsContent
            key={category}
            value={category}
            className="animate-in fade-in-0 duration-200"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {categorySkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}