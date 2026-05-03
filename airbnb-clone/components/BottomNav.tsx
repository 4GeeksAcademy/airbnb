import Link from "next/link";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-200 bg-white px-6 py-3 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between text-xs">
        <Link href="/" className="flex flex-col items-center gap-1 text-rose-500">
          <span className="text-lg">🔍</span>
          <span>Explore</span>
        </Link>

        <button type="button" className="flex flex-col items-center gap-1 text-gray-500">
          <span className="text-lg">♡</span>
          <span>Wishlists</span>
        </button>

        <button type="button" className="flex flex-col items-center gap-1 text-gray-500">
          <span className="text-lg">👤</span>
          <span>Log in</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;