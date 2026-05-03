interface ListingHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}

const ListingHeader = ({
  title,
  rating,
  reviewCount,
  location,
}: ListingHeaderProps) => {
  return (
    <section className="space-y-2 border-b border-gray-200 pb-6">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

      <div className="flex flex-wrap gap-2 text-sm text-gray-700">
        <span>★ {rating}</span>
        <span>·</span>
        <span>{reviewCount} reviews</span>
        <span>·</span>
        <span>{location}</span>
      </div>
    </section>
  );
};

export default ListingHeader;