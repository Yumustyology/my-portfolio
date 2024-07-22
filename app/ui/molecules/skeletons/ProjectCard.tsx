import { Skeleton } from "@/ui/atoms/magic-ui/Skeleton";

export const ProjectCardSkeleton = () => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[700px] lgDesktop:max-w-[800px] mx-auto">
    {[1, 2, 3, 4, 5].map((index) => (
      <Skeleton className="bg-[#464648] p-3.5" key={index}>
        <Skeleton className="h-48 bg-gray-300 rounded mb-4"></Skeleton>
        <Skeleton className="h-6 bg-gray-300 rounded w-3/4 mb-2"></Skeleton>
        <Skeleton className="h-4 bg-gray-300 rounded w-full mb-2"></Skeleton>
        <Skeleton className="h-4 bg-gray-300 rounded w-5/6 mb-4"></Skeleton>
        <Skeleton className="h-6 bg-gray-300 rounded w-1/3 mb-4"></Skeleton>
        <Skeleton className="flex items-center">
          <Skeleton className="h-6 w-6 bg-gray-300 rounded mr-2"></Skeleton>
          <Skeleton className="h-6 w-6 bg-gray-300 rounded"></Skeleton>
        </Skeleton>
      </Skeleton>
    ))}
  </div>
);
