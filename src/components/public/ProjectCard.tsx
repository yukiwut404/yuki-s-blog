"use client";

import { useLocale } from "@/hooks/use-locale";
import { t, ui } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    shortDescription: string;
    techTags: string[];
    liveUrl?: string | null;
    repoUrl?: string | null;
    titleJa?: string | null;
    titleVi?: string | null;
    shortDescriptionJa?: string | null;
    shortDescriptionVi?: string | null;
  };
  priority?: boolean;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({
  project,
  priority = false,
  index = 0,
  featured = false,
}: ProjectCardProps) {
  const { locale } = useLocale();

  return (
    <article
      className={cn(
        "card-interactive group rounded-xl border border-border bg-card stagger-item",
        featured && "sm:flex sm:flex-row"
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Content */}
      <div className={cn("p-5", featured && "sm:flex sm:flex-col sm:justify-center sm:p-8")}>
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-[var(--accent-signature)] transition-colors duration-200">
            {t(project, "title", locale)}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {t(project, "shortDescription", locale)}
        </p>

        {/* Tech Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.techTags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {project.techTags.length > 5 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted text-xs text-muted-foreground">
              +{project.techTags.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-4 flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5 arrow-icon" />
              {ui("liveDemo", locale)}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              {ui("sourceCode", locale)}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
