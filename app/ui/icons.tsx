import type { ReactNode, SVGProps } from "react";

export type IconName = "archive" | "book" | "chevronDown" | "film" | "game" | "home" | "plus" | "profile" | "search" | "series" | "settings";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<IconName, ReactNode> = {
  archive: <><rect x="3" y="4" width="18" height="4" rx="1" /><path d="M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M9 12h6" /></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  film: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4" /></>,
  game: <><path d="M6 11h12a4 4 0 0 1 3.9 5l-.7 2.5a2 2 0 0 1-3.5.7L15 16H9l-2.7 3.2a2 2 0 0 1-3.5-.7L2.1 16A4 4 0 0 1 6 11Z" /><path d="M7 15h.01M10 15h.01M17 14h.01M18.5 16h.01" /></>,
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10M9 22v-6h6v6" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  profile: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  search: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.2-4.2" /></>,
  series: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 3v18M16 3v18M3 8h5M16 8h5M3 16h5M16 16h5" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.1 2.1-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-3v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-2.1-2.1.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H5v-3h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.1-2.1.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V3.5h3v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.1 2.1-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v3h-.2a1.7 1.7 0 0 0-1.6 1Z" /></>,
};

export function Icon({ name, className = "", ...props }: IconProps) {
  return <svg className={`app-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{paths[name]}</svg>;
}
