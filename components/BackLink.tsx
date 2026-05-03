import Link from "next/link";

const BackLink = () => {
  return (
    <Link
      href="/catalog"
      className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800"
    >
      ← Back to results
    </Link>
  );
};

export default BackLink;