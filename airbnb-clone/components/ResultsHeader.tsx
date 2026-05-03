interface ResultsHeaderProps {
  resultCount: number;
  sortOrder: string;
  onSortChange: (value: string) => void;
}

const ResultsHeader = ({
  resultCount,
  sortOrder,
  onSortChange,
}: ResultsHeaderProps) => {
  return (
    <section className="flex flex-col gap-3 border-b border-gray-200 pb-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-gray-500">Orlando, Florida</p>
        <h1 className="text-2xl font-semibold text-gray-900">
          {resultCount} stays available
        </h1>
      </div>

      <label className="flex flex-col gap-1 text-sm text-gray-600">
        Sort by price
        <select
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value)}
          className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
        >
          <option value="asc">Price: low to high</option>
          <option value="desc">Price: high to low</option>
        </select>
      </label>
    </section>
  );
};

export default ResultsHeader;