"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import ListingSection from "@/components/ListingSection";
import ListingGrid from "@/components/ListingGrid";
import LoadingState from "@/components/LoadingState";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { listings as listingData } from "@/data/listings";
import { Listing } from "@/types/listing";

const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("Homes");

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(listingData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const matchesSearch =
        listing.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchValue.toLowerCase());

      const matchesCategory =
        activeCategory === "Homes" || listing.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [listings, searchValue, activeCategory]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar searchValue={searchValue} onSearchChange={setSearchValue} />
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-6 pb-28">
        {isLoading ? (
          <LoadingState />
        ) : (
          <>
            <ListingSection
              title="Popular homes in Orlando"
              listings={filteredListings}
            />

            <ListingSection
              title="Featured stays nearby"
              listings={filteredListings.slice().reverse()}
            />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Explore all stays
              </h2>
              <ListingGrid listings={filteredListings} />
            </section>
          </>
        )}
      </div>

      <Footer />
      <BottomNav />
    </main>
  );
};

export default HomePage;