import { Content } from "@/src/domain/content/content";
export interface ContentRepository { exists(id: string): Promise<boolean>; findById(id: string): Promise<Content | null>; save(content: Content): Promise<void>; }
