import { NextResponse } from "next/server";
import { requireTutorinAdmin } from "@/lib/supabase-server";

export async function POST(request: Request) {
  const { supabase, user, profile } = await requireTutorinAdmin();
  if (!user || !profile) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const payload = {
    slug: String(body.slug || "").trim(),
    title: String(body.title || "").trim(),
    description: String(body.description || "").trim(),
    category: String(body.category || "").trim(),
    price: Number(body.price || 0),
    purchase_url: String(body.purchaseUrl || "").trim(),
    status: body.status === "published" ? "published" : "draft",
  };
  if (!payload.slug || !payload.title || !payload.purchase_url) return NextResponse.json({ error: "Slug, judul, dan link beli wajib diisi." }, { status: 400 });
  const { data, error } = await supabase.from("ebooks").upsert(payload, { onConflict: "slug" }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ebook: data });
}
