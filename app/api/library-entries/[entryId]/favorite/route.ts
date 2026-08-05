import { NextResponse } from "next/server";
import { updateLibraryEntryFavorite } from "@/lib/app-services";

export async function PATCH(request: Request, { params }: { params: Promise<{ entryId: string }> }) {
  try {
    const body: unknown = await request.json(); const value = typeof body === "object" && body ? (body as { favorite?: unknown }).favorite : undefined;
    const data = await updateLibraryEntryFavorite((await params).entryId, value);
    return data ? NextResponse.json({ data, message: "Favori tercihi kaydedildi." }) : NextResponse.json({ error: "Kütüphane kaydı bulunamadı." }, { status: 404 });
  } catch (error) { return NextResponse.json({ error: error instanceof Error && error.message === "INVALID_FAVORITE" ? "Favori tercihi doğru biçimde gönderilmelidir." : "Favori tercihi kaydedilemedi." }, { status: error instanceof Error && error.message === "INVALID_FAVORITE" ? 400 : 500 }); }
}
