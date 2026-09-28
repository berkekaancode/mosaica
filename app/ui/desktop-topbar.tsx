import Link from "next/link";
import { Icon } from "./icons";
import { SearchField } from "./primitives";

export function DesktopTopbar() {
  return <header className="desktop-topbar">
    <form className="global-search" action="/discover" role="search">
      <Icon name="search" />
      <SearchField name="q" placeholder="Arşivinde ara veya keşfet" aria-label="Mosaica’da ara" />
    </form>
    <div className="topbar-actions">
      <Link className="topbar-add" href="/discover"><Icon name="plus" />Ekle</Link>
      <Link className="topbar-profile" href="/profile" aria-label="Profil"><span className="avatar" aria-hidden="true">M</span></Link>
    </div>
  </header>;
}
