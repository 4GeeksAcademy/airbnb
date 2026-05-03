"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";

interface NavbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const Navbar = ({ searchValue, onSearchChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <div className="hidden shrink-0 font-bold text-rose-500 md:block">airbnb</div>
        <SearchBar searchValue={searchValue} onSearchChange={onSearchChange} />

        <nav className="hidden items-center gap-4 text-sm text-gray-700 md:flex">
          <Link href="/" className="rounded-full px-3 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link
            href="/catalog"
            className="rounded-full px-3 py-2 hover:bg-gray-100"
          >
            Catalog
          </Link>
          <Link
            href="/rooms/1"
            className="rounded-full px-3 py-2 hover:bg-gray-100"
          >
            Sample Room
          </Link>
        </nav>

        <div className="relative hidden shrink-0 md:block">
          <button
            type="button"
            aria-label="User menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="rounded-full border border-gray-200 px-3 py-2 text-sm"
          >
            ☰ 👤
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-3 w-40 rounded-2xl border border-gray-200 bg-white p-2 text-sm shadow-lg">
              <button
                type="button"
                className="block w-full rounded-xl px-3 py-2 text-left hover:bg-gray-100"
              >
                Log in
              </button>
              <button
                type="button"
                className="block w-full rounded-xl px-3 py-2 text-left hover:bg-gray-100"
              >
                Sign up
              </button>
              <button
                type="button"
                className="block w-full rounded-xl px-3 py-2 text-left hover:bg-gray-100"
              >
                Help
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;