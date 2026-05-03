interface PhotoGalleryProps {
  photos: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

const PhotoGallery = ({
  photos,
  currentIndex,
  onPrevious,
  onNext,
}: PhotoGalleryProps) => {
  return (
    <section className="space-y-3">
      <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-gray-100 text-8xl md:aspect-[16/7]">
        <span>{photos[currentIndex]}</span>

        <button
          type="button"
          onClick={onPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-2 text-sm shadow"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-2 text-sm shadow"
        >
          Next
        </button>
      </div>

      <p className="text-center text-sm text-gray-500">
        Photo {currentIndex + 1} of {photos.length}
      </p>
    </section>
  );
};

export default PhotoGallery;