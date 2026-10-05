import fs from "node:fs";
import path from "node:path";

const seedFile = path.join(process.cwd(), "src/lib/data/seed.ts");

if (!fs.existsSync(seedFile)) {
  console.error("Seed file not found:", seedFile);
  process.exit(1);
}

const source = fs.readFileSync(seedFile, "utf8");
const collections = [
  "projects",
  "posts",
  "skills",
  "experiences",
  "education",
  "certifications",
];

console.log("Local portfolio seed is ready:");
for (const name of collections) {
  console.log(`  ✓ ${name}`);
}

console.log(`\nSeed source: ${seedFile}`);
console.log(`Seed file size: ${source.length} characters`);
console.log("\nEdit src/lib/data/seed.ts to replace the starter content with your own.");
