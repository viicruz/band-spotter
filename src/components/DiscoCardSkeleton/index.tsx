export function DiscoCardSkeleton() {
    return (
      <div className="flex flex-col p-1 gap-1 justify-center items-center max-w-[204px]">
        <div className='w-[196px] h-[196px] shadow-md rounded-lg bg-neutral-200 animate-pulse' />
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-3/4 h-6 rounded-lg bg-neutral-200 animate-pulse" />
          <div className="w-1/2 h-4 rounded-lg bg-neutral-200 animate-pulse" />
        </div>
      </div>
    );
  }