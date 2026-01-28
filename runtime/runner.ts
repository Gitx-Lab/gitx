import { generateProject } from "../src/generate";

export function run(input: {
  name: string;
  description: string;
}) {
  return generateProject(input);
}
