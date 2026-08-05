import { NextResponse } from "next/server";
import { updateLibraryEntryAppreciationLevel } from "@/lib/app-services";

export async function PATCH(request: Request, { params }: { params: Promise<{ entryId: string }> }) {
  try {
    const body: unknown = await request.json(); const value = typeof body === "object" && body ? (body as { appreciationLevel?: unknown }).appreciationLevel : undefined;
    if (typeof value !== "string") throw new Error("INVALID_APPRECIATION_LEVEL");
    const data = await updateLibraryEntryAppreciationLevel((await params).entryId, value);
    return data ? NextResponse.json({ data, message: "Beğeni düzeyi kaydedildi." }) : NextResponse.json({ error: "Kütüphane kaydı bulunamadı." }, { status: 404 });
  } catch (error) { return NextResponse.json({ error: error instanceof Error && error.message === "INVALID_APPRECIATION_LEVEL" ? "Geçerli bir beğeni düzeyi seçin." : "Beğeni düzeyi kaydedilemedi." }, { status: error instanceof Error && error.message === "INVALID_APPRECIATION_LEVEL" ? 400 : 500 }); }
}
