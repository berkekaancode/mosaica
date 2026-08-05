import { NextResponse } from "next/server";
import { getConsumptionHistory, recordConsumptionEvent } from "@/lib/app-services";
import { parseEventDate, validateLibraryEntryId } from "@/src/application/library-entry/consumption-history";

type Context = { params: Promise<{ entryId: string }> };
const invalid = (message: string) => NextResponse.json({ error: message }, { status: 400 });
const errorResponse = (error: unknown) => error instanceof Error && error.message === "INVALID_ENTRY_ID" ? invalid("Geçerli bir kütüphane kaydı seçin.") : error instanceof Error && error.message === "INVALID_EVENT_DATE" ? invalid("Geçerli bir deneyim tarihi girin.") : NextResponse.json({ error: "Deneyim geçmişi işlenemedi." }, { status: 500 });

export async function GET(_: Request, { params }: Context) {
  try { const entryId = (await params).entryId; validateLibraryEntryId(entryId); const data = await getConsumptionHistory(entryId); return data ? NextResponse.json({ data }) : NextResponse.json({ error: "Kütüphane kaydı bulunamadı." }, { status: 404 }); } catch (error) { return errorResponse(error); }
}
export async function POST(request: Request, { params }: Context) {
  try {
    const body: unknown = await request.json(); const values = typeof body === "object" && body ? body as { occurredAt?: unknown; note?: unknown } : {};
    if (typeof values.occurredAt !== "string") return invalid("Geçerli bir deneyim tarihi girin.");
    if (values.note !== undefined) return invalid("Deneyim notu bu sürümde desteklenmiyor.");
    parseEventDate(values.occurredAt); const entryId = (await params).entryId; validateLibraryEntryId(entryId); const recorded = await recordConsumptionEvent(entryId, values.occurredAt);
    return recorded ? NextResponse.json({ message: "Deneyim kaydedildi." }, { status: 201 }) : NextResponse.json({ error: "Kütüphane kaydı bulunamadı." }, { status: 404 });
  } catch (error) { return errorResponse(error); }
}
