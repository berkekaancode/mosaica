import { NextResponse } from "next/server";
import { createContent, listContents } from "@/lib/app-services";
export async function GET(request: Request) { return NextResponse.json({ data: await listContents(new URL(request.url).searchParams.get("q") ?? "") }); }
export async function POST(request: Request) { try { const body = await request.json(); if (typeof body.title !== "string" || !body.title.trim() || !["MOVIE","TV_SERIES","GAME","BOOK"].includes(body.mediaType)) return NextResponse.json({ error: "Geçerli bir başlık ve tür girin." }, { status: 400 }); return NextResponse.json({data:await createContent(body)},{status:201}); } catch { return NextResponse.json({ error: "İçerik kaydedilemedi." }, { status: 500 }); } }
