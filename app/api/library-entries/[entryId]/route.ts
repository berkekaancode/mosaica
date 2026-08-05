import { NextResponse } from "next/server";
import { getLibraryEntryDetail, updateLibraryEntryRating } from "@/lib/app-services";

type Context = { params: Promise<{ entryId: string }> };

export async function GET(_: Request, { params }: Context) {
  try {
    const entry = await getLibraryEntryDetail((await params).entryId);
    return entry ? NextResponse.json({ data: entry }) : NextResponse.json({ error: "Kütüphane kaydı bulunamadı." }, { status: 404 });
  } catch {
    return NextResponse.json({ error: "Kütüphane kaydı yüklenemedi." }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: Context) {
  try {
    const body: unknown = await request.json();
    const rating = typeof body === "object" && body !== null ? (body as { rating?: unknown }).rating : undefined;
    if (typeof rating !== "number") return NextResponse.json({ error: "Puan 0,0 ile 10,0 arasında, en fazla bir ondalık basamakla girilmelidir." }, { status: 400 });
    const entry = await updateLibraryEntryRating((await params).entryId, rating);
    return entry ? NextResponse.json({ data: entry, message: "Puan kaydedildi." }) : NextResponse.json({ error: "Kütüphane kaydı bulunamadı." }, { status: 404 });
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_RATING") return NextResponse.json({ error: "Puan 0,0 ile 10,0 arasında, en fazla bir ondalık basamakla girilmelidir." }, { status: 400 });
    return NextResponse.json({ error: "Puan kaydedilemedi." }, { status: 500 });
  }
}
