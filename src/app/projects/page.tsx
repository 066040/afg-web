import ProjectsView from "@/components/ProjectsView";
import { projectsMeta } from "@/lib/meta";

export const metadata = projectsMeta("en");

export default function Page() {
  return <ProjectsView lang="en" />;
}
