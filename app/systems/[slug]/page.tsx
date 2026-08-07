import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import CaseStudyPage from "./CaseStudyPage";
import type { Metadata } from "next";

// Generate static pages for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Nyasa Lohiya`,
    description: project.description,
  };
}

export default async function SystemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
