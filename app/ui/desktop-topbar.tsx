import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";
import { SearchField } from "./primitives";

export function DesktopTopbar() {
  return <header className="desktop-topbar">
    <form
      className="global-search"
      action="/discover"
      role="search"
      style={{ width: "250px", maxWidth: "250px", minHeight: "38px" }}
    >
      <Icon name="search" />
      <SearchField name="q" placeholder="Arşivinde ara veya keşfet" aria-label="Mosaica’da ara" style={{ height: "38px", minHeight: "38px" }} />
    </form>
    <Link className="topbar-emblem" href="/" aria-label="Mosaica ana sayfa">
      <Image src="/brand/mosaica-emblem-v5.png" alt="" width={75} height={75} priority />
    </Link>
    <div className="topbar-actions">
      <Link className="topbar-add" href="/discover"><Icon name="plus" />Ekle</Link>
      <Link className="topbar-profile" href="/profile" aria-label="Profil"><span className="avatar" aria-hidden="true">M</span></Link>
    </div>
  </header>;
}
