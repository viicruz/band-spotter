export function ArtistCardSkeleton() {
  return (
    <div className="bg-transparent rounded-lg transition-all p-[2px]">
      <div className="flex flex-col items-center justify-center p-1 bg-white border rounded-lg shadow-lg w-36 h-44 border-neutral-300">
        <div className="overflow-hidden rounded-full max-w-32 min-w-32 max-h-32 min-h-32 bg-neutral-200 animate-pulse" />

        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-full h-6 bg-neutral-300 animate-pulse" />
          <div className="flex flex-row items-center gap-1">
            <span className="w-1/2 h-4 bg-neutral-200 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}