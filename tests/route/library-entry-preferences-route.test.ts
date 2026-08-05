import { beforeEach, describe, expect, it, vi } from "vitest";

const appServices = vi.hoisted(() => ({ updateLibraryEntryAppreciationLevel: vi.fn(), updateLibraryEntryFavorite: vi.fn(), updateLibraryEntryStatus: vi.fn(), updateLibraryEntryPersonalNote: vi.fn() }));
vi.mock("@/lib/app-services", () => appServices);
import { PATCH as appreciation } from "@/app/api/library-entries/[entryId]/appreciation-level/route";
import { PATCH as favorite } from "@/app/api/library-entries/[entryId]/favorite/route";
import { PATCH as status } from "@/app/api/library-entries/[entryId]/status/route";
import { PATCH as personalNote } from "@/app/api/library-entries/[entryId]/personal-note/route";

const context = { params: Promise.resolve({ entryId: "entry-1" }) };
describe("library entry preferences routes", () => {
  beforeEach(() => vi.resetAllMocks());
  it("saves an allowed appreciation level and rejects an invalid one", async () => {
    appServices.updateLibraryEntryAppreciationLevel.mockResolvedValue({ id: "entry-1" });
    expect((await appreciation(new Request("http://localhost", { method: "PATCH", body: JSON.stringify({ appreciationLevel: "LOVED" }) }), context)).status).toBe(200);
    appServices.updateLibraryEntryAppreciationLevel.mockRejectedValue(new Error("INVALID_APPRECIATION_LEVEL"));
    expect((await appreciation(new Request("http://localhost", { method: "PATCH", body: JSON.stringify({ appreciationLevel: "OTHER" }) }), context)).status).toBe(400);
  });
  it("validates boolean favorite, status values, and permits clearing a note", async () => {
    appServices.updateLibraryEntryFavorite.mockRejectedValue(new Error("INVALID_FAVORITE"));
    expect((await favorite(new Request("http://localhost", { method: "PATCH", body: JSON.stringify({ favorite: "true" }) }), context)).status).toBe(400);
    appServices.updateLibraryEntryStatus.mockRejectedValue(new Error("INVALID_STATUS"));
    expect((await status(new Request("http://localhost", { method: "PATCH", body: JSON.stringify({ status: "WATCHING" }) }), context)).status).toBe(400);
    appServices.updateLibraryEntryPersonalNote.mockResolvedValue({ id: "entry-1", personalNote: null });
    const response = await personalNote(new Request("http://localhost", { method: "PATCH", body: JSON.stringify({ personalNote: null }) }), context);
    expect(response.status).toBe(200); expect(appServices.updateLibraryEntryPersonalNote).toHaveBeenCalledWith("entry-1", null);
  });
});
