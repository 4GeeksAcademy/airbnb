interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { icon: "🏡", label: "Homes" },
  { icon: "🏖️", label: "Beach" },
  { icon: "🏰", label: "Mansions" },
  { icon: "🔥", label: "Trending" },
  { icon: "🏔️", label: "Cabins" },
  { icon: "🌅", label: "Amazing views" },
  { icon: "🏠", label: "Tiny homes" },
];

const CategoryFilter = ({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <section className="border-b border-gray-200 bg-white px-4">
      <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto py-3">
        {categories.map((category) => {
          const isActive = activeCategory === category.label;

          return (
            <button
              key={category.label}
              type="button"
              onClick={() => onCategoryChange(category.label)}
              className={`flex min-w-fit flex-col items-center gap-1 border-b-2 pb-2 text-xs ${
                isActive
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryFilter;