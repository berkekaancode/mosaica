import { NextResponse } from "next/server";
import { updateLibraryEntryPersonalNote } from "@/lib/app-services";

export async function PATCH(request: Request, { params }: { params: Promise<{ entryId: string }> }) {
  try {
    const body: unknown = await request.json(); const value = typeof body === "object" && body ? (body as { personalNote?: unknown }).personalNote : undefined;
    if (value !== null && typeof value !== "string") throw new Error("INVALID_PERSONAL_NOTE");
    const data = await updateLibraryEntryPersonalNote((await params).entryId, value);
    return data ? NextResponse.json({ data, message: "Kişisel not kaydedildi." }) : NextResponse.json({ error: "Kütüphane kaydı bulunamadı." }, { status: 404 });
  } catch (error) { return NextResponse.json({ error: error instanceof Error && error.message === "INVALID_PERSONAL_NOTE" ? "Kişisel not metin olmalıdır." : "Kişisel not kaydedilemedi." }, { status: error instanceof Error && error.message === "INVALID_PERSONAL_NOTE" ? 400 : 500 }); }
}
