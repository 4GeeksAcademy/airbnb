interface SearchBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchValue, onSearchChange }: SearchBarProps) => {
  return (
    <div className="w-full rounded-full bg-white px-4 py-3 shadow-md ring-1 ring-gray-200">
      <label className="flex items-center gap-3 text-sm">
        <span className="text-lg">🔍</span>
        <input
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Start your search"
          className="w-full bg-transparent text-gray-900 outline-none placeholder:text-gray-500"
        />
      </label>
    </div>
  );
};

export default SearchBar;