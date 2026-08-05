import { NextResponse } from "next/server";
import { updateLibraryEntryStatus } from "@/lib/app-services";

export async function PATCH(request: Request, { params }: { params: Promise<{ entryId: string }> }) {
  try {
    const body: unknown = await request.json(); const value = typeof body === "object" && body ? (body as { status?: unknown }).status : undefined;
    if (value !== null && typeof value !== "string") throw new Error("INVALID_STATUS");
    const data = await updateLibraryEntryStatus((await params).entryId, value);
    return data ? NextResponse.json({ data, message: "Durum kaydedildi." }) : NextResponse.json({ error: "Kütüphane kaydı bulunamadı." }, { status: 404 });
  } catch (error) { return NextResponse.json({ error: error instanceof Error && error.message === "INVALID_STATUS" ? "Geçerli bir durum seçin." : "Durum kaydedilemedi." }, { status: error instanceof Error && error.message === "INVALID_STATUS" ? 400 : 500 }); }
}
