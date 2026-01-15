'use client';
export default function CountryError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center">
      <p>There was an error by retrieving the Country Data</p>
      <button>Try again</button>
    </div>
  );
}
