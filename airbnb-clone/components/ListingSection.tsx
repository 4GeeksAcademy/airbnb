import { Listing } from "@/types/listing";
import ListingCard from "./ListingCard";

interface ListingSectionProps {
  title: string;
  listings: Listing[];
}

const ListingSection = ({ title, listings }: ListingSectionProps) => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <button
          type="button"
          aria-label={`View more ${title}`}
          className="rounded-full border border-gray-200 px-3 py-1 text-sm"
        >
          →
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {listings.map((listing) => (
          <div key={listing.id} className="min-w-[240px]">
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListingSection;