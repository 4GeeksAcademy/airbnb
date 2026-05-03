import { Listing } from "@/types/listing";
import ListingCard from "./ListingCard";

interface ListingGridProps {
  listings: Listing[];
}

const ListingGrid = ({ listings }: ListingGridProps) => {
  if (listings.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 p-6 text-center text-sm text-gray-500">
        No listings found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingGrid;