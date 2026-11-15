import ProjectsView from "@/components/ProjectsView";
import { projectsMeta } from "@/lib/meta";

export const metadata = projectsMeta("tr");

export default function Page() {
  return <ProjectsView lang="tr" />;
}
