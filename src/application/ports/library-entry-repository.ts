import { LibraryEntry } from "@/src/domain/library-entry/library-entry";
export interface LibraryEntryRepository { existsForUserAndContent(userId: string, contentId: string): Promise<boolean>; findById(id: string): Promise<LibraryEntry | null>; findByOwnerId(userId: string): Promise<readonly LibraryEntry[]>; save(entry: LibraryEntry): Promise<void>; }
