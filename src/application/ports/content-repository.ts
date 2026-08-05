import { Content } from "@/src/domain/content/content";
export interface ContentRepository { exists(id: string): Promise<boolean>; findById(id: string): Promise<Content | null>; search?(query: string, mediaType?: string): Promise<readonly Content[]>; save(content: Content): Promise<void>; }
