import { cn } from "../../lib/utils";
interface CarouselSkeletonProps {
  className?: string;
  itemCount?: number; // Number of skeleton items to show
}

export function CarouselSkeleton({
  className,
  itemCount = 4, // Default to showing 4 items
}: CarouselSkeletonProps) {
  return (
    // Main carousel container
    <div className={cn("w-full overflow-hidden", className)}>
      {/* Navigation buttons skeleton */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2">
          <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
        </div>

        {/* Carousel items container */}
        <div className="flex gap-4 px-12">
          {/* Generate skeleton items based on itemCount */}
          {Array.from({ length: itemCount }).map((_, index) => (
            <div
              key={index}
              className="w-[300px] flex-none" // Adjust width as needed
            >
              {/* Individual carousel item skeleton */}
              <div className="w-full space-y-4">
                {/* Image placeholder */}
                <div className="aspect-[16/9] w-full animate-pulse rounded-lg bg-gray-200" />

                {/* Title placeholder */}
                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />

                {/* Description placeholder */}
                <div className="space-y-2">
                  <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-3 w-5/6 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots skeleton */}
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 animate-pulse rounded-full bg-gray-200"
          />
        ))}
      </div>
    </div>
  );
}
