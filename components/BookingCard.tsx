interface BookingCardProps {
  price: number;
  guests: number;
  maxGuests: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
}

const BookingCard = ({
  price,
  guests,
  maxGuests,
  onDecreaseGuests,
  onIncreaseGuests,
}: BookingCardProps) => {
  return (
    <aside className="space-y-5 rounded-3xl border border-gray-200 p-5 shadow-lg">
      <div>
        <p className="text-2xl font-semibold text-gray-900">
          ${price} <span className="text-base font-normal">night</span>
        </p>
        <p className="text-sm text-gray-500">Reserve your stay</p>
      </div>

      <div className="rounded-2xl border border-gray-200 p-4">
        <p className="text-xs font-semibold uppercase text-gray-500">Guests</p>

        <div className="mt-3 flex items-center justify-between">
          <button
            type="button"
            onClick={onDecreaseGuests}
            disabled={guests <= 1}
            className="h-9 w-9 rounded-full border border-gray-300 disabled:opacity-40"
          >
            -
          </button>

          <span className="font-semibold text-gray-900">
            {guests} guest{guests > 1 ? "s" : ""}
          </span>

          <button
            type="button"
            onClick={onIncreaseGuests}
            disabled={guests >= maxGuests}
            className="h-9 w-9 rounded-full border border-gray-300 disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-rose-500 py-3 font-semibold text-white"
      >
        Reserve
      </button>

      <p className="text-center text-xs text-gray-500">
        You will not be charged yet.
      </p>
    </aside>
  );
};

export default BookingCard;