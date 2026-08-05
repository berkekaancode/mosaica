import { User } from "@/src/domain/user/user";
export interface UserRepository { findById(id: string): Promise<User | null>; save(user: User): Promise<void>; }
