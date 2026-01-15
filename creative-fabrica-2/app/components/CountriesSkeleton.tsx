export function CountriesSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {new Array(10).fill(undefined).map((_el, index) => (
        <div key={index} className="w-full h-[80px] bg-gray-400" />
      ))}
    </div>
  );
}
