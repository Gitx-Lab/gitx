import { generateProject } from "./generate";

const name = process.argv[2];
const description = process.argv[3] || "Generated project";

if (!name) {
  console.error("Usage: node index.js <project-name> <description>");
  process.exit(1);
}

const result = generateProject({ name, description });

console.log("Project generated:");
console.log(result);
