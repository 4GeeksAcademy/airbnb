interface AmenitiesGridProps {
  amenities: string[];
}

const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section className="space-y-4 border-b border-gray-200 py-6">
      <h2 className="text-xl font-semibold text-gray-900">
        What this place offers
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-3 text-gray-700">
            <span className="text-xl">✓</span>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesGrid;