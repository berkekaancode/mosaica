"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [{ href: "/", label: "Ana Sayfa" }, { href: "/discover", label: "Keşfet" }, { href: "/library", label: "Kütüphane" }, { href: "/collections", label: "Koleksiyonlar" }, { href: "/profile", label: "Profil" }];
export function PrimaryNavigation() { const path = usePathname(); return <header className="app-header"><Link className="brand" href="/">Mosaica</Link><nav aria-label="Ana gezinme">{links.map((link) => <Link key={link.href} href={link.href} aria-current={path === link.href || (link.href !== "/" && path.startsWith(`${link.href}/`)) ? "page" : undefined}>{link.label}</Link>)}</nav></header>; }
