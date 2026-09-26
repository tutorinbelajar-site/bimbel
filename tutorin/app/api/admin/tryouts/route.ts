import { NextResponse } from "next/server";
import { requireTutorinAdmin } from "@/lib/supabase-server";

function isSafeRepoUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "github.com";
  } catch {
    return false;
  }
}

function isSafePath(value: string) {
  return value.startsWith("public/tryouts/") &&
    !value.includes("..") &&
    !value.startsWith("/") &&
    !value.includes("\\");
}

function isSafeDeploymentUrl(value: string) {
  if (value.startsWith("/tryouts/")) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const { supabase, user, profile } = await requireTutorinAdmin();
  if (!user || !profile) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const title = String(body.title || "").trim();
  const slug = String(body.slug || "").trim();
  const githubRepoUrl = String(body.githubRepoUrl || "").trim();
  const githubBranch = String(body.githubBranch || "main").trim() || "main";
  const githubPath = String(body.githubPath || "").trim();
  const deploymentUrl = String(body.deploymentUrl || "").trim();

  if (!title || !slug) return NextResponse.json({ error: "Nama TO dan slug wajib diisi." }, { status: 400 });
  if (!isSafeRepoUrl(githubRepoUrl)) return NextResponse.json({ error: "Repository harus berupa URL GitHub HTTPS yang valid." }, { status: 400 });
  if (!isSafePath(githubPath)) return NextResponse.json({ error: "Folder TO harus berada di public/tryouts/ dan tidak boleh keluar dari folder tersebut." }, { status: 400 });
  if (!isSafeDeploymentUrl(deploymentUrl)) return NextResponse.json({ error: "URL TO harus berupa /tryouts/... atau URL HTTPS." }, { status: 400 });

  const payload = {
    slug,
    title,
    test_type: "tryout",
    subject: String(body.category || "").trim(),
    duration_minutes: Number(body.duration || 0) || null,
    source_type: "github",
    github_repo_url: githubRepoUrl,
    github_branch: githubBranch,
    github_path: githubPath,
    deployment_url: deploymentUrl,
    status: "draft",
  };

  const { data, error } = await supabase.from("tests").upsert(payload, { onConflict: "slug" }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json({ test: data });
}
