"use client";

import { useMemo, useState } from "react";
import BottomNav from "@/components/BottomNav";
import ListingGrid from "@/components/ListingGrid";
import MapPlaceholder from "@/components/MapPlaceholder";
import ResultsHeader from "@/components/ResultsHeader";
import { listings } from "@/data/listings";

const CatalogPage = () => {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedListings = useMemo(() => {
    return [...listings].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      }

      return b.price - a.price;
    });
  }, [sortOrder]);

  return (
    <main className="min-h-screen bg-white px-4 py-5 pb-24">
      <div className="mx-auto max-w-6xl space-y-6">
        <ResultsHeader
          resultCount={sortedListings.length}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        <div className="grid gap-6 md:grid-cols-[1fr_420px]">
          <div>
            <ListingGrid listings={sortedListings} />
          </div>

          <div>
            <MapPlaceholder />
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
};

export default CatalogPage;