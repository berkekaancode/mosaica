"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BrandWordmark } from "./ui/brand-wordmark";
import { Icon, type IconName } from "./ui/icons";

const primaryLinks = [
  { href: "/", label: "Ana Sayfa", icon: "home" },
  { href: "/discover", label: "Keşfet", icon: "search" },
  { href: "/library?mediaType=MOVIE", label: "Film", icon: "film" },
  { href: "/library?mediaType=TV_SERIES", label: "Dizi", icon: "series" },
  { href: "/library?mediaType=GAME", label: "Oyun", icon: "game" },
  { href: "/library?mediaType=BOOK", label: "Kitap", icon: "book" },
] satisfies { href: string; label: string; icon: IconName }[];

function isCurrentPath(path: string, search: URLSearchParams, href: string) {
  const [route, query] = href.split("?");
  if (route === "/") return path === route;
  if (path !== route && !path.startsWith(`${route}/`)) return false;
  if (!query) return true;
  const expected = new URLSearchParams(query);
  return [...expected].every(([key, value]) => search.get(key) === value);
}

export function PrimaryNavigation() {
  const path = usePathname();
  const search = useSearchParams();

  return <>
    <aside className="app-sidebar" aria-label="Ana gezinme">
      <BrandWordmark />
      <nav className="sidebar-nav">
        {primaryLinks.map((link) => <Link key={link.href} href={link.href} aria-current={isCurrentPath(path, search, link.href) ? "page" : undefined}><Icon className="nav-icon" name={link.icon} />{link.label}</Link>)}
      </nav>
      <details className="nav-archive" open>
        <summary>Arşivim <Icon className="archive-chevron" name="chevronDown" /></summary>
        <div className="nav-archive__links">
          <Link href="/collections" aria-current={isCurrentPath(path, search, "/collections") ? "page" : undefined}>Koleksiyonlar</Link>
          <span aria-disabled="true">Listelerim <small>Yakında</small></span>
          <span aria-disabled="true">Takvim <small>Yakında</small></span>
          <span aria-disabled="true">Notlar <small>Yakında</small></span>
          <span aria-disabled="true">İstatistikler <small>Yakında</small></span>
        </div>
      </details>
      <div className="sidebar-footer">
        <Link className="profile-link" href="/profile" aria-current={isCurrentPath(path, search, "/profile") ? "page" : undefined}><span className="avatar" aria-hidden="true">M</span><span className="profile-label">Profil</span></Link>
        <span className="settings-link" aria-disabled="true"><Icon className="nav-icon" name="settings" />Ayarlar <small>Yakında</small></span>
      </div>
    </aside>
    <nav className="mobile-navigation" aria-label="Mobil ana gezinme">
      <Link href="/" aria-current={isCurrentPath(path, search, "/") ? "page" : undefined}><Icon name="home" />Ana Sayfa</Link>
      <Link href="/discover" aria-current={isCurrentPath(path, search, "/discover") ? "page" : undefined}><Icon name="search" />Keşfet</Link>
      <Link className="mobile-add" href="/discover" aria-label="İçerik ekle"><span aria-hidden="true"><Icon name="plus" /></span><b>Ekle</b></Link>
      <Link href="/collections" aria-current={isCurrentPath(path, search, "/collections") ? "page" : undefined}><Icon name="archive" />Arşivim</Link>
      <Link href="/profile" aria-current={isCurrentPath(path, search, "/profile") ? "page" : undefined}><Icon name="profile" />Profil</Link>
    </nav>
  </>;
}
