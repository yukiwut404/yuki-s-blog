import { cache } from "react";
import { getProjectMarkdown } from "@/lib/project-markdown";
import { getBlogMarkdown } from "@/lib/blog-markdown";
import { about, certifications, education, experiences, hero, posts, projects, siteSettings, skills } from "./seed";
import type { AdjacentProjects, BlogPost, Certification, Education, Experience, FeaturedProject, Hero, Project, PublicBlogPost, PublicProject, SiteSettings, Skill, AboutPage } from "./types";

export async function getAboutPageIntro(): Promise<AboutPage | null> { return about; }
export async function getHero(): Promise<Hero | null> { return hero; }

export async function getPublishedProjects(): Promise<PublicProject[]> {
  return projects.filter(p => p.status === "PUBLISHED").sort((a,b) => a.displayOrder-b.displayOrder);
}
export async function getFeaturedProjects(limit=4): Promise<FeaturedProject[]> {
  return projects.filter(p => p.status === "PUBLISHED" && p.featured).sort((a,b)=>a.displayOrder-b.displayOrder).slice(0,limit);
}
export const getProjectBySlug = cache(async (slug:string): Promise<Project|null> => {
  const project = projects.find(p => p.status === "PUBLISHED" && p.slug === slug);
  if (!project) return null;
  const markdown = await getProjectMarkdown(slug);
  if (!markdown) return project;
  return { ...project, description: markdown.content, descriptionVi: markdown.contentVi ?? null, problem: markdown.problem ?? null, solution: markdown.solution ?? null, problemVi: markdown.problemVi ?? null, solutionVi: markdown.solutionVi ?? null };
});
export async function getPublishedProjectSlugs() { return projects.filter(p=>p.status==="PUBLISHED").map(p=>({slug:p.slug})); }
export async function getPublishedProjectSitemapEntries() { return projects.filter(p=>p.status==="PUBLISHED").map(p=>({slug:p.slug,updatedAt:p.updatedAt})); }
export async function getAdjacentProjects(currentOrder:number): Promise<AdjacentProjects> {
  const published = projects.filter(p=>p.status==="PUBLISHED").sort((a,b)=>a.displayOrder-b.displayOrder);
  const index = published.findIndex(p=>p.displayOrder===currentOrder);
  const prev=published[index-1], next=published[index+1];
  return {
    prev: prev ? {slug:prev.slug,title:prev.title,titleJa:prev.titleJa ?? null,titleVi:prev.titleVi ?? null}:null,
    next: next ? {slug:next.slug,title:next.title,titleJa:next.titleJa ?? null,titleVi:next.titleVi ?? null}:null,
  };
}
export async function getPublishedPosts(limit?:number): Promise<PublicBlogPost[]> {
  const result=posts.filter(p=>p.status==="PUBLISHED").sort((a,b)=>(b.publishedAt?.getTime()??0)-(a.publishedAt?.getTime()??0));
  return limit ? result.slice(0,limit) : result;
}
export async function getRecentPosts(limit=3) { return getPublishedPosts(limit); }
export const getPostBySlug = cache(async (slug:string): Promise<BlogPost|null> => {
  const post = posts.find(p=>p.status === "PUBLISHED" && p.slug === slug);
  if (!post) return null;
  const markdown = await getBlogMarkdown(slug);
  if (!markdown) return post;
  return {
    ...post,
    title: markdown.title ?? post.title,
    excerpt: markdown.excerpt ?? post.excerpt,
    content: markdown.content,
    contentVi: markdown.contentVi ?? null,
    titleVi: markdown.titleVi ?? null,
    excerptVi: markdown.excerptVi ?? null,
    tags: markdown.tags ?? post.tags,
    publishedAt: markdown.date ? new Date(`${markdown.date}T00:00:00`) : post.publishedAt,
    readTime: Math.max(1, Math.ceil(markdown.content.trim().split(/\s+/).length / 200)),
  };
});
export async function getPublishedPostSlugs() { return posts.filter(p=>p.status==="PUBLISHED").map(p=>({slug:p.slug})); }
export async function getPublishedPostSitemapEntries() { return posts.filter(p=>p.status==="PUBLISHED").map(p=>({slug:p.slug,updatedAt:p.updatedAt})); }
export async function getSkills(): Promise<Skill[]> { return skills.filter(s=>s.visible).sort((a,b)=>a.displayOrder-b.displayOrder); }
export async function getSkillCategories(): Promise<string[]> { return [...new Set(skills.filter(s=>s.visible).sort((a,b)=>a.displayOrder-b.displayOrder).map(s=>s.category))]; }
export async function getExperiences(): Promise<Experience[]> { return experiences.filter(e=>e.visible).sort((a,b)=>a.displayOrder-b.displayOrder); }
export async function getEducation(): Promise<Education[]> { return education.filter(e=>e.visible).sort((a,b)=>a.displayOrder-b.displayOrder); }
export async function getCertifications(): Promise<Certification[]> { return certifications.filter(c=>c.visible).sort((a,b)=>a.displayOrder-b.displayOrder); }
export const getSiteSettings = cache(async (): Promise<SiteSettings|null> => siteSettings);
