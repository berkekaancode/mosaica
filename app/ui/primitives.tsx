import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export function PageContainer({ className = "", ...props }: HTMLAttributes<HTMLElement>) {
  return <main className={`page-container ${className}`} {...props} />;
}

export function Surface({ className = "", ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={`surface ${className}`} {...props} />;
}

export function SectionHeader({ title, action, children }: { title: string; action?: ReactNode; children?: ReactNode }) {
  return <header className="section-header"><div><h2>{title}</h2>{children}</div>{action}</header>;
}

export function SearchField({ className = "", type = "search", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`search-field ${className}`} type={type} {...props} />;
}

export function StatusPill({ tone = "neutral", children }: { tone?: "neutral" | "success" | "warning" | "error"; children: ReactNode }) {
  return <span className={`status-pill status-pill--${tone}`}>{children}</span>;
}

export function Skeleton({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`skeleton ${className}`} aria-hidden="true" {...props} />;
}

export function StateContainer({ title, children, tone = "empty" }: { title: string; children?: ReactNode; tone?: "empty" | "error" }) {
  return <section className={`state-container state-container--${tone}`} role={tone === "error" ? "alert" : undefined}><h2>{title}</h2>{children && <p>{children}</p>}</section>;
}
