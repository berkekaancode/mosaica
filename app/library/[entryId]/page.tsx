"use client";

import { FormEvent, useEffect, useState } from "react";

type Detail = { id: string; content: { title: string; mediaType: string; originalTitle?: string; releaseYear?: number; synopsis?: string }; rating: number | null };
const mediaLabels: Record<string, string> = { MOVIE: "Film", TV_SERIES: "Dizi", GAME: "Oyun", BOOK: "Kitap" };

export default function LibraryEntryPage({ params }: { params: Promise<{ entryId: string }> }) {
  const [detail, setDetail] = useState<Detail | null>(null);
  const [rating, setRating] = useState("");
  const [state, setState] = useState<"loading" | "ready" | "notFound" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => { void params.then(async ({ entryId }) => { try { const response = await fetch(`/api/library-entries/${entryId}`); const body = await response.json(); if (response.status === 404) { setState("notFound"); return; } if (!response.ok) { setState("error"); return; } const data = body.data as Detail; setDetail(data); setRating(data.rating === null ? "" : data.rating.toFixed(1)); setState("ready"); } catch { setState("error"); } }); }, [params]);
  async function save(event: FormEvent) { event.preventDefault(); if (!detail) return; setMessage(""); const parsed = Number(rating.replace(",", ".")); if (!/^\d+(?:[.,]\d)?$/.test(rating) || !Number.isFinite(parsed) || parsed < 0 || parsed > 10) { setMessage("Puan 0,0 ile 10,0 arasında, en fazla bir ondalık basamakla girilmelidir."); return; } try { const response = await fetch(`/api/library-entries/${detail.id}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ rating: parsed }) }); const body = await response.json(); if (!response.ok) { setMessage(body.error ?? "Puan kaydedilemedi."); return; } setDetail(body.data); setRating(body.data.rating.toFixed(1)); setMessage("Puan kaydedildi."); } catch { setMessage("Puan kaydedilemedi."); } }
  if (state === "loading") return <main><p role="status">Kütüphane kaydı yükleniyor…</p></main>;
  if (state === "notFound") return <main><h1>Kayıt bulunamadı</h1><p>İstediğiniz kütüphane kaydı bulunamadı.</p></main>;
  if (state === "error") return <main><h1>Bir hata oluştu</h1><p>Kütüphane kaydı yüklenemedi. Lütfen yeniden deneyin.</p></main>;
  if (!detail) return null;
  return <main><p>Kütüphane</p><h1>{detail.content.title}</h1><p>{mediaLabels[detail.content.mediaType] ?? detail.content.mediaType}{detail.content.releaseYear ? ` · ${detail.content.releaseYear}` : ""}</p>{detail.content.originalTitle && <p>Özgün adı: {detail.content.originalTitle}</p>}{detail.content.synopsis && <p>{detail.content.synopsis}</p>}<section><h2>Puanım</h2><p>Mevcut puan: {detail.rating === null ? "Henüz puanlanmadı" : detail.rating.toFixed(1)}</p><form onSubmit={save}><label htmlFor="rating">0,0–10,0<input id="rating" inputMode="decimal" value={rating} onChange={(event) => setRating(event.target.value)} placeholder="Örn. 8,5" aria-describedby="rating-help" /></label><small id="rating-help">En fazla bir ondalık basamak kullanın.</small><button type="submit">Puanı kaydet</button></form>{message && <p role="status">{message}</p>}</section></main>;
}
