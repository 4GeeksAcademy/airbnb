import Link from "next/link";

const PageNav = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white px-4 py-3">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-semibold text-rose-500">airbnb</div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
          <Link href="/" className="rounded-full px-3 py-1.5 hover:bg-gray-100">
            Home
          </Link>
          <Link
            href="/catalog"
            className="rounded-full px-3 py-1.5 hover:bg-gray-100"
          >
            Catalog
          </Link>
          <Link
            href="/rooms/1"
            className="rounded-full px-3 py-1.5 hover:bg-gray-100"
          >
            Sample Room
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PageNav;
