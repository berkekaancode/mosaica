import { Suspense, type ReactNode } from "react";
import { PrimaryNavigation } from "../primary-navigation";
import { DesktopTopbar } from "./desktop-topbar";

export function AppShell({ children }: { children: ReactNode }) {
  return <div className="mosaica-shell"><Suspense fallback={null}><PrimaryNavigation /></Suspense><div className="mosaica-content"><DesktopTopbar />{children}</div></div>;
}
