"use client";

import Link from "next/link";
import { useState } from "react";

const BottomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-200 bg-white px-6 py-3 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between text-xs">
        <Link href="/" className="flex flex-col items-center gap-1 text-rose-500">
          <span className="text-lg">🔍</span>
          <span>Home</span>
        </Link>

        <Link href="/catalog" className="flex flex-col items-center gap-1 text-gray-500">
          <span className="text-lg">🧭</span>
          <span>Catalog</span>
        </Link>

        <Link href="/rooms/1" className="flex flex-col items-center gap-1 text-gray-500">
          <span className="text-lg">🏠</span>
          <span>Room</span>
        </Link>

        <div className="relative">
          {isMenuOpen && (
            <div className="absolute bottom-full right-0 mb-2 w-36 rounded-xl border border-gray-200 bg-white p-2 text-sm text-gray-900 shadow-lg">
              <button
                type="button"
                className="block w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100"
              >
                Log in
              </button>
              <button
                type="button"
                className="block w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100"
              >
                Sign up
              </button>
              <button
                type="button"
                className="block w-full rounded-lg px-3 py-2 text-left hover:bg-gray-100"
              >
                Help
              </button>
            </div>
          )}

          <button
            type="button"
            aria-label="Mobile user menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex flex-col items-center gap-1 text-gray-500"
          >
            <span className="text-lg">👤</span>
            <span>Log in</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;