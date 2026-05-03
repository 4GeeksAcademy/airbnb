import Link from "next/link";
import { Listing } from "@/types/listing";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="group block rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-900"
    >
      <article>
        <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-gray-100 text-7xl transition group-hover:bg-gray-200">
          <span>{listing.image}</span>

          {listing.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-sm">
              {listing.badge}
            </span>
          )}

          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-sm shadow-sm">
            ♡
          </span>
        </div>

        <div className="mt-3 space-y-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold text-gray-900">
              {listing.title}
            </h3>
            <p className="shrink-0 text-sm text-gray-800">★ {listing.rating}</p>
          </div>

          <p className="text-sm text-gray-500">{listing.location}</p>

          <p className="text-sm text-gray-900">
            <span className="font-semibold">${listing.price}</span> night
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ListingCard;