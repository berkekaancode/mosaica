export type HomeEntryRecord = {
  id: string;
  title: string;
  mediaType: string;
  coverReference: string | null;
  ratingTenths: number | null;
  createdAt: Date;
  consumptionEvents: { id: string; occurredAt: Date }[];
  favorite: boolean;
  status: string | null;
};

export type HomeCollectionRecord = {
  id: string;
  name: string;
  entryCount: number;
  previews: { title: string; mediaType: string; coverReference: string | null }[];
};

export interface HomeReadRepository {
  entriesForUser(userId: string): Promise<readonly HomeEntryRecord[]>;
  collectionsForUser(userId: string): Promise<readonly HomeCollectionRecord[]>;
}
