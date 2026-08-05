import { beforeEach, describe, expect, it, vi } from "vitest";

const appServices = vi.hoisted(() => ({ getLibraryEntryDetail: vi.fn(), updateLibraryEntryRating: vi.fn() }));
vi.mock("@/lib/app-services", () => appServices);
import { GET, PATCH } from "@/app/api/library-entries/[entryId]/route";

const context = { params: Promise.resolve({ entryId: "entry-1" }) };
describe("library entry detail route", () => {
  beforeEach(() => vi.resetAllMocks());
  it("returns an owned detail", async () => {
    appServices.getLibraryEntryDetail.mockResolvedValue({ id: "entry-1", content: { id: "content-1", title: "Arrival", mediaType: "MOVIE" }, rating: 8.5 });
    const response = await GET(new Request("http://localhost/api/library-entries/entry-1"), context);
    expect(response.status).toBe(200); expect((await response.json()).data.rating).toBe(8.5);
  });
  it("validates rating and translates a missing entry", async () => {
    appServices.updateLibraryEntryRating.mockRejectedValue(new Error("INVALID_RATING"));
    const invalid = await PATCH(new Request("http://localhost", { method: "PATCH", body: JSON.stringify({ rating: 8.55 }) }), context);
    expect(invalid.status).toBe(400); expect(appServices.updateLibraryEntryRating).toHaveBeenCalledWith("entry-1", 8.55);
    appServices.updateLibraryEntryRating.mockResolvedValue(null);
    const missing = await PATCH(new Request("http://localhost", { method: "PATCH", body: JSON.stringify({ rating: 8.5 }) }), context);
    expect(missing.status).toBe(404);
  });
});
