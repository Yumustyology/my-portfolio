import { Skeleton } from "../../atoms/magic-ui/Skeleton";

export const ExperienceSkeleton = () =>
  [1, 2, 3, 4, 5].map((skeleton) => (
    <div className="experience-info ml-[4%] w-[736px] opacity-90" key={skeleton}>
      <Skeleton className="h-6 w-1/4 mb-[.3em] bg-[#FFBD44]"></Skeleton>
      <div className="tabcontent-sm px-8 w-full">
        <Skeleton className="h-8 w-1/2 mb-2 bg-gray-100"></Skeleton>
        <Skeleton className="h-8 w-1/4 mb-2 bg-gray-100"></Skeleton>
        <Skeleton className="h-8 w-1/3 mb-2 bg-gray-100"></Skeleton>
        <Skeleton className="h-6 w-1/4 mb-2 bg-gray-100"></Skeleton>
        <Skeleton className="h-8 w-full mb-2 bg-gray-100"></Skeleton>
        <Skeleton className="h-8 w-full mb-2 bg-gray-100"></Skeleton>
      </div>
      <Skeleton className="h-6 w-1/4 mt-[.3em] mb-[3em] bg-[#FFBD44] float-right"></Skeleton>
    </div>
  ));
