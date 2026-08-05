import { NextResponse } from "next/server"; import { getHomeSummary } from "@/lib/app-services";
export async function GET() { try { return NextResponse.json({ data: await getHomeSummary() }); } catch { return NextResponse.json({ error: "Ana sayfa özeti yüklenemedi." }, { status: 500 }); } }
