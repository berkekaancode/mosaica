"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Icon } from "./ui/icons";
import { Skeleton } from "./ui/primitives";

type MediaType = "MOVIE" | "TV_SERIES" | "GAME" | "BOOK";
type Entry = { id: string; title: string; mediaType: MediaType; coverReference: string | null; rating: number | null };
type HomeData = { counts: Record<MediaType, number>; entriesByType: Record<MediaType, Entry[]>; collections: { id: string; name: string; entryCount: number; previews: Pick<Entry, "title" | "mediaType" | "coverReference">[] }[]; choicePool: Entry[]; monthly: { eventCount: number; consumedEntryCount: number; breakdown: Record<MediaType, number> } };

const media = {
  MOVIE: { label: "Film", plural: "Filmler", icon: "film" as const, shape: "movie" }, TV_SERIES: { label: "Dizi", plural: "Diziler", icon: "series" as const, shape: "series" }, GAME: { label: "Oyun", plural: "Oyunlar", icon: "game" as const, shape: "game" }, BOOK: { label: "Kitap", plural: "Kitaplar", icon: "book" as const, shape: "book" },
};
const types: MediaType[] = ["MOVIE", "TV_SERIES", "GAME", "BOOK"];
const libraryUrl = (type: MediaType) => `/library?mediaType=${type}`;

function Artwork({ entry, compact = false }: { entry: Pick<Entry, "title" | "mediaType" | "coverReference">; compact?: boolean }) {
  const [failed, setFailed] = useState(false); const type = media[entry.mediaType];
  return <div className={`home-artwork home-artwork--${type.shape} ${compact ? "home-artwork--compact" : ""}`}>{entry.coverReference && !failed ? <img src={entry.coverReference} alt="" onError={() => setFailed(true)} /> : <div className="home-artwork__fallback" aria-hidden="true"><span>{type.label}</span><strong>{entry.title}</strong></div>}</div>;
}

function EmptyMediaState({ type }: { type: MediaType }) { const copy = media[type]; return <div className="home-inline-empty"><span className="home-inline-empty__icon"><Icon name={copy.icon} /></span><div><strong>Henüz {copy.label.toLocaleLowerCase("tr-TR")} eklemedin.</strong><p>Arşivine eklediklerin burada yerini alacak.</p></div><Link className="ui-button ui-button--secondary home-inline-empty__action" href="/discover">{copy.label} keşfet <span aria-hidden="true">→</span></Link></div>; }

function HomeSkeleton() { return <main className="home-page" aria-label="Ana sayfa yükleniyor"><section className="home-hero"><Skeleton className="home-skeleton--eyebrow" /><Skeleton className="home-skeleton--title" /><Skeleton className="home-skeleton--copy" /></section><div className="home-counts">{types.map((type) => <Skeleton key={type} className="home-skeleton--count" />)}</div>{types.map((type) => <section className="home-section" key={type}><Skeleton className="home-skeleton--heading" /><div className={`home-media-row home-media-row--${media[type].shape}`}>{[1, 2, 3, 4].map((n) => <Skeleton key={n} className="home-skeleton--art" />)}</div></section>)}</main>; }

function MediaSection({ type, entries }: { type: MediaType; entries: Entry[] }) { const copy = media[type]; return <section className="home-section" aria-labelledby={`home-${type}`}><header className="home-section__header"><h2 id={`home-${type}`}>Son Eklenen {copy.plural}</h2><Link className="home-see-all" href={libraryUrl(type)}>Tümünü Gör <span aria-hidden="true">→</span></Link></header>{entries.length ? <div className={`home-media-row home-media-row--${copy.shape}`}>{entries.map((entry) => <Link className="home-media-card" href={`/library/${entry.id}`} key={entry.id}><Artwork entry={entry} /><span className="home-media-card__meta"><small>{copy.label}</small><strong>{entry.title}</strong>{entry.rating !== null && <em>★ {entry.rating.toFixed(1)}</em>}</span></Link>)}</div> : <EmptyMediaState type={type} />}</section>; }

function CollectionsSection({ collections }: { collections: HomeData["collections"] }) { return <section className="home-section" aria-labelledby="collections-heading"><header className="home-section__header"><h2 id="collections-heading">Koleksiyonlarım</h2><Link className="home-see-all" href="/collections">Tümünü Gör <span aria-hidden="true">→</span></Link></header>{collections.length ? <div className="home-collections">{collections.slice(0, 4).map((collection) => <Link className="home-collection" href={`/collections/${collection.id}`} key={collection.id}><div className="home-collection__art" aria-hidden="true">{collection.previews.length ? collection.previews.map((preview, index) => <Artwork entry={preview} compact key={`${preview.title}-${index}`} />) : <span>{collection.name.slice(0, 1)}</span>}</div><div><strong>{collection.name}</strong><small>{collection.entryCount} eser</small></div><span aria-hidden="true">→</span></Link>)}</div> : <div className="home-collection-empty"><div className="home-collection-empty__art"><span /><span /><span /></div><div><h3>İlk seçkini oluştur</h3><p>Sevdiğin hikâyeleri kendi dünyana göre bir araya getir.</p></div><Link className="ui-button ui-button--secondary" href="/collections">İlk koleksiyonunu oluştur <span aria-hidden="true">→</span></Link></div>}</section>; }

