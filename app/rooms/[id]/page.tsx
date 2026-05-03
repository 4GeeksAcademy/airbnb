"use client";

import { use, useEffect, useState } from "react";
import BackLink from "@/components/BackLink";
import PhotoGallery from "@/components/PhotoGallery";
import ListingHeader from "@/components/ListingHeader";
import HostInfo from "@/components/HostInfo";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import BookingCard from "@/components/BookingCard";
import LoadingState from "@/components/LoadingState";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import { rooms } from "@/data/rooms";
import { Room } from "@/types/room";

interface RoomDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const RoomDetailPage = ({ params }: RoomDetailPageProps) => {
  const { id } = use(params);
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundRoom = rooms.find((roomItem) => roomItem.id === id);
      setRoom(foundRoom ?? null);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handlePreviousPhoto = () => {
    if (!room) return;

    setCurrentPhotoIndex((currentIndex) =>
      currentIndex === 0 ? room.photos.length - 1 : currentIndex - 1
    );
  };

  const handleNextPhoto = () => {
    if (!room) return;

    setCurrentPhotoIndex((currentIndex) =>
      currentIndex === room.photos.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handleDecreaseGuests = () => {
    setGuests((currentGuests) => Math.max(1, currentGuests - 1));
  };

  const handleIncreaseGuests = () => {
    if (!room) return;

    setGuests((currentGuests) =>
      Math.min(room.maxGuests, currentGuests + 1)
    );
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <PageNav />

        <div className="mx-auto max-w-6xl px-4 py-6">
          <LoadingState />
        </div>
      </main>
    );
  }

  if (!room) {
    return (
      <main className="min-h-screen bg-white">
        <PageNav />

        <div className="mx-auto max-w-6xl space-y-4 px-4 py-6">
          <BackLink />
          <h1 className="text-2xl font-semibold text-gray-900">
            Room not found
          </h1>
          <p className="text-gray-500">
            This listing does not exist. Please return to the catalog.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <PageNav />

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
        <BackLink />

        <PhotoGallery
          photos={room.photos}
          currentIndex={currentPhotoIndex}
          onPrevious={handlePreviousPhoto}
          onNext={handleNextPhoto}
        />

        <div className="grid gap-8 md:grid-cols-[1fr_360px]">
          <div>
            <ListingHeader
              title={room.title}
              rating={room.rating}
              reviewCount={room.reviewCount}
              location={room.location}
            />

            <HostInfo
              hostName={room.hostName}
              yearsHosting={room.yearsHosting}
            />

            <AmenitiesGrid amenities={room.amenities} />
          </div>

          <div className="md:sticky md:top-6 md:self-start">
            <BookingCard
              price={room.price}
              guests={guests}
              maxGuests={room.maxGuests}
              onDecreaseGuests={handleDecreaseGuests}
              onIncreaseGuests={handleIncreaseGuests}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default RoomDetailPage;