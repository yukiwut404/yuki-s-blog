import fs from "node:fs/promises";
import path from "node:path";

export type ProjectMarkdown = {
  content: string;
  contentVi?: string;
  problemVi?: string;
  solutionVi?: string;
  contentJa?: string;
  problem?: string;
  problemJa?: string;
  solution?: string;
  solutionJa?: string;
};

const root = path.join(process.cwd(), "src", "content", "projects");

function section(markdown: string, name: string, nextNames: string[] = []) {
  const names = [name, ...nextNames].join("|");
  const re = new RegExp(`^##\\s+(${name})(?:\\s*)$([\\s\\S]*?)(?=^##\\s+(?:${names})\\s*$|\\s*$)`, "mi");
  return markdown.match(re)?.[2]?.trim() || undefined;
}

export async function getProjectMarkdown(slug: string): Promise<ProjectMarkdown | null> {
  try {
    const file = await fs.readFile(path.join(root, `${slug}.md`), "utf8");
    const body = file.replace(/^---[\s\S]*?---\s*/m, "").trim();
    const problem = section(body, "Problem", ["Solution", "Details"]);
    const solution = section(body, "Solution", ["Details"]);
    const details = section(body, "Details");
    let contentVi: string | undefined; let problemVi: string | undefined; let solutionVi: string | undefined;
    try {
      const viFile = await fs.readFile(path.join(root, `${slug}.vi.md`), "utf8");
      const viBody = viFile.replace(/^---[\s\S]*?---\s*/m, "").trim();
      problemVi = section(viBody, "Problem", ["Solution", "Details"]);
      solutionVi = section(viBody, "Solution", ["Details"]);
      contentVi = section(viBody, "Details") ?? viBody;
    } catch {}
    return { content: details ?? body, problem, solution, contentVi, problemVi, solutionVi };
  } catch {
    return null;
  }
}