function ChoicePanel({ choice, hasMore, onRefresh }: { choice: Entry | undefined; hasMore: boolean; onRefresh: () => void }) { return <section className="home-choice" aria-labelledby="choice-heading"><div className="home-panel-heading"><div><p className="home-kicker">Arşivinden bir öneri</p><h2 id="choice-heading">Bugün Ne Seçsem?</h2></div><span className="home-panel-heading__mark" aria-hidden="true">✦</span></div>{choice ? <div className="home-choice__body"><Artwork entry={choice} /><div><small><Icon name={media[choice.mediaType].icon} /> {media[choice.mediaType].label}</small><h3>{choice.title}</h3>{choice.rating !== null && <p className="home-choice__rating">★ {choice.rating.toFixed(1)} kişisel puanın</p>}<Link href={`/library/${choice.id}`}>Detayına git <span aria-hidden="true">→</span></Link></div></div> : <div className="home-choice__empty"><div className="home-choice__empty-icons" aria-hidden="true">{types.map((type) => <Icon key={type} name={media[type].icon} />)}</div><p>Arşivinden seçilecek ilk hikâye burada seni bekliyor.</p><Link className="ui-button ui-button--secondary" href="/discover">İçerik keşfet <span aria-hidden="true">→</span></Link></div>}{hasMore && <Button variant="ghost" className="home-choice__refresh" onClick={onRefresh}>Başka öner <span aria-hidden="true">→</span></Button>}</section>; }

function MonthlyPanel({ monthly }: { monthly: HomeData["monthly"] }) { const max = Math.max(...types.map((type) => monthly.breakdown[type]), 1); const hasActivity = monthly.eventCount > 0; return <section className="home-monthly" aria-labelledby="monthly-heading"><div className="home-panel-heading"><div><p className="home-kicker">Bu ayın izi</p><h2 id="monthly-heading">Bu Ay Kültürüm</h2></div></div><div className={`home-monthly__visual ${hasActivity ? "" : "home-monthly__visual--empty"}`}><div className="home-monthly__ring"><strong>{monthly.eventCount}</strong><span>deneyim</span></div><div className="home-monthly__bars" aria-hidden="true">{types.map((type) => <span key={type} style={{ height: `${hasActivity ? Math.max(18, Math.round((monthly.breakdown[type] / max) * 100)) : 22}%` }} />)}</div></div>{hasActivity ? <div className="home-monthly__summary"><p><strong>{monthly.consumedEntryCount}</strong> farklı eserle bu ayına iz bıraktın.</p><div className="home-breakdown">{types.filter((type) => monthly.breakdown[type]).map((type) => <span key={type}>{media[type].label}<b>{monthly.breakdown[type]}</b></span>)}</div></div> : <p className="home-monthly__empty">Deneyimlerini kaydettikçe bu ayın kültür ritmi burada oluşacak.</p>}</section>; }

export default function Home() {
  const [data, setData] = useState<HomeData | null>(null); const [error, setError] = useState(false); const [choiceIndex, setChoiceIndex] = useState(0);
  const load = async () => { setError(false); try { const response = await fetch("/api/home"); const body = await response.json(); if (!response.ok) throw new Error(); setData(body.data); setChoiceIndex(0); } catch { setError(true); } };
  useEffect(() => { const timer = setTimeout(() => { void load(); }, 0); return () => clearTimeout(timer); }, []);
  if (!data && !error) return <HomeSkeleton />;
  if (!data) return <main className="home-page"><section className="state-container state-container--error" role="alert"><h2>Ana sayfanı şu an açamadık</h2><p>Bağlantını kontrol edip yeniden deneyebilirsin.</p><Button onClick={() => { void load(); }}>Tekrar dene</Button></section></main>;
  const choice = data.choicePool[choiceIndex % Math.max(data.choicePool.length, 1)]; const total = types.reduce((sum, type) => sum + data.counts[type], 0);
return (
  <main className="home-page">
    <section className="home-hero">
      <div className="home-hero__content">
        <p className="home-kicker">Kişisel kültür arşivin</p>

        <h1>
          Kendi <em>Dünyana</em>
          <br />
          Hoş Geldin
        </h1>

        <p className="home-hero__copy">
          İzlediğin, okuduğun, oynadığın ve seni etkileyen her şey artık tek bir yerde.
        </p>

        <div className="home-hero__actions">
          <Link className="ui-button ui-button--primary" href="/discover">
            Keşfet <span aria-hidden="true">→</span>
          </Link>

          <Link className="ui-button ui-button--secondary" href="/library">
            Arşivime Git
          </Link>
        </div>
      </div>

      <p className="home-hero__archive-count">
        <strong>{total}</strong>
        eser, sana ait bir dünya.
      </p>
    </section>

    <nav className="home-counts" aria-label="Arşiv türleri">
      {types.map((type) => (
        <Link
          key={type}
          href={libraryUrl(type)}
          className="home-count-card"
        >
          <Icon name={media[type].icon} />

          <span>
            <strong>{data.counts[type]}</strong>
            <small>{media[type].label}</small>
          </span>

          <span aria-hidden="true">→</span>
        </Link>
      ))}
    </nav>

    {types.map((type) => (
      <MediaSection
        key={type}
        type={type}
        entries={data.entriesByType[type]}
      />
    ))}

    <CollectionsSection collections={data.collections} />

    <div className="home-lower-grid">
      <ChoicePanel
        choice={choice}
        hasMore={data.choicePool.length > 1}
        onRefresh={() =>
          setChoiceIndex(
            (index) => (index + 1) % data.choicePool.length
          )
        }
      />

      <MonthlyPanel monthly={data.monthly} />
    </div>
  </main>
);}