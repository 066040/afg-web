import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { PROJECTS, getProject } from "@/data/projects";
import { projectMeta } from "@/lib/meta";

const LANG = "tr" as const;
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  return projectMeta((await params).slug, LANG);
}

export default async function Page({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  return <ProjectDetail p={p} lang={LANG} />;
}
