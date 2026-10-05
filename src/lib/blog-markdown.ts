import fs from "node:fs/promises";
import path from "node:path";

export type BlogMarkdown = {
  content: string;
  contentVi?: string;
  titleVi?: string;
  excerptVi?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  tags?: string[];
};

const root = path.join(process.cwd(), "src", "content", "blog");

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) return { body: raw.trim(), meta: {} as Record<string, string | string[]> };

  const meta: Record<string, string | string[]> = {};
  let currentArray: string[] | null = null;
  let currentKey = "";

  for (const line of match[1].split(/\r?\n/)) {
    const arrayItem = line.match(/^\s*-\s*["']?(.*?)["']?\s*$/);
    if (currentArray && arrayItem) {
      currentArray.push(arrayItem[1]);
      continue;
    }

    const pair = line.match(/^([\w-]+):\s*(.*)$/);
    if (!pair) continue;
    const [, key, rawValue] = pair;
    if (rawValue.trim() === "") {
      currentKey = key;
      currentArray = [];
      meta[key] = currentArray;
      continue;
    }

    currentArray = null;
    currentKey = key;
    meta[key] = rawValue.trim().replace(/^['"]|['"]$/g, "");
  }

  return { body: raw.slice(match[0].length).trim(), meta };
}

export async function getBlogMarkdown(slug: string): Promise<BlogMarkdown | null> {
  try {
    const raw = await fs.readFile(path.join(root, `${slug}.md`), "utf8");
    const { body, meta } = parseFrontmatter(raw);
    let contentVi: string | undefined;
    let titleVi: string | undefined;
    let excerptVi: string | undefined;
    try {
      const viRaw = await fs.readFile(path.join(root, `${slug}.vi.md`), "utf8");
      const viParsed = parseFrontmatter(viRaw);
      contentVi = viParsed.body;
      titleVi = typeof viParsed.meta.title === "string" ? viParsed.meta.title : undefined;
      excerptVi = typeof viParsed.meta.excerpt === "string" ? viParsed.meta.excerpt : undefined;
    } catch {}
    return {
      content: body, contentVi, titleVi, excerptVi,
      title: typeof meta.title === "string" ? meta.title : undefined,
      excerpt: typeof meta.excerpt === "string" ? meta.excerpt : undefined,
      date: typeof meta.date === "string" ? meta.date : undefined,
      tags: Array.isArray(meta.tags) ? meta.tags : undefined,
    };
  } catch {
    return null;
  }
}
